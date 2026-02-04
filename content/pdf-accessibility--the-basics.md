---
title: PDF Accessibility: The Basics
description: Making your PDFs accessible doesn't have to be a daunting task. By focusing on a few fundamental principles, you can significantly enhance the usability of your documents and reach a wider audience.
url: https://dubbot.com/dubblog/2025/pdf-accessibility-the-basics.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.421Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-04-21T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 0a9bdfc0f708fc6b74cdb89814b79b51
---

Making your PDFs accessible doesn't have to be a daunting task. By focusing on a few fundamental principles, you can significantly enhance the usability of your documents and reach a wider audience.

Here are four key principles for making PDFs accessible.

## Tagged PDFs

Think of tags as the underlying structure of your PDF, similar to the HTML code that gives a webpage its meaning. Tags provide semantic information about the content, identifying headings, paragraphs, lists, images, and more. This structural information is crucial for assistive technologies like screen readers.

### Why are tags important?

-   **Navigation:** Screen readers use tags to navigate the document logically, allowing users to jump between headings, understand the reading order, and identify different content sections.
-   **Content Understanding:** Tags communicate the purpose of each element. For example, a screen reader can announce a piece of text as a heading level 1, a paragraph, or a list item, providing crucial context to the user.
-   **Reflow:** When a user with low vision magnifies the screen or uses a reflow feature, tagged content adapts more effectively to the new screen size, ensuring that information isn't cut off or jumbled.

### How to ensure your PDFs are tagged:

-   **Create accessible source files:** Start with well-structured documents like Microsoft Word or Adobe InDesign and structure the document using the built-in heading styles, lists, and other formatting options.
-   **"Save as Accessible PDF" or "Export to Tagged PDF":** Most modern authoring tools offer options to preserve or add tags during the PDF creation.

## ALT Text for Images

Providing descriptions or ALT text for images, graphs, and other visual content in your PDF enables users of assistive technologies like screen readers to comprehend the content conveyed by these visuals.

### Why is ALT text important?

-   **Information Equivalence:** ALT text provides a textual description of an image, allowing screen reader users to understand its content and relevance to the surrounding text.
-   **Contextual Understanding:** Well-written ALT text goes beyond a simple description and conveys the purpose and meaning of the image within the document.

### Writing effective ALT text:

-   **Be concise and descriptive:** Aim for a brief but informative description of the image's key elements.
-   **Consider the context:** Describe the image in relation to the surrounding text. What information does it convey?
-   **Avoid phrases like "image of" or "graphic of":** Screen readers already announce the element as an image.
-   **For purely decorative images, use null ALT text:** If an image doesn't convey essential information, indicate this to screen readers so they can skip it (e.g., `alt=""`).

## Discernible Link Text

[Discernible text](../2024/discernible-text.html) can be seen, perceived, and understood by website users while conveying the link's purpose —its destination, function, or action.

For example, a link `<a href="chocolatepierecipe.html">Pie Recipe</a> can be improved by adding the word chocolate: <a href="chocolatepierecipe.html">Chocolate Pie Recipe</a>`

### Why is discernible text important?

-   **Predictable Navigation:** Screen readers often announce links out of context. Clear link text ensures users understand where the link will take them before activating it.
-   **Improved Usability:** Descriptive link text benefits all users by making it easier to understand the purpose of the link at a glance.

### Creating discernible link text:

-   **Stand Alone:** Link text should be able to stand on its own and allow a web visitor to know where it will go by solely reading or hearing the link's text and nothing else around it.
-   **No URLs:** The link URL should not be included in the link text. Screen readers will read each letter of the URL if it is in the link text.
-   **No Text Should be the Same:** Do not use the exact text for multiple links unless the links go to the same destination. Duplicating link text can pose an accessibility issue, making the website experience inconsistent for accessible technology users.

~ courtesy of the [DubBot Help Center](https://help.dubbot.com/en/ "This link leaves the DubBlog website.")

## Keyboard Navigable

Not all users rely on a mouse for navigation. Individuals with motor disabilities or those who prefer keyboard navigation must be able to access and interact with all elements of your PDF using only the keyboard.

### Why is keyboard navigability important?

-   **Accessibility for Users with Motor Disabilities:** For individuals who cannot use a mouse, keyboard navigation is the primary way to interact with digital content.
-   **Assistive Technology Compatibility:** Many assistive technologies, such as speech input software, rely on a document's underlying keyboard accessibility.
-   **Improved User Experience:** Even users without disabilities sometimes prefer to navigate using the keyboard for efficiency.

### Ensuring keyboard navigability:

-   **Logical Tab Order:** Using the Tab key, ensure that interactive elements like form fields and links are navigable in a logical order, following the document's visual flow.
-   **Visible Focus Indicators:** When a user tabs through interactive elements, a clear visual indicator (e.g., a highlighted border) should show which element currently has focus.

## Making Accessibility a Habit

Creating accessible PDFs is an ongoing process, not a one-time fix. Tools like DubBot can identify accessibility issues within your PDF files, empowering you to correct those documents more accurately.

By understanding and implementing these basic principles – tagged PDFs, ALT text, discernible link text, and keyboard navigability – you'll be well on your way to creating inclusive content that benefits everyone.

## Resources

-   [The complete checklist to PDF accessibility](https://blog.adobe.com/en/publish/2022/11/29/the-complete-checklist-to-pdf-accessibility "This link leaves the DubBlog website.")
-   [PDF Accessibility: 7 Surefire Ways to Ensure Your PDF Is Accessible](https://www.accessi.org/blog/pdf-accessibility/ "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.