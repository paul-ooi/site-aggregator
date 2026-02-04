---
title: Label it Accessible - Part Two
description: In March, I wrote a blog post focused on the importance of labels, specifically for familiar web components such as documents, icons, image maps, and form controls. These elements are often top-of-min
url: https://dubbot.com/dubblog/2025/label-it-accessible-part-two.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.453Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-04-10T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: aee4857f001556049f22f40bbc980d00
---

In March, I wrote a blog post [focused on the importance of labels](label-it-accessible.html), specifically for familiar web components such as documents, icons, image maps, and form controls. These elements are often top-of-mind when creating accessible web content. 

Today, we'll focus on four additional webpage elements that may not always receive the accessibility attention they require.

**Note:** The code segments presented here are for illustrative purposes and not for independent execution outside a valid HTML context.

**Dialogs  
**Dialog boxes are typically identified with ARIA role="dialog" or role="alert dialog." Use aria-label or aria-labelledby to clearly label dialog boxes, such as confirmation dialogs, so assistive technologies, like screen readers, understand the purpose and behavior of these elements.

"Specifying descriptive elements enables screen readers to announce the description along with the dialog title and initially focused element when the dialog opens…" ~ [Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ "This link leaves the DubBlog website."), W3C  

`<div`

  `role="dialog"`

  `aria-labelledby="confirmationDialogTitle"`

  `aria-describedby="confirmationDialogDesc"`

  `data-modal="confirmationDialog"`

  `<h2 id="confirmationDialogTitle">Confirm Action</h2>`

  `<p id="confirmationDialogDesc">Are you sure you want to proceed with this action?</p>`

    `<button id="confirmButton">Yes</button>`

    `<button id="cancelButton">No</button>`

`</div>`

**Fieldset elements  
**Always include a <legend> element within a <fieldset> to clearly describe grouped form elements. Doing so helps users of assistive technology understand the purpose of the group.  

`<form>`

  `<fieldset>`

    `<legend>Choose your favorite monster</legend>`

    `<input type="radio" id="kraken" name="monster" value="K" />`

    `<label for="kraken">Kraken</label><br />`

    `<input type="radio" id="sasquatch" name="monster" value="S" />`

    `<label for="sasquatch">Sasquatch</label><br />`

    `<input type="radio" id="mothman" name="monster" value="M" />`

    `<label for="mothman">Mothman</label>`

  `</fieldset>`

`</form>`

**Embedded content**  
To improve accessibility, provide a descriptive <title> attribute for all <embed> and <object> elements. This allows the element descriptions to be programmatically determined by assistive technologies.

`<h2>Embedded SVG Image</h2>`

`<embed src="logo.svg" type="image/svg+xml" width="200" height="100" title="Company Logo - Vector Graphic”>`

`<p>This is an embedded SVG image of the company logo.</p>`

**Figures with captions**  
Even though it is optional, if you use a <figure> element, always include a <figcaption> attribute for optimal accessibility. The <figcaption> should describe the figure's purpose or context within the document, while the <alt> attribute describes the individual image.

`<figure>`

  `<img src="brown-dog.jpg" alt="Brown dog with a red color." />`

  `<figcaption> Meet Charlie, the mascot for The Barking Dogs baseball team.</figcaption>`

`</figure>`

Like well-placed signposts, clear and descriptive labels transform a potentially confusing website into an open, navigable, and intuitive experience for all users, including those with disabilities. 

## Resources

-   [Text Labels and Names](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names "This link leaves the DubBlog website.")
-   [Understanding SC 3.3.2: Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html "This link leaves the DubBlog website.")

  
A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.