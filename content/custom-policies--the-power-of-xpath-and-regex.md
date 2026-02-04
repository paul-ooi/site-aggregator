---
title: Custom Policies: The Power of XPath and Regex
description: The DubBot app effectively identifies WCAG accessibility, broken links, and SEO issues. It provides a comprehensive initial assessment and a solid foundation for your remediation efforts. But sometime
url: https://dubbot.com/dubblog/2025/custom-policies-the-power-of-xpath-and-regex.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.554Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-03-13T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 334f6770ed7a9000cd847cf2d9cd8e38
---

The DubBot app effectively identifies WCAG accessibility, broken links, and SEO issues. It provides a comprehensive initial assessment and a solid foundation for your remediation efforts. But sometimes, you may need to dig deeper. Websites can be complex, with unique structures or custom components that might get overlooked. 

That's where DubBot's custom policies and the power of XPath and regex come in – they're like specialized diagnostic tools for your website's accessibility, best practices, and web governance.

## What are XPath and Regex? 

-   XPath: Navigate Your HTML
    -   XPath allows you to pinpoint specific elements within your HTML structure, like a GPS for your website.
    -   Need to target all images inside a particular div? XPath can do that.
    -   Want to find all links with a specific attribute? XPath has you covered.  
          
        
-   Regex: Pattern Matching
    -   Regex lets you search for specific text patterns, ensuring consistency and compliance.
    -   Do you want to check if all phone numbers are in a specific format? Regex can do that.
    -   Need to find all instances of a particular word or phrase? Regex is your go-to tool.

## Real-World Examples

These examples illustrate how XPath and regex can refine your website audits, allowing for more granular analysis.

**Consistent Phone Number Formatting**

-   Some organizations format their phone number with all hyphens, some with dots, and some with parenthesis. For example, 222-255-2555, 222.255.2555, or (222) 255-2555.  
      
    
-   This regex will flag phone numbers that DO NOT have parentheses.  
    `\(?\d{3}\)?-?\s?\d{3}-?\d{4}`  
      
    
-   You can also look for phone numbers that contain letters by using this regex  
    `<a(.*)href\=("|'){1}(tel:)(\d|\s)*[a-zA-Z]+(\d|\s)*("|'){1}`

**Searching Specific Areas of a Webpage**

-   Suppose you need to find an instance of a word on your site, but you don't want to search through the header or footer of the site, as you know the word already occurs there. 
-   The XPath used to execute this search while ignoring the instance in the header and footer would look like this.  
    `//*[contains(text(), 'School of Business') and not(ancestor::header) and not(ancestor::footer) and not(ancestor::title)]`

## Why Use XPath and Regex?

-   **Tailor Your Audits**  
    Create custom policies that match your website's unique needs.
-   **Improved Consistency**  
    Enforce accessibility and unique web governance standards across your entire website.

While XPath and regex might seem intimidating at first, numerous online resources and tutorials are available to help you learn. Start with basic expressions and gradually build your skills.

[Our Help documentation](https://help.dubbot.com/en/ "This link leaves the DubBlog website.") includes several articles to help you get started. DubBot provides an easy-to-use interface for creating and managing custom policies, making it easier than ever to leverage the power of XPath and regex. 

Account administrators can also use the "[Informational Search](../2024/information-gathering-and-the-new-informational-search.html)" policy category to find information specific to their DubBot account without affecting their scores.

If you have further questions or need assistance creating an XPath or regex-powered custom policy, please contact our support team at [help@dubbot.com](mailto:%20help@dubbot.com) or via the blue chat bubble in the lower right corner of your screen.  

### DubBot Help Documentation

-   [Regex and XPath for Custom Policies](https://help.dubbot.com/en/articles/8991547-regex-and-xpath-for-custom-policies "This link leaves the DubBlog website.")
-   [XPath use cases](https://help.dubbot.com/en/?q=xpath "This link leaves the DubBlog website.")
-   [Regex use case](https://help.dubbot.com/en/?q=regex "This link leaves the DubBlog website.")

## Resources

-   [What is XPath?](https://www.w3schools.com/xml/xpath_intro.asp "This link leaves the DubBlog website.")
-   [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions "This link leaves the DubBlog website.") (regex)

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.