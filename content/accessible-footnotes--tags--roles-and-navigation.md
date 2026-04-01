---
title: Accessible Footnotes: Tags, Roles and Navigation
description: Footnotes look simple on the surface - a tiny superscript link that leads to small print at the bottom. But in digital spaces, they’re anything but simple. On the web, they rely on semantic structure 
url: https://dubbot.com/dubblog/2026/accessible-footnotes-tags-roles-and-navigation.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-04-01T10:11:24.249Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-03-10T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: cceec66d2bc169cd95c383bb18e83475
---

Footnotes look simple on the surface - a tiny superscript link that leads to small print at the bottom. But in digital spaces, they’re anything but simple. On the web, they rely on semantic structure and sometimes even ARIA to clearly communicate relationships. In PDFs, they depend on proper tagging and reading order to function properly. The difference isn’t cosmetic, it’s structural. What looks identical on the screen can function completely differently for someone using assistive technology.

**Pro Tip:** For a deeper look at how footnotes create accessibility problems in practice, see our post [_A Footnote on Footnotes: They Need to Be Accessible_](../2024/a-footnote-on-footnotes-they-need-to-be-accessible.html).

## When Native HTML Isn’t Enough

If the same footnote is cited more than once on the same page, maintaining a clear relationship between each reference and the single note can be difficult. Luckily, there are ARIA roles specifically for footnotes. Those roles are **_doc-footnote_** and **_doc-noteref_** . These are part of the [Digital Publishing WAI-ARIA](https://www.w3.org/TR/dpub-aria-1.1/#role_definitions "This link leaves the Dubblog website.") (DPUB-ARIA) Module, and help assistive technologies identify footnote content more explicitly.

> **NOTE:** The **_doc-footnote_** role is used on an aside <aside>. Do not apply it to list items, as it will break the lists they belong to. Use **_doc-endnotes_** to group notes into ordered lists <ol>. ~ [_Accessible Publishing Knowledge Base_](https://kb.daisy.org/publishing/docs/html/dpub-aria/doc-footnote.html "This link leaves the Dubblog website.")

### When to Use _doc-footnote_

Imagine you have a research article with a single footnote **referenced in multiple places in the text** . Something like this:

`<p>The results were significant<sup><a href="#fn1">1</a></sup> across multiple trials, and similar patterns were observed later<a href="#fn1">1</a></sup>.</p>`

`<ol>`

  `<li id="fn1">Detailed data analysis is available in Appendix A.</li>`

`</ol>`

Resulting in this: (The links indicated below are for presentation purposes only.)

_The results were significant_ **_1_** _across multiple trials, and similar patterns were observed later_ **_1_** _._

1.  _Detailed data analysis is available in Appendix A._

When the native HTML cannot create the proper structure on its own, some assistive technologies struggle to clearly indicate that multiple references point to the same footnote, announcing them in ways that sound vague or repetitive, making the connection between the reference and the note harder to understand.

### The Solution?

`<p>The results were significant<sup><a href="#fn1" role=" doc-noteref ">1</a></sup> across multiple trials, and similar patterns were observed later<sup><a href="#fn1" role=" doc-noteref ">1</a></sup></p>`

`<aside id="fn1" role=" doc-footnote ">`

  `<p>Detailed data analysis is available in Appendix A.</p>`

`</aside>`

Here, _role=doc-noteref_ indicates that this is a footnote reference, and _role=doc-footnote_ indicates that this is the footnote content.

So now, even with multiple references on a page, screen readers can clearly announce the connection, and navigation between text and footnotes is semantically meaningful.

## PDFs Are a Different Beast

In PDFs, accessibility often hinges on two things: the source document being accessible and the export process preserving correct tag structure.

Footnotes are more predictable on the web than they are in PDFs. On a webpage, HTML and ARIA roles clearly define what a footnote is and how it connects to the text. In a PDF, there’s no clear guidance from the WCAG criteria for an equivalent standard that works the same way. Instead, footnotes rely on proper tags and correct reading order.

### In an Untagged PDF:

-   Footnotes are just visually smaller text at the bottom of a page.
-   Screen readers may read them out of order.
-   There is no built-in relationship between the reference and the footnote.
-   The footnote may be read out of context.
-   The superscript is read as just another number.
-   Keyboard users can’t easily navigate to it.

### In a Properly Tagged PDF:

Footnotes should use PDF structural tags such as:

-   Reference
-   Note

In order to create a PDF with footnotes, where:

-   The superscript is announced clearly as a footnote reference.
-   The footnote is read in context, making sense to the user.
-   References and notes are functionally linked for easy navigation.
-   Keyboard users can jump directly between the reference and the footnote.
-   Screen reader users can access the content confidently, without guessing.

### Proper Reading Order

Reading order determines whether the reference and the note make sense together. The superscript reference must appear in the tag tree exactly where it’s cited in the sentence. The footnote should appear later in the logical reading order, typically at the bottom of the page. If either is misplaced in the tag structure's reading order, a screen reader may announce the note too early, too late, or without clear context.

**Pro Tip:** For guidance on tagging references and footnotes and getting the reading order right, watch this video from [Shawn Jordison](https://www.linkedin.com/in/shawnjordison/ "This link leaves the Dubblog website."), _The Accessibility Guy_ \- [How to tag references and footnotes in a PDF using Adobe Acrobat Pro](https://youtu.be/FDxB9yIxQng?si=z3ezSflpMGcIno4P "This link leaves the Dubblog website.")

### Export Considerations

The way you export documents is just as important as how you write them. Here’s few things to keep in mind.

#### Use the Right Export Method

-   Always export using: **File → Save As → PDF** OR **File → Export → Create PDF / XPS**
-   Make sure this box is checked: **Document structure tags for accessibility**

#### After Export, Confirm Footnotes Are Tagged Properly

The footnotes should:

-   Be included in the tags tree.
-   Appear in logical reading order.
-   Maintain links between:
    -   The superscript reference in the body.
    -   The footnote content is at the bottom.

#### Quick Before-and-After Export Checklists

Before exporting:

-   Use native Word footnotes, not manually typed numbers.
-   Ensure references are auto-generated.
-   Avoid manually formatted superscripts.
-   Confirm no broken cross-references.

After exporting:

-   Test links.
-   Check the tags tree.
-   Check reading order.
-   Test with a screen reader.

Validating your PDFs means not only running an automated scan but also [a hands-on review](pdfs-need-manual-checks-too.html). You need to dig into the tag tree and test it with a screen reader. Don’t simply check that the superscript looks right on the page.

## Auditing the Footnotes

When auditing footnotes, a few key checks can make all the difference.

### Webpage

#### Semantic Structure

-   Each footnote reference in text uses a proper <a href="#footnote-id"> or <sup> element.
-   Footnote targets have a matching id and are marked up with <li> in an <ol> or <aside>, where appropriate.
-   If role="doc-footnote" on footnote content and role="doc-noteref" on the reference are used, test for appropriate use.

### Webpage & PDF

#### Keyboard Navigation

-   Users can [tab to footnote references](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html "This link leaves the Dubblog website.").
-   Activating a footnote moves focus to the footnote content.
-   There’s a clear way to return focus to the main text (e.g., a _back to text_ link).

#### Screen Reader Behavior

-   Footnote references are announced clearly (e.g., **Footnote 1**).
-   Footnote content is read in logical order, and context makes sense.

### Visual Cues

-   Footnotes are visually distinguishable with [proper contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html "This link leaves the DubBlog website.") and spacing.
-   [Focus states](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible "This link leaves the Dubblog website.") are obvious for footnote links.
-   Content is easy to scan; footnotes don’t overwhelm the main text.
-   Mobile [users can tap](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html "This link leaves the Dubblog website.") footnote references easily without losing context.

**Pro tip:** Footnotes provide context, guide navigation, and ensure clarity for every user. Automated tools, [like DubBot](https://dubbot.com/features/index.html "This link leaves the Dubblog website."), can give certain aspects a passing grade, but a manual review will confirm whether they truly work as intended for screen reader users.

## Resources

-   [Common PDF Tags and Their Usage](https://www.section508.gov/create/pdfs/common-tags-and-usage/ "This link leaves the Dubblog website.")
-   [Digital Publishing WAI-ARIA Module 1.1](https://www.w3.org/TR/dpub-aria-1.1/ "This link leaves the Dubblog website.")
-   [Accessible Publishing Knowledge Base](https://kb.daisy.org/publishing/docs/html/dpub-aria/doc-footnote.html "This link leaves the Dubblog website.") \- doc-footnote
-   [Accessible Publishing Knowledge Base](https://kb.daisy.org/publishing/docs/html/dpub-aria/doc-footnote.html "This link leaves the Dubblog website.") \- notes
-   [A Footnote on Footnotes: They Need to Be Accessible](../2024/a-footnote-on-footnotes-they-need-to-be-accessible.html)
-   [How to tag references and footnotes in a PDF using Adobe Acrobat Pro](https://youtu.be/FDxB9yIxQng?si=z3ezSflpMGcIno4P "This link leaves the Dubblog website.") \- YouTube

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.