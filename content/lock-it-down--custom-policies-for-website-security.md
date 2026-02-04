---
title: Lock It Down: Custom Policies for Website Security
description: Website security. It's not just for big corporations. If your website collects any information, you have to make sure it’s secure. DubBot can help you do that with its Website security policy set.
url: https://dubbot.com/dubblog/2025/lock-it-down-custom-policies-for-website-security.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.593Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-03-11T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 151a6e62da2b1ca29df34d385061fbe6
---

Website security. It's not just for big corporations. If your website collects any information, you have to make sure it’s secure. DubBot can help you do that with its [Website security policy set](https://help.dubbot.com/en/articles/8095770-policy-set-website-security-best-practices "This link leaves the DubBlog website.").

This policy set includes four custom policies designed to check your content, embedded third-party applications, and internet protocols for possible security threats. Let’s look at each one, what it tests for, and why it is an essential policy for your website’s security.

## Personal Identification Information (PII) potentially  
on a page  
![This policy flags social security number within pages. Two regular expressions are used, both ignore case. One checks for a particular format and the other for another format.](../../images/blog-content/2025/PII-policy.png) 

The Department of Labor defines PII as "information that can be used to distinguish or trace an individual’s identity, either alone or when combined with other information linked or linkable to a specific individual."

Think names, addresses, emails, phone numbers, even IP addresses. If your site collects any of this, you're holding valuable data. Hackers love valuable data.

## Embedded Video / Audio  
![Looks for videos and audios that are embedded on the page rather than linked to. The rule is written in Xpath.](../../images/blog-content/2025/third-party-embed.png) 

Embedding third-party apps (like analytics tools, chat widgets, or social media like YouTube) can add great features to your site. But they can also introduce security risks. 

Third-party apps may contain vulnerabilities or malicious code that can compromise your system. For example, outdated software from independent developers may be left vulnerable to the latest security threats.

## HTTP mixed content on HTTPS pages  
![Looks for HTTPS pages that refer to HTTP resources. The rule is written in Xpath.](../../images/blog-content/2025/mixed-protocols.png)

Unsecured web pages pose a significant security risk. When resources like images, scripts, or stylesheets are transmitted without encryption (HTTPS), they're vulnerable to interception.

## Form present on page  
![Looks for HTML forms on any webpage. The rule is written in Xpath.](../../images/blog-content/2025/web-forms.png)

Web forms are relatively exposed compared to other website applications. This, coupled with their frequent handling of sensitive data like payment details and PII, makes them particularly susceptible to security breaches. 

Website security is an ongoing process. Be sure to [import DubBot’s Website security policy set](https://help.dubbot.com/en/articles/6840211-policy-library-overview#h_7f2c77272c "This link leaves the DubBlog website.") into your custom policies to include them in every website crawl. Educate your team about website security and foster a culture of vigilance.

If you have questions or need assistance importing any of DubBot's policy sets, please contact our support team at [help@dubbot.com](mailto:%20help@dubbot.com) or via the blue chat bubble in the lower right corner of your screen.

## Resources

-   [Form Checks with DubBot](../2024/form-checks-with-dubbot.html)
-   [What is mixed content?](https://www.cloudflare.com/learning/ssl/what-is-mixed-content/#:~:text=With%20mixed%20content%2C%20users%20will,tracking%20and%20on%2Dpath%20attacks. "This link leaves the DubBlog website.")
-   [Policy Library Overview](https://help.dubbot.com/en/articles/6840211-policy-library-overview#h_0dbe4a7f09 "This link leaves the DubBlog website.")
-   [Security on the Web - Mixed Content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content "This link leaves the DubBlog website.")
-   [Policy Set - Website security best practices](https://help.dubbot.com/en/articles/8095770-policy-set-website-security-best-practices "This link leaves the DubBlog website.")
-   [Guidance on the Protection of Personally Identifiable Information (PII)](https://www.dol.gov/general/ppii "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.