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

  async fetchArticles(): Promise<Article[]> {
    const response = await axios.get(this.url);
    const $ = load(response.data);
    
    const source = this.determineSource($, this.url);
    const organization = this.extractOrganization($);
    const tags = this.extractTags($);
    const summary = await this.getSummary($);

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
      tags,
      summary,
      sourceType: 'direct'
    }];
  }
}