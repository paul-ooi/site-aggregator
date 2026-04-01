---
title: A Footnote on Footnotes: They Need to Be Accessible
description: Footnotes are notes that are placed at the end of a page and used to reference parts of the text (generally using superscript numbers). Writers use footnotes for several purposes, including citations,
url: https://dubbot.com/dubblog/2024/a-footnote-on-footnotes-they-need-to-be-accessible.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-04-01T10:11:24.421Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-02-04T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 72eb633d5aaa070b85a5283b7ec9dd74
---

## What exactly are footnotes? 

> Footnotes are notes that are placed at the end of a page and used to reference parts of the text (generally using superscript numbers). Writers use footnotes for several purposes, including citations, parenthetical information, outside sources, copyright permissions, background information, and more. ~ [What Are Footnotes and How Do You Use Them](https://www.scribendi.com/academy/articles/what_are_footnotes.en.html)?

## How Do Footnotes Create Barriers for People with Disabilities?

Users with visual impairments, cognitive disabilities, and motor impairments may experience difficulties with traditional footnotes. For example:

**Reading Order:** 

-   Footnotes can be separated from their references by long passages of text. This makes it difficult for readers to locate the footnote and return to their place in the main text.

**Screen Reader Navigation:** 

-   Identifying Footnotes—Screen readers need clear ways to identify footnotes and distinguish them from the main content.
-   Context Switching—Jumping between the main text and footnotes disrupts the flow and can be disorienting.
-   Returning to the Main Text—Screen reader users need a reliable method for returning to their exact location in the main text.

**Keyboard Navigation:**

-   Accessing Footnotes—Keyboard users need a way to easily navigate to and activate footnotes and return to the original text location on the page.

**Cognitive Load:**

-   Information Overload—Footnotes interrupt the reading flow and can hinder information processing, especially for those with cognitive disabilities.
-   Visual Clutter—Footnotes can create a visually overwhelming and cluttered page, particularly for users with visual or cognitive disabilities.

## How Can You Make Footnotes More Accessible?

Accessible footnotes depend on [proper semantic HTML structure](page-structure.html) to convey meaning to assistive technologies. ARIA attributes can enhance the HTML structure by providing extra context and instructions. If JavaScript is used to manage footnote interactions, make sure it doesn't create barriers for users with disabilities. For a deeper dive on footnotes using ARIA and in PDFs, please read [_Accessible Footnotes: Tags, Roles and Navigation_](../2026/accessible-footnotes-tags-roles-and-navigation.html).

Here are some guidelines to help get you started.

-   -   **Clear Visual and Programmatic Cues:** Use clear visual indicators and appropriate HTML elements:
        -   Use the '<footer>' element to define the footnote container semantically.
        -   Use the '<aside>' element to mark the footnote content as related to the main content but not central.
        -   Use the '<a>' element with appropriate 'href' and 'id' attributes to link the footnote reference to its corresponding content.
        -   Use 'aria-describedby' to provide descriptive labels. ([see Accessible Footnotes with CSS - Making it Accessible](https://www.sitepoint.com/accessible-footnotes-css/#making-it-accessible "This link leaves the DubBlog website."))  
              
            
    -   **Intuitive Navigation:** 
        -   Mouse Navigation
            -   Create Anchor or Jump Links - One of the easiest ways to ensure your users can move smoothly between footnote references, the actual footnote, and back to the original text is to [create anchor links](https://marcom.wwu.edu/how-create-anchor-jump-link "This link leaves the DubBlog website."). They’re not called "jump links" for nothing. 😉  
                Clicking the marker in the text should smoothly jump the user’s view to the footnote at the bottom, and clicking the footnote number at the bottom should jump the user back to the corresponding place in the main text.  
                [This same technique applies to keyboard-only navigation](a-footnote-on-footnotes-they-need-to-be-accessible.html#jump).
            -   Visual Cues - Provide clear, visual feedback on hover (e.g., underline or color change) to indicate that the footnote marker is clickable. Make sure to [use proper color contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html "This link leaves the DubBlog website.") as well.
        -   Keyboard Navigation
            -   Create Anchor or Jump Links ([see above](a-footnote-on-footnotes-they-need-to-be-accessible.html#jump))
            -   Tab Order - Ensure that the footnote markers are included in the document's natural tab order so users can navigate to them with the Tab key.
            -   Arrow Key Navigation - Within the footnote section, allow users to navigate between footnotes using the up and down arrow keys.  
                  
                
    -   **Visual Considerations:**
        -   [Avoid using color alone](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color "This link leaves the DubBlog website.") to convey meaning.
        -   Use [sufficient color contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html "This link leaves the DubBlog website.") between the footnote link and the surrounding text.
        -   Use [accessible fonts](the-power-of-words-choosing-and-using-accessible-fonts.html) that are easy to [read and understand](readability-and-accessibility.html).
        -   Use [clear and concise language](../2021/give-it-to-me-straight---the-power-of-plain-language.html), avoiding jargon or technical terms.
        -   Provide [alternative text descriptions](../2021/theres-no-alternative-to-good-alt-text.html) for any images or symbols used in footnotes. Ensure that the alternative text accurately conveys the meaning or purpose of the visual element. 

Creating accessible footnotes might seem like a small detail, but it significantly impacts inclusivity. Following these guidelines ensures that everyone can fully engage with your content regardless of their abilities. So, implement these guidelines, and your readers will appreciate them, and they will appreciate you!

For guidance on creating footnotes in PDFs and the proper use of ARIA roles, please read [_Accessible Footnotes: Tags, Roles and Navigation_](../2026/accessible-footnotes-tags-roles-and-navigation.html).

## Resources

-   [Accessible Footnotes with CSS](https://www.sitepoint.com/accessible-footnotes-css/ "This link leaves the DubBlog website.")
-   [Accessibility changes: notes for developers](https://www.nice.org.uk/corporate/ecd6/chapter/footnotes "This link leaves the DubBlog website.")
-   [Making References and Footnotes Accessible](https://crawfordtech.com/blog/making-references-and-footnotes-accessible/ "This link leaves the DubBlog website.")
-   [How to Create Accessible Footnotes](https://blog.nikkibright.com/how-to-create-accessible-footnotes "This link leaves the DubBlog website.")
-   [What Are Footnotes and How Do You Use Them](https://www.scribendi.com/academy/articles/what_are_footnotes.en.html "This link leaves the DubBlog website.")?
-   [Accessible Footnotes: Tags, Roles and Navigation](../2026/accessible-footnotes-tags-roles-and-navigation.html)