---
title: Accessibility Face-Off: How DubBot's 2025 Top Five Accessibility Issues Compare to 2024
description: The web is constantly evolving. Standards change, design trends come and go, and digital teams are always balancing competing priorities. Yet amid all this movement, one thing remains consistent. Acce
url: https://dubbot.com/dubblog/2025/accessibility-face-off-how-dubbots-2025-top-five-accessibility-issues-compare-to-2024.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:01.556Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-12-10T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: ce11763ac9f655c00e753e99fb630ef0
---

The web is constantly evolving. Standards change, design trends come and go, and digital teams are always balancing competing priorities. Yet amid all this movement, one thing remains consistent. Accessibility issues continue to surface. Each year, DubBot analyzes hundreds of thousands of client pages to help them identify those accessibility issues. In 2025, several familiar challenges were once again prevalent, but the order of prominence shifted from what we discovered in 2024.

Let’s break down the top accessibility issues flagged by DubBot this year and why they matter, followed by a detailed comparison of how these findings differ from 2024.

1.  **Color Contrast** ([SC 1.4.3: Contrast Minimum, Level AA](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html "This link leaves the DubBlog website."))  
    Color contrast once again topped the list in 2025. This issue remains one of the most prevalent barriers for users with low vision or [color vision deficiencies](https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/color-vision-deficiency "This link leaves the DubBlog website."). Poor contrast can stem from brand-driven color choices, insufficient testing, or unintentional combinations created during design iterations.  
      
    
2.  **Links With the Same Accessible Name That Must Serve a Similar Purpose** ([SC 2.4.9, Link Purpose (Link Only) Level AAA](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html "This link leaves the DubBlog website."))  
    This one moved up in the rankings from 2024. Plainly stated, users should be able to understand where a link leads **solely from the link text,** without relying on surrounding content. This is critical for screen reader users when they invoke the link list feature, which only reads a list of links available on a page. Or when a sighted user scans a page or tabs from link to link, looking for additional information. _Best practice is that links with the same destination would have the same descriptions, but links with different purposes and destinations would have different descriptions…_ ~ [SC 2.4.9, Link Purpose#intent  
      
    ](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html#intent "This link leaves the DubBlog website.")
3.  **Links Must Have Discernible Text** ([SC 2.4.4: Link Purpose (In Context) Level A](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html "This link leaves the DubBlog website."))  
    This issue moved down one from last year. Links without meaningful text, whether they rely solely on icons, images, or ARIA attributes, pose significant barriers for screen reader users who rely on descriptive labels to understand what a link does. The **purpose of each link should be available through any combination** of the link text, accessible name, nearby or associated content such as a paragraph, heading, or list, or programmatically determined.  
      
    
4.  **ARIA-Hidden Elements Should Not Be Focusable** ([SC 4.1.2: Name, Role, Value, Level A)  
    ](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html "This link leaves the DubBlog website.")ARIA misuse is still a significant challenge, appearing again in 2025’s top five. When misused, ARIA can actually generate accessibility barriers rather than removing them. This can create confusion and unpredictable experiences for keyboard-only users and those using assistive technologies.  
      
    
5.  **Scrollable Content Must Be Keyboard Accessible** ([SC 2.1.1: Keyboard, Level A](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html "This link leaves the DubBlog website."))  
    A newcomer to the 2025 list is inaccessible scrollable content. When scrollable regions lack appropriate focus management or keyboard handling, users who can’t use a mouse may be unable to access essential content. This criterion ensures that pointer actions have a keyboard equivalent.

## How 2025’s Findings Compare to 2024

Here’s how 2025 stacks up against 2024:

### Recurring Issues Across Both Years

Three issues appeared in the top five in both 2024 and 2025:

-   Color Contrast
-   Links Must Have Discernible Text
-   ARIA-Hidden Elements Should Not Be Focusable

Appearing on the list for a second year in a row may suggest that organizations look for opportunities to strengthen their foundational accessibility practices. Centralizing content creation can reduce the siloed workflows that often lead to inconsistent or non-compliant experiences. Likewise, refining design systems so accessibility is built in from the very beginning and reinforced at every stage helps teams create more consistent, WCAG-aligned content.

### Issue Resurfacing in a Different Order

The requirement that **links with the same accessible name serve a similar purpose** appeared in both years, but moved up a spot in 2025. This shift could indicate a couple of things:

-   better testing tools
-   increased awareness of semantic link quality

### A Major Change: Missing ALT Text Drops Off the 2025 List

In 2024, **missing ALT Text** ranked among the top accessibility issues. In 2025, it no longer appears in DubBot’s top five. 

This change may indicate progress in educating content creators and editors about image descriptions. Another possibility is improved CMS workflows, better guardrails, and automated prompts that remind users to add ALT text.

### A New Issue Emerges in 2025

The addition of **keyboard-inaccessible scrollable content** is the most notable shift in this year’s findings. This shift could result from design trends moving toward richer experiences. Those experiences may include:

-   an increase in custom UI patterns and / or
-   an increase in the use of interactive components

The 2025 DubBot findings should serve to remind us that accessibility isn’t a one-and-done process. It’s an ongoing practice, more like tending a garden, less like checking a box.

Addressing these and other accessibility issues early and in every step of your workflow will help you stay ahead of the curve while building a robust, more inclusive experience for every visitor.

## Resources

-   [Top Five Accessibility Issues 2024](https://dubbot.com/dubblog/2024/top-five-accessibility-issues-2024.html "This link leaves the DubBlog website.")
-   [Top Twelve DubBot Reported Accessibility Issues of 2024-25](https://docs.google.com/spreadsheets/d/14__AJH6-W-I0NzYMUHSYZTApxrnfdxQ99Fs2M30kXA4/edit?usp=sharing "This link leaves the DubBlog website.") (spreadsheet)

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.