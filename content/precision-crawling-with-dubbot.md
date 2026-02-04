---
title: Precision Crawling with DubBot
description: Just like a librarian who meticulously inventories every shelf in a library, writing down the title, author, and subject of each book, a website crawl, also known as a spider crawl or web crawl, is th
url: https://dubbot.com/dubblog/2025/precision-crawling-with-dubbot.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.381Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-05-06T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 4d2d52a8b47d39d91e9d904806fc3c76
---

## What is meant by crawling a website?

  
Just like a librarian who meticulously inventories every shelf in a library, writing down the title, author, and subject of each book, a website crawl, also known as a spider crawl or web crawl, is the process where automated software, often called a web crawler, systematically browses the Web and records information like the text content, images, videos, and links to other pages.

However, website crawls can also provide information like identifying broken links, spelling errors, and accessibility issues.  

DubBot is a web crawler that [does all that and more](https://dubbot.com/features/index.html "This link leaves the DubBot website."). DubBot even offers four different crawling options. Let’s look at each option and when each would be the most appropriate and beneficial.

### Default Crawler

Selecting Default Crawler means DubBot will crawl your website based on a specified URL, one that you provide. It will follow the site hierarchy of that domain or subdirectory. For example, if you provide this URL, `https://myorganization.com/contactus`, DubBot will only crawl the "contactus" subdirectory.

#### Best Use

If your organization uses a distributed content model, this crawler type enables content managers to concentrate on relevant website crawls by configuring separate Sites for each subdirectory or subdomain.

### Full Domain

If you choose "Full Domain" as your crawler, DubBot will crawl everything within the URL domain you provide, including content outside of a subdirectory. For example, if you provide this URL, `https://myorganization.com/contactus`, DubBot will crawl everything in the myorganization.com domain. 

#### Best Use

Full domain crawls are most commonly used when a site's homepage is coded in a way that prevents crawling from that entry point.

### What's the difference between the two?

What makes Full Domain different from Default is that Full Domain will crawl links outside of a subdirectory.

### List of URLs Crawl

The List of URLs crawl type is intended for explicit URL testing, whether for one URL or many. It will only crawl what is explicitly added. You can add URLs manually or upload a CSV list.

#### Best Use

This is a great option when you only need to test specific pages—for example, a very dynamic page that is updated often or a one-time page that contains an event registration form.

### Sitemap Crawl

Sitemap Crawl functions exactly the way it sounds like it should. DubBot can use your sitemap.xml file to crawl your site. Note that if your sitemap includes redirect URLs, those will also be crawled.

#### Best Use

Your sitemap acts like a roadmap for your website. The crawler knows which URLs you want it to find and index. If you create a lot of new content (maybe for a big event) and regularly update your sitemap, a crawler that regularly checks it can discover and index those new pages much faster than it might otherwise.

And by the way, all these crawler options are available behind a login. That means you can keep your intranet compliant and / or test your new website while it is still in development. 

If you have questions about these crawler types and / or which would best serve your objectives, please email our DubBot Support team at [help@dubbot.com](mailto:help@dubbot.com).

## Resources

-   [Site Crawler Options](https://help.dubbot.com/en/articles/3204505-site-crawler-options "This link leaves the DubBlog website.")
-   [Why is my DubBot site indexing URLs outside of our Page Set or domain?](https://help.dubbot.com/en/articles/5952665-why-is-my-dubbot-site-indexing-urls-outside-of-our-page-set-or-domain "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.