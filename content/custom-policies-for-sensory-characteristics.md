---
title: Custom Policies for Sensory Characteristics
description: Are the instructions on your website accessible to everyone? You can answer that question by testing your content against Success Criterion 1.3.3 Sensory Characteristics. This criterion requires that 
url: https://dubbot.com/dubblog/2025/custom-policies-for-sensory-characteristics.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.043Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-07-31T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 93fe79a8e3ec485b81cfba06e938d3fb
---

Are the instructions on your website accessible to everyone? You can answer that question by testing your content against [Success Criterion 1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html "This link leaves the DubBlog website."). This criterion requires that directions on a website or app don’t rely solely on sensory characteristics, such as shape, size, color, visual location, or sound.

Why does this matter? Because not all users perceive content the same way. Someone who is color blind won’t know which button is green. A screen reader user may not understand **the icon on the right.** And a person with hearing loss won’t catch a **ding** that signals it’s time to act.

Instead, ensure that your instructions are clear and descriptive so that everyone—regardless of their ability or technology—can successfully complete tasks on your website. Prioritizing accessibility broadens your audience and strengthens your organization’s commitment to inclusivity.

For example:

**Navigation by location only**A website says, _To submit your request, click the button in the lower right corner._

-   ❌ Fail: Users with screen readers or magnification software may not know which button is **lower right.** The location isn’t programmatically exposed.
-   ✅ Pass: _Select the Submit button in the lower right corner_.

By creating the **Submit** button using semantic HTML, the instructions are now programmatically accessible to screen readers.

**Buttons identified by shape**A toolbar has buttons with no labels, only icons. The instructions state, _**Use the green circle to start and the red square to stop.**_

-   ❌ Fail: Shape-only instructions don’t help users who can’t see or perceive those shapes easily.
-   ✅ Pass: _**Use the green circle labeled Start to begin and the red square labeled Stop to end the game.**_

By adding text labels or descriptions, these instructions provide everyone, including screen reader users and individuals with low vision, with the necessary information to navigate and interact confidently.

**CAPTCHA audio-only prompt  
**The instructions say, _**Enter the code you hear to continue.**_

-   ❌ Fail: With no text or visual alternative, users who can’t hear (or are in a noisy environment) can’t complete the action.
-   ✅ Pass: _**To continue, enter the code you hear or the code you see.**_

Include a visual CAPTCHA alongside the audio one. Also consider an alternative challenge, such as a math problem or logic question, for users who may struggle with either.  

## Are Your Instructions Accessible to Everyone?

With [DubBot’s Custom Policies](https://help.dubbot.com/en/articles/4054829-custom-policies-overview "This link leaves the DubBlog website."), you can set up targeted checks to flag text instructions that reference shape, color, size, visual position, or orientation, ensuring your instructions are accessible to everyone and your website or app complies with Success Criterion 1.3.3 Sensory Characteristics.

Let’s take the **Navigation by location only** example we’ve discussed and build a Custom Policy that highlights areas on your website that may need a visual check to verify accessibility compliance.

Name: Navigation by location only

Policy Notes: This policy identifies instructions that use location only for navigation instructions, therefore failing SC 1.3.3 Sensory Characteristics.  

Search By: Word or phrase

Rule: lower right

Find this exact word / phrase

Ignore Case-sensitive

Check only text on page

Flag pages that match this rule

Add Another Rule to Policy

Rule: upper right

![](../../images/blog-content/2025/custom-policy-sensory-charc.png)

Keep in mind—it’s important to be as specific as possible when selecting visual location descriptors and shape / color combinations. For example, searching for the word **right** as a location indicator could flag hundreds of irrelevant pages with phrases like **right to an attorney** or **he said I was right.**

By creating targeted [Custom Policies in DubBot](https://help.dubbot.com/en/articles/4054829-custom-policies-overview "This link leaves the DubBlog website."), you can quickly expose content that relies on sensory cues, such as shape, color, size, or location, and take action to make your instructions more accessible for everyone, resulting in more explicit guidance and a more inclusive user experience.

## Resources

-   [Create a Custom Policy](https://help.dubbot.com/en/articles/4054840-create-a-custom-policy "This link leaves the DubBlog website.")
-   [A11y 101: 1.3.3 Sensory Characteristics](https://tarnoff.info/2025/02/17/a11y-101-1-3-3-sensory-characteristics/ "This link leaves the DubBlog website.")
-   [Testing Methods: Sensory Characteristics](https://www.dennisdeacon.com/web/accessibility/testing-methods-sensory-characteristics/ "This link leaves the DubBlog website.")
-   [SC 1.3.3: Sensory Characteristics (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.