---
title: The Screen Reader Stutter: Why Your Content Repeats Itself and How to Fix It
description: Screen reader users hate it when things announce twice. Some people call this “WCAG Stuttering.” Repeated announcements are completely unnecessary and slow down assistive technology users. But one thi
url: https://buttondown.com/access-ability/archive/the-screen-reader-stutter-why-your-content/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-04-01T10:11:23.456Z
tags:
  - accessibility
sourcePublishDate: 2026-03-04T14:57:42.000Z
author: 
contentHash: db97141881942c78cc7da6191230c378
---

![Arrows pointing to a man sitting in an office with a coffee and a book at his desk](https://assets.buttondown.email/images/1c566b58-898d-47e0-97f9-e7a5107b0652.png?w=960&fit=max)

*Arrows pointing to a man sitting in an office with a coffee and a book at his desk*

Screen reader users hate it when things announce twice. Some people call this “WCAG Stuttering.” Repeated announcements are completely unnecessary and slow down assistive technology users. But one thing they hate more than slow is ambiguous. Clarity leads to screen reader users being able to confidently complete their interactions.

Here are some sources of redundant or confusing announcements, along with what you should do instead.

### **1\. Use Native HTML Elements**

The Accessibility Fight Club mantra is “The first rule of ARIA is to not use ARIA.”

Where possible, it is recommended to use native HTML buttons elements such as <button>

<input type="button">

<input type="submit">

<input type="reset">

<input type="image">  
rather than the button role, as native HTML buttons are supported by all user agents and assistive technology and provide keyboard and focus requirements by default, without need for additional customization.

### **2\. Remove Redundant ARIA Roles**

Don't add redundant roles to elements that already have implicit roles. For example, don't add `role="button"` to a `<button>` element.

### **3\. Make judicious use of aria-hidden="true"**

The **aria-hidden** attribute can be added to any HTML element to indicate to screen readers that the element should not be read aloud. This is useful for:

-   Purely decorative icons or images
    
-   Duplicated content
    
-   Visual-only formatting elements
    

**Critical Warning**: Never use aria-hidden="true" on a focusable element. That is a serious WCAG violation.

### **4\. Use role="presentation" and role="none" Carefully**

The presentation role (and its synonym role="none") theoretically removes the default semantics from the element's children. Support was previously inconsistent across browsers and screen readers, but has improved in recent years. However, there can still be edge cases around how deeply it affects descendant elements.

**Critical Warning**: Like aria-hidden, never use role="presentation" or role="none” on a focusable element. That is a serious WCAG violation.

### **5\. Avoid Adding Redundant Instructions**

For standard HTML controls and standard ARIA patterns (widgets), you do not need to add instructions for screen readers on how to use them, nor information about what they are. Screen readers already announce controls appropriately.

### **6\. Avoid Complex Content Inside Buttons**

Accessibility APIs do not have a way to represent semantic elements contained in a button. To deal with this limitation, browsers automatically apply role presentation to all descendant elements of any button element. Buttons should contain only simple text or images, not complex semantic structures, because the accessibility layer can't represent that complexity.

### **7\. Use aria-labelledby Rather Than Nested Text**

When you have complex structures, use `aria-labelledby` to point to the text content rather than nesting it in ways that result in duplicate announcements.

<button aria-labelledby\="plan-name plan-desc plan-price">

<span id\="plan-name" class\="plan-title">Premium Plan</span\>

<span id\="plan-desc" class\="plan-description">Includes unlimited storage</span\>

<span id\="plan-price" class\="price">$9.99/month</span\> </button\>

### **8\. Avoid Unnecessary Text in Alt Attributes and Flag as Decorative When Appropriate**

Skip phrases like "image of" or "picture of"; screen readers already announce that those elements are images. If an image adds no meaningful information to the surrounding text, flag the image as decorative. It’s super annoying to hear “Headshot of <person>” immediately before the person’s biography. The presence of the biography makes the headshot redundant and decorative unless it contains meaningful information in the image that is NOT reflected in the text. Icon buttons with text are also classic examples of this - you only need one announcement to know what the button does.

### **9\. Clean Up Duplicate Content**

Sometimes the same information appears multiple times on a page (like a pullout quote that's visually displayed and repeated in a sidebar). In those cases, it is perfectly fine (in fact, it is BETTER) to use `aria-hidden="true"` on the redundant instance.

### **10\. Fix Incorrect ARIA Attributes**

Ensure ARIA attributes match their elements correctly and don't create conflicts with native semantics.

<button role\="link">Click here</button\>

would announce on NVDA as “click here link,” but it will behave like a button. The role override creates confusion about whether users should press Enter (for links) or Space (for buttons) to activate it."

**NVDA and “clickable clickable”**

So now we’ve gotten rid of some of the more egregious, inconsistent, and duplicate announcements. But maybe you are still hearing “clickable clickable,” especially on NVDA. Why is that, and what are the most common sources of the problems?

NVDA tends to have a bigger problem with announcing "clickable clickable" because of how it interprets and reports the accessibility tree compared with other screen readers.

NVDA is generally more literal and verbose in its announcements. While screen readers like JAWS and VoiceOver have built-in intelligence that filters out redundant or problematic markup, NVDA takes a more straightforward approach and announces what it actually finds in the DOM. This means that if you have nested clickable elements or redundant click handlers in your code, NVDA will dutifully report both, whereas other screen readers might use proprietary heuristics to smooth over these common developer mistakes.

When NVDA is in browse mode (the way users typically read web content), it explicitly announces interactive element types. If you have a div with an onClick handler wrapped around a button, NVDA will announce "clickable" for both the div and the button. JAWS and VoiceOver, on the other hand, have spent years developing sophisticated filtering

Final Thoughts

Screen reader users can’t always know why one site feels trustworthy, and another doesn't. But they feel it. Every redundant announcement, every "clickable clickable," every mismatched role is a small leak in their confidence. Multiply that across a session, and you have a product that exhausts and irritates customers rather than serving them.

The fixes in this article are mostly subtractive. Remove the redundant role. Hide the decorative image. Let the native element do its job instead of layering ARIA on top of it.  Tighten your descriptions. None of this is glamorous work, but it reflects something important: that someone on your team is paying attention to how real users with disabilities experience your product.

Users notice that attention, even if they can't name it. They complete their tasks without hesitation. They come back. They recommend the product to others in their community, a community that talks to each other and shares which tools and websites have good accessibility.

Accessibility done well is not just a compliance checkbox. It is a compounding investment in trust, and it starts with the small details like those in this article.