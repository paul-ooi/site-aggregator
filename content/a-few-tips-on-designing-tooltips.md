---
title: A Few Tips on Designing Tooltips
description: A tooltip is one of those concepts that's often misunderstood. Many people think of a tooltip as a single UI element, but it's actually made up of two working parts. The trigger element and the toolti
url: https://dubbot.com/dubblog/2026/a-few-tips-on-designing-tooltips.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-08-01T10:44:29.287Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-07-14T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: b56183f62801968169b31476a7425f67
---

A tooltip is one of those concepts that's often misunderstood. Many people think of a tooltip as a single UI element, but it's actually made up of two working parts. The trigger element and the tooltip. That fact was not always evident in some of the various publications I read while preparing this blog post. If those terms aren't clearly defined from the start, it's easy for readers to lose track of what you're talking about.

After all, not everyone is an accessibility specialist, front-end developer, or HTML expert. Many are simply trying to build more accessible websites while learning as they go. And some readers process information more effectively when it's presented clearly and in plain language, making content more accessible and usable. A little extra context and clear terminology can make the difference between a concept that’s easy to understand and one that leaves readers scratching their heads.🤔

Now, before we dive in, I want to be clear. This post isn't about the code behind tooltips. Whether to use ARIA, semantic HTML, or another implementation pattern is an important discussion with multiple valid perspectives among accessibility experts and development teams. Rather than prescribe a specific coding pattern, this blog post focuses on universally applicable design and content best practices for when and how to use tooltips.

## What is a Tooltip?

A tooltip is a small, temporary pop-up, usually text, that provides details about an element on the page. Its purpose is to provide brief, helpful information without adding permanent content to the page.

A triggering element is the element that the user interacts with that causes the tooltip to appear. A trigger element can be a button, link, icon, form field, or other control. It can be triggered by a click, a tap, a mouseover, or a keyboard focus. The trigger element controls when a tooltip appears and disappears. When the interaction ends, or the user dismisses it, for example by pressing the Esc key, the tooltip closes.

## Designing a Useful Tooltip

Tooltips look deceptively simple. Display a small box with some text, then make it disappear. Yet, that simplicity is also what makes them easy to get wrong. Creating a tooltip that's genuinely helpful takes a little planning, but a few purposeful design and content choices can make all the difference.

First, decide if that piece of content should really be a tooltip. Remember, tooltips are for **supporting information**; they are **not primary information**. Tooltips should reduce cognitive load by keeping interfaces uncluttered, not by concealing information users need to succeed. If users need to read several sentences to understand something, it's usually better presented as inline help, an expandable section, or a dedicated help page.

### What’s Considered Primary Information?

Primary information is content that helps users successfully complete their goals. It supports task completion by providing the information users need to perform an action correctly, informs the decisions they make, and helps prevent mistakes or misunderstandings before they happen. It also includes information that organizations are required to communicate, such as legal disclosures, accessibility details, or policy information. Most importantly, primary information is actionable information. It gives users the information they need, when they need it.

### What’s Considered Supporting Information?

Tooltips serve as supporting information, giving users the extra context they need without interrupting their workflow. A tooltip can describe simple required data formats, such as a date, explain why specific information is being requested, or define unfamiliar terminology or acronyms. The goal is to answer likely questions as they arise, while keeping the main interface focused and uncluttered.

### Examples

**Good Tooltip**

CPACC ⓘ  
Certified Professional in Accessibility Core Competencies

  
Defines an abbreviation or an acronym.

**Poor Tooltip**

Access Policy ⓘ  
_By accessing and using this website, you agree to comply with all applicable laws, regulations, and these Terms of Use. You are responsible for ensuring that any information you submit is accurate, complete, and does not violate the rights of others. Unauthorized use of this website, including attempts to disrupt its operation or gain unauthorized access to systems or data, is strictly prohibited._

This is primary information and a legal statement, and it should be available on the page, not in a tooltip.

### Best Practice Do’s for Writing a Tooltip  

-   One purpose: explain a term, confirm a setting, warn about an outcome, or show what an icon / button does. Do not combine it all into one.  
      
    
-   Short, succinct, skimmable wording: one to two brief sentences or better yet, a few short phrases. Always lead with the key point first.  
      
    
-   Use plain language: no internal jargon, no marketing fluff. 
-   Be contextual: write the tooltip specifically for the element that triggers it, referring to the field, action, or terminology that helps users understand what is expected.  
      
    
-   Include _the why_ only when it matters: e.g., _Why this matters_ or _What changes if you enable this_, but keep it concise.  
      
    
-   Use consistent formatting: maintain the same voice and format throughout the UI.  
      
    
-   Make dismissal predictable: users should not have to hunt for a way to close a tooltip.  
      
    
-   Be accessible: make sure the trigger element is accessible via both **keyboard and mouse**, not just by hovering.  
      
    
-   Keep the tooltip open: stay open long enough for the user to read all the content.

### Best Practice Don’ts for Writing a Tooltip  

-   Avoid duplicating the label: if a tooltip repeats the button text word-for-word, it’s redundant and unnecessary.  
      
    
-   Don’t hide required or critical instructions: if hiding them increases the risk of failure, the tooltip is unnecessary, and the instructions belong on the page. 
-   Do not use tooltips to explain every form field: if you need a tooltip for every field, your form fields need to be clearer, more succinct, and easier to understand to avoid the need for tooltips.  
      
    
-   Do not include interactive controls: tooltips with links are not accessible to keyboard users.  
      
    
-   Do not use multiple or long paragraphs:  this makes the tooltip difficult to read and understand. If you need multiple paragraphs, the content should be on the page and not in a tooltip.  
    

-   Don’t use tooltips for error messages: errors are critical information and need immediate visibility. If an error is hidden inside a tooltip, users may never see it.  
      
    
-   Do not put legal statements in tooltips: users may not notice the trigger, and hiding legal language may not meet organizational, regulatory, or legal requirements, thus creating compliance and legal risks.  
    

-   **Do not use tooltips as a substitute for improving the interface.**

### Best Practices for Visuals

A good tooltip provides helpful context exactly when needed, is easy to read at a glance, and disappears without interrupting the user's workflow.  

-   Use Proper Contrast ([WCAG SC 1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))  
    Make the trigger element and the tooltip visually distinct from the background using a minimum contrast ratio of at least 4.5:1. Both elements should stand out without being distracting.  
      
    
-   Keep Typography [Simple and Highly Readable  
    ](https://dubbot.com/dubblog/2024/the-power-of-words-choosing-and-using-accessible-fonts.html)The right fonts and spacing can increase readability and reduce cognitive load. Choose a readable font size, typically 14–16px, and maintain a sufficient line height, around 1.4–1.6, to make text easier to scan. Use camelCase rather than ALL CAPS, which can slow reading and make content harder to process. And allow text to wrap naturally.  
      
    
-   Use Proper Target Size ([WCAG SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html))  
    Trigger elements should be large enough to be easily identified and activated, especially when using touch, clicking, or hover interactions. Small targets can be difficult for users with motor impairments, mobile users, or anyone navigating in challenging conditions.  
      
    
-   Clearly Associate the Tooltip with its Trigger Element  
    Place tooltips close to the element that triggers them without covering important content. Keep their placement consistent throughout the interface so users always know where to look. Clear, predictable positioning reduces cognitive effort by making it easy to connect the tooltip with the information it explains.

Tooltips work best when they're used to provide helpful guidance without getting in the way. While there are different approaches to implementing them, the design and content practices in this post can help any team create tooltips that are clear, useful, and accessible. When we focus on what users actually need in the moment, even small details like a well-designed tooltip can make a meaningful difference in the users’ experience.

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.

## Resources

-   [Deque University: Tooltip](https://dequeuniversity.com/library/aria/tooltip "This link leaves the DubBlog website.")
-   [Tooltips that Work for Everyone](https://elevenways.be/en/articles/tooltips-that-work-for-everyone "This link leaves the DubBlog website.")
-   [Tooltip Pattern | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/ "This link leaves the DubBlog website.")