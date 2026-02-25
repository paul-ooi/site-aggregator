---
title: The Most Accessible ALT Text Is Sometimes No ALT Text at All
description: This is the second post in a four-part series on ALT text. Because writing it well (and knowing when not to write it) deserves more than a quick checklist. See part one,    ALT Text Isn’t a Descriptio
url: https://dubbot.com/dubblog/2026/the-most-accessible-alt-text-is-sometimes-no-alt-text-at-all.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-25T02:35:07.679Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-02-17T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 77bd6f203ae8d4f3a4ce036b1f116e7a
---

> This is the second post in a four-part series on ALT text. Because writing it well (and knowing when not to write it) deserves more than a quick checklist. See part one, [_ALT Text Isn’t a Description. It’s a Content Decision_](alt-text-isnt-a-description-its-a-content-decision.html) . See part three, _[ALT Text Is Read by AT, Search Engines, and AI—Write It Like It Matters](alt-text-is-read-by-at-search-engines-and-aiwrite-it-like-it-matters.html)._

Over-describing images is one of the most common and least discussed accessibility failures. When an image is decorative, adding ALT text **just in case** doesn’t help anyone. It adds unnecessary noise that can actually undermine accessibility.

## How Do You Know an Image is Decorative

Deciding whether an image is decorative, [informative](images-with-a-job-writing-alt-text-that-works.html), or [functional](images-with-a-job-writing-alt-text-that-works.html) is not a technical call. It’s an editorial one. Only the author can make that judgment, based on why the image exists on the page in the first place.

An image is considered decorative if it:

-   provides no essential or supporting information needed to understand the page content.
-   is used for visual styling, such as borders, spacers, and corners.
-   is part of a link, but there is visible link text that describes the link's purpose.
-   has adjacent text that already explains its purpose.
-   is used to enhance the page's visual appeal.

## Here Are Some Examples

### Provides No Essential or Supporting Information

![](../../images/blog-content/2026/no-needed-information.png)  
The clipboard icon to the left of the text is purely decorative and does not provide any additional or critical information about [DubBot's PDF inventory](https://help.dubbot.com/en/articles/13273666-view-issues-on-a-pdf-file#h_89cb7cae4c "This link leaves the DubBlog website.").  

### Used for Visual Styling

![](../../images/blog-content/2026/visual-styling.png)  
The orange arrow adds a bit of flair to this page, but adds no information.  

### Part of a Link

![](../../images/blog-content/2026/part-of-link.png)  
All the feature boxes on the [Features index page](https://dubbot.com/features/index.html "This link leaves the DubBlog website.") are links. The image to the right of the text in each box is part of the link and is clickable. It provides no additional information about the link. The text in the box explains the purpose of the link. In this example, the text explains what [Image Inventory](meet-image-inventory-the-client-inspired-upgrade-for-image-management.html) is and how it benefits our clients.

### Adjacent Text Explains Its Purpose

![](../../images/blog-content/2026/apple-small.png)

  
Red apples turn red as they mature because they produce pigments called anthocyanins in their skin. Sunlight and cool temperatures trigger these pigments, giving apples their deep red color.

The text to the right of the apple explains why the author chose a red apple. Therefore, there is no need for descriptive ALT text for the apple image. Adding it here would be repetitive.

### Used to Enhance Visual Appeal

![](../../images/blog-content/2026/enhance-visual-appeal.png)  
The [DubBot Request a Demo form page](https://dubbot.com/request-demo/index.html "This link leaves the DubBlog website.") with the form fields to the left of an image of people in a meeting room reviewing the DubBot app on a large computer screen. The image does not provide additional or critical information but enhances the overall page look and feel. Therefore, there is no descriptive ALT text for the image.  

## To ALT Tag or Not ALT Tag a Decorative Image

Decorative images don’t need **descriptive** ALT text, but they do require **an empty alt=""** .  
Example: 

For this decorative image of a pink, floral left corner border,

![](../../images/blog-content/2026/pink-leftcorner-border.png)  

the image tag would read **<img src="pink-leftcorner-border.png" alt="">**, leaving the ALT attribute empty . This prevents screen readers from announcing the image file name, which adds noise rather than value and makes for a poor user experience.

The key is to understand whether an image is there to look nice or actually to contribute meaning or context. 

A [DubBot custom policy](https://help.dubbot.com/en/articles/4054829-custom-policies-overview "This link leaves the DubBlog website.") can surface every image marked as decorative across your site, making it easier to confirm which images are truly decorative and which may, indeed, require descriptive ALT text.  
![](../../images/blog-content/2026/image-policies.png)  

The red box highlights the Custom Policy titled **Image is marked-up as decorative,** which is used to locate decorative images.

The goal isn’t more ALT text. It’s better ALT text, used where it actually matters. In doing so, we reduce cognitive friction, respect the time of assistive technology users, and create digital experiences that are both accessible and thoughtfully designed for the entire educational community.

## Resources

-   [Decorative Images](https://www.w3.org/WAI/tutorials/images/decorative/ "This link leaves the DubBlog website.")
-   [Alternative Text - Decorative Images](https://webaim.org/techniques/alttext/#decorative "This link leaves the DubBlog website.")
-   [Digital Accessibility - Decorative Images](https://sc.edu/about/offices_and_divisions/digital-accessibility/toolbox/best_practices/alternative_text/decorative-images/index.php "This link leaves the DubBlog website.")
-   [Demystifying Decorative Images: To ALT Text or Not to ALT Text?](../2023/alt-or-no-alt.html)

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm topic ideas, generate blog post outlines, and rephrase portions of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.