import type { Source } from '../../types/source';
import type { Article } from '../../types/article';
import { load, type CheerioAPI } from 'cheerio';
import axios from 'axios';

export class DirectSource implements Source {
  constructor(public url: string) {}

  /**
   * Extract keywords as tags from the meta tag=keywords
   * @param $ CheerioAPI instance
   * @returns Array of tags
   */
  private extractTags($: CheerioAPI): string[] {
    const keywords = $('meta[name="keywords"]').attr('content');
    if (!keywords) return [];
    return keywords.split(',').map(tag => tag.trim());
  }

  /**
   * Extracts the organization name from the HTML content.
   * This is a basic implementation and may need to be adjusted for different websites.
   */
  private extractOrganization($: CheerioAPI): string {
    const copyrightText = $('footer, .footer, .copyright').find('*').filter((_, el) => {
      const text = $(el).text().toLowerCase();
      return text.includes('©') || text.includes('copyright');
    }).first().text();

    if (!copyrightText) return '';

    // Remove the year pattern (4 digits) and common symbols
    return copyrightText
      .replace(/©|copyright|copyrights|\d{4}|all rights reserved/gi, '')
      .replace(/[.,]/g, '')
      .trim();
  }

  /**
   * Determines the source of the article based on the canonical link or the default URL.
   * @param $ CheerioAPI instance
   * @param defaultUrl The default URL of the article
   * @returns The hostname of the source
   */
  private determineSource($: CheerioAPI, defaultUrl: string): string {
    let hostname = new URL(defaultUrl).hostname;
    const canonical = $('head link[rel="canonical"]').attr('href');
    
    if (canonical) {
      if (canonical.startsWith('http')) {
        const url = new URL(canonical);
        hostname = url.hostname;
      } else if (canonical.startsWith('/')) {
        const url = new URL(canonical, defaultUrl);
        hostname = url.hostname;
      }
    }
    
    return hostname;
  }

  private async getSummary($: CheerioAPI): Promise<string> {
    // TODO: Implement AI service call here
    return $('meta[name="description"]').attr('content') || '';
  }

  /**
   * Normalizes date strings in various formats to ISO string
   */
  private normalizeDate(dateStr: string): string | undefined {
    // Remove common text patterns
    dateStr = dateStr.replace(/published|posted|on|date|updated/gi, '').trim();
    
    // Handle relative dates
    if (dateStr.match(/(\d+)\s*(hour|day|week|month|year)s?\s+ago/i)) {
      const [num, unit] = dateStr.match(/(\d+)\s*(hour|day|week|month|year)/i)!.slice(1);
      const date = new Date();
      switch(unit.toLowerCase()) {
        case 'hour': date.setHours(date.getHours() - parseInt(num)); break;
        case 'day': date.setDate(date.getDate() - parseInt(num)); break;
        case 'week': date.setDate(date.getDate() - parseInt(num) * 7); break;
        case 'month': date.setMonth(date.getMonth() - parseInt(num)); break;
        case 'year': date.setFullYear(date.getFullYear() - parseInt(num)); break;
      }
      return date.toISOString();
    }

    try {
      const date = new Date(dateStr);
      if (!isNaN(date.getTime())) {
        return date.toISOString();
      }
    } catch (e) {}

    return undefined;
  }

  /**
   * Extracts the original publish date from various possible locations in the HTML
   * @param $ CheerioAPI instance
   * @returns ISO date string if found, undefined otherwise
   */
  private extractPublishDate($: CheerioAPI): string | undefined {
    // Check JSON-LD first
    const jsonLd = $('script[type="application/ld+json"]');
    for (let i = 0; i < jsonLd.length; i++) {
      try {
        const data = JSON.parse($(jsonLd[i]).text());
        const date = data.datePublished || data.publishedDate;
        if (date) return new Date(date).toISOString();
      } catch (e) {}
    }

    // Check meta tags
    const metaDate = 
      $('meta[property="article:published_time"]').attr('content') ||
      $('meta[name="date"]').attr('content') ||
      $('meta[name="publish_date"]').attr('content') ||
      $('meta[name="published_date"]').attr('content');
    
    if (metaDate) return new Date(metaDate).toISOString();

    // Check common date elements with expanded selectors
    const dateSelectors = [
      'time[datetime]',
      '[class*="publish"]',
      '[class*="date"]',
      '[class*="time"]',
      '[itemprop="datePublished"]',
      '[property="datePublished"]',
      'article time',
      '.article-date',
      '.post-date',
      '.entry-date',
      '.meta-date',
      '.timestamp',
      '.byline time'
    ];

    for (const selector of dateSelectors) {
      const elements = $(selector);
      for (const element of elements) {
        const $el = $(element);
        const dateStr = $el.attr('datetime') || $el.attr('content') || $el.text();
        
        if (dateStr) {
          const normalizedDate = this.normalizeDate(dateStr);
          if (normalizedDate) return normalizedDate;
        }
      }
    }

    return undefined;
  }

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    const $ = load(response.data);
    
    const source = this.determineSource($, this.url);
    const organization = this.extractOrganization($);
    const tags = this.extractTags($);
    const summary = await this.getSummary($);
    const sourcePublishDate = this.extractPublishDate($);

    const title = $('meta[property="og:title"]').attr('content') || $('title').text().trim();
    const description = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';

    return [{
      title,
      description,
      externalUrl: this.url,
      internalUrl: '',
      source,
      organization: organization || source,
      repostedDate: new Date().toISOString(),
      sourcePublishDate,
      tags,
      summary,
      sourceType: 'direct'
    }];
  }
}