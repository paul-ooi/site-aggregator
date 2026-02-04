---
title: ARIA Is Not Aspirin: Stop Using It to Fix Everything
description: ARIA can be a powerful tool for creating accessible web content. But it’s not a universal solution. When misused, it can actually generate accessibility barriers rather than removing them, creating co
url: https://dubbot.com/dubblog/2025/aria-is-not-aspirin-stop-using-it-to-fix-everything.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:01.601Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-12-04T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: a8723ecc757a090394dbc1c042ad1fe8
---

ARIA can be a powerful tool for creating accessible web content. But it’s not a universal solution. When misused, it can actually generate accessibility barriers rather than removing them, creating confusion for assistive technologies and the users who rely on them. Understanding how and when to use it is key to creating truly accessible experiences.

Let's take a look.

## What is ARIA?

Accessible Rich Internet Applications (ARIA) is a framework of roles and attributes designed to improve accessibility for web content and applications, particularly those built with JavaScript. It enhances HTML by allowing interactive elements and custom widgets to convey their purpose and behavior to assistive technologies when native HTML cannot.

## When to Use ARIA

Before deciding to use ARIA, make sure you understand [The First Rule of ARIA](https://w3c.github.io/using-aria/#rule1 "This link leaves the DubBlog website."):

> If you can use a native HTML element or attribute with the semantics and behavior you require **already built in**, instead of re-purposing an element and adding an ARIA role, state, or property to make it accessible, **then do so**. ~ [Using ARIA](https://w3c.github.io/using-aria/#rule1 "This link leaves the DubBlog website."), W3C

There are valid reasons in which the use of ARIA is appropriate:

### When HTML technically can do what you need, but the actual implementation falls short on accessibility support.

**Example**: Using <details> and <summary> for an accordion. These two elements should handle a basic accordion. They're semantic, simple, and even have built-in open / closed behavior. 

But some screen readers still announce the state inconsistently, or they expose the toggle in ways that confuse users, especially when the pattern gets more complex than a single disclosure. Keyboard behavior also varies between browsers.

The lack of consistent accessibility support may require you to add ARIA roles (button, aria-expanded, aria-controls) and scripted behavior to make the experience reliable for everyone.

### When design requirements won’t allow you to use the appropriate native element because the element can’t be styled or customized enough to meet the requirements.

**Example**: You want a toggle switch that matches your brand’s design with rounded edges, custom colors, and a smooth sliding animation. The native HTML <input type="checkbox"> can function as a toggle, but the browser largely controls its appearance.

In this case, developers often create a custom toggle using a <div> or <button>, then use ARIA roles like role="switch" and aria-checked to make it accessible, since the native element can’t meet the visual design requirements.

### When you genuinely need a role or behavior that HTML doesn’t offer.

**Example**: You want a custom slider, a vertical slider, multi-thumb ranges, or non-linear scaling that allows users to select a range of values with fine-grained control. 

HTML has <input type="range">, but it might not meet your design or interaction requirements. 

Since HTML doesn’t provide a native element or role for that exact functionality, you’d use ARIA roles and properties (role="slider", aria-valuemin, aria-valuemax, aria-valuenow) to make your custom component accessible to screen readers and keyboard users.

## When NOT to Use ARIA

Do not use ARIA when native HTML can and already does the job, meets your requirements, and does so in an accessible way.

ProTip: Before deciding to use ARIA, make sure you understand [The First Rule of ARIA](https://w3c.github.io/using-aria/#rule1 "This link leaves the DubBlog website.").

## Why Misusing ARIA Backfires

-   Breaks assistive technology expectations.
    -   Misused ARIA attributes can disrupt assistive technologies and create unexpected barriers. For example, applying aria-hidden="true" to focusable elements may cause a keyboard trap or conceal important information. 
-   Unnecessary or incorrect ARIA usage can also confuse screen readers, undermining a page's overall accessibility.
    -   Adding ARIA to elements that already have semantic meaning (like aria-label on a <button> that already has readable text) can cause screen readers to announce duplicate or conflicting information.  
          
        
-   Increases cognitive load for users relying on screen readers.
    -   Giving an element the wrong role (e.g., role="button" on a <div> without making it keyboard-accessible) can cause assistive technology to announce misleading information. Users may think something is interactive when it’s not, or vice versa.  
          
        
-   Creates maintenance headaches for developers.
    -   When ARIA is misused, it can cause hidden bugs that propagate. When a new feature is added, those incorrect ARIA implementations can cause subtle conflicts, making debugging a nightmare. It also becomes harder to update to current accessibility standards. Misused ARIA can make upgrading tricky, since you first have to untangle it before switching to native solutions.

## Best Practices for ARIA

-   Remember the [First Rule of ARIA](https://w3c.github.io/using-aria/#rule1 "This link leaves the DubBlog website.").  
    Always choose native semantic HTML elements first.  
      
    
-   Ensure proper labeling.  
    Use attributes like aria-label or aria-labelledby to provide clear, descriptive context for screen readers.  
      
    
-   Test with assistive technologies.  
    Consistently test your websites and apps with different assistive technologies, such as screen readers and keyboard-only navigation, to ensure ARIA attributes work correctly.  
      
    
-   Verify ARIA roles and attributes.  
    Test your roles and attributes for correct spelling and lowercase usage. Just like HTML, even a small typo or extra space can break functionality and leave all your users stuck.

## ARIA Checks in DubBot

DubBot helps you ensure ARIA is implemented correctly by automatically flagging invalid, missing, or misused ARIA attributes during your accessibility scans. It checks whether roles, states, and properties are used in accordance with [WAI-ARIA specifications](https://www.w3.org/WAI/standards-guidelines/aria/ "This link leaves the DubBlog website.") and best practices, helping teams catch issues early and maintain semantic, accessible websites.

For a complete list of ARIA rules DubBot checks, see [List of Axe HTML 4.9 rules](https://dequeuniversity.com/rules/axe/4.9/ "This link leaves the DubBlog website.").

Remember, ARIA is about enhancing, not replacing, solid semantic HTML and accessible design. When applied sparingly and correctly, ARIA helps bridge gaps that native elements can’t cover, giving assistive technologies the clarity they need. By treating ARIA as a precision tool rather than a shortcut, we create interfaces that are both robust and genuinely inclusive.

## Resources

-   [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA "This link leaves the DubBlog website.")
-   [Valid ARIA Roles Quick Reference  
    ](https://help.dubbot.com/en/articles/10741417-valid-aria-roles-quick-reference "This link leaves the DubBlog website.")
-   [Tangled Web of ARIA](https://www.youtube.com/watch?v=5Mbjj3SX1Ck&list=PLrp9fl7pgGCFIwYSXdZiyppj2l0fdvcb_&index=1 "This link leaves the DubBlog website."), [Mark Steadman](https://www.linkedin.com/in/mark-steady/ "This link leaves the DubBlog website.") (YouTube)  
    
-   [Valid ARIA Attribute Names Quick Reference](https://help.dubbot.com/en/articles/10559961-valid-aria-attribute-names-quick-reference "This link leaves the DubBlog website.")
-   [ARIA Isn't A Solution for Every Digital Accessibility Issue](https://www.boia.org/blog/aria-isnt-a-solution-for-every-digital-accessibility-issue "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.