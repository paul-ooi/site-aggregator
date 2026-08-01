---
title: The Role of Context Awareness in Manual Accessibility Testing
description: I’m a long-time subscriber to Smashing Magazine’s email newsletter and have found articles and webinars that have inspired numerous blog posts over the years. One recent newsletter highlighted an arti
url: https://dubbot.com/dubblog/2026/the-role-of-context-awareness-in-manual-accessibility-testing.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-08-01T10:44:29.736Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-06-04T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 1cc3eaec70ba00aef1f78e803d5b1c21
---

I’m a long-time subscriber to [Smashing Magazine’s email newsletter](https://www.smashingmagazine.com/the-smashing-newsletter/ "This link leaves the DubBlog website.") and have found articles and webinars that have inspired numerous blog posts over the years. One recent newsletter highlighted an article by [David Mello](https://www.davidmello.com/ "This link leaves the DubBlog website."), [_Playwright Accessibility Testing: What axe and Lighthouse Miss_](https://www.davidmello.com/software-testing/test-automation/playwright-accessibility-testing-axe-lighthouse-limitations#_8-when-lighthouse-landmark-recommendations-break-legacy-html "This link leaves the DubBlog website."). The title itself wasn’t what caught my attention. Instead, it was the article summary in the newsletter:

> _Automated accessibility checks have structural limits. axe and Lighthouse, for example, miss 60–70% of WCAG violations. To catch the accessibility bugs that automated tools don’t surface, manual testing and context awareness are essential._

That isn’t the complete summary ([you’ll find that in the Resources section](#smashing)), but it contains the phrase that inspired this post: **manual testing and context awareness are essential**.

Accessibility professionals have long understood the need for both automated and manual accessibility testing to get a true assessment of the user experience. Automated tools are incredibly valuable for identifying many common accessibility issues, but they can't determine whether content makes sense, whether instructions are clear, or whether an interaction is intuitive for users with disabilities. Those judgments require human evaluation and the ability to see a digital experience through the eyes of its users. They require context awareness.

Context awareness is an important part of manual accessibility testing because accessibility is not simply about passing WCAG checks. Accessibility goes beyond technical compliance. True accessibility is about making sure that everyone can find the information they need, complete a job application, purchase that new hat, or enjoy an online video, regardless of the circumstances or barriers they may face.

## What Does Context Awareness Mean for Accessibility Testing?

**Context awareness** in accessibility testing means evaluating how people with disabilities actually experience and use a feature in its real-world context. 

In manual testing, context awareness means asking:

-   Who is using the site?
-   What task are they trying to complete?
-   Which assistive technologies may they rely on?
-   What environment or constraints they may have
-   How does the experience feel and function holistically?

The tester should not simply ask _Does this meet a rule?_ They should ask, _Can someone actually use this successfully, efficiently, and with confidence?_

That distinction is huge.

### Let’s look at some real-world examples.

**Example 1: Link Text**

-   A screen reader user encounters: **Click here.**
-   The link may work correctly, but without visual context, users may not know where it leads.
-   A context-aware approach would recommend [descriptive link text](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html "This link leaves the DubBlog website.") such as **Download the accessibility guide.**

**Example 2: Alternative Text**

-   An image has ALT text: **a woman hiking**
-   The image meets the [technical requirement of having ALT text](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content "This link leaves the DubBlog website."), but as I wrote in [an earlier blog post](alt-text-isnt-a-description-its-a-content-decision.html), _depending on your brand's mission, the same photo of a woman hiking can convey different things._
-   A context-aware approach would provide ALT text appropriate to your brand, such as **_her unbreakable endurance_**_,_ **_accessible outdoor recreation_**_, or the_ **_use of breathable, moisture-wicking fabric_**_._

**Example 3: Error Messages**

-   A form displays: Error 102.
-   The message may be announced by a screen reader or seen by a visual user, but neither helps them [understand the problem](../2023/error-messages.html).

A context-aware approach would display an error message that reads _**Please enter a valid email address.**_

## Why Context Awareness Matters

Something can technically comply with WCAG and still create accessibility barriers. Automated testing can identify many technical issues, but it can’t always determine whether users receive the information they need at the right time and in the right context.

For example, a form field may have a properly associated label, but if the accompanying instructions are positioned far from the field, users can miss important context. A screen reader user may hear the field label without receiving the instructions needed to complete the field correctly. Only contextual manual testing is likely to uncover this type of issue.

## Different Disabilities Create Different Experiences

Context-aware accessibility testing considers how users interact with web content based on both the barriers they encounter and the tasks they are trying to accomplish.

For example:

-   A keyboard-only user depends on a logical focus order and predictable navigation.
-   A screen reader user relies on proper semantic structure and meaningful relationships between content.
-   A user with ADHD or cognitive fatigue may struggle with cluttered instructions, inconsistent interactions, or unclear expectations.

## Cognitive Accessibility and Context

Cognitive accessibility is especially dependent on context awareness. Many cognitive challenges emerge when users are not given sufficient information about what is happening, what is expected of them, or what they should do next.

For example, during a checkout process, users may be required to complete several steps in a specific sequence, but if the interface does not clearly indicate their current position or progress, the workflow can become difficult to follow. This challenge may become even more difficult if the session automatically expires after a period of inactivity without adequate warning. As users try to understand the process and determine what to do next, they may feel pressured by the time limit, which increases their cognitive load and makes mistakes more likely.

These types of barriers are often difficult or impossible for automated tools to detect because they depend on how information is presented, understood, and experienced within its broader context.

## Good Accessibility Testing Follows Workflows

A manual accessibility test should take a context, task-based approach and evaluate whether users can:

-   create an account
-   recover a password
-   complete checkout
-   navigate a menu system
-   understand an error message
-   recover from mistakes

A webpage might appear accessible at first glance, but the overall workflow could be confusing, clunky, and completely unusable.

Simply put, context awareness in accessibility testing is the practice of evaluating accessibility issues within the user's actual experience, tasks, and environment.

Accessibility without context becomes _checkbox compliance_. Context-aware accessibility testing moves accessibility closer to inclusive usability.

## Resources

-   [web.dev – Manual Accessibility Testing](https://web.dev/learn/accessibility/test-manual?hl=en&utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [WebAIM Evaluation Guide](https://webaim.org/articles/evaluationguide/?utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [WebAIM Testing Quick Reference](https://webaim.org/resources/evalquickref/?utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [Role of Context in Usability Evaluations: A Review](https://arxiv.org/abs/1204.2138?utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [AXNav: Replaying Accessibility Tests from Natural Language](https://arxiv.org/abs/2310.02424?utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [Utah State University Manual Accessibility Testing Guide](https://www.usu.edu/accessibility/web-accessibility/manual-testing?utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [](https://www.smashingmagazine.com/the-smashing-newsletter/ "This is the full summary found in the Smashing Magazine newsletter.")**Smashing Magazine newsletter** **full article summary**:  
    _Playwright Accessibility Testing  
    Automated accessibility checks have structural limits. axe and Lighthouse, for example, miss 60–70% of WCAG violations. To catch the accessibility bugs that automated tools don’t surface, manual testing and context awareness are essential. So, how to tackle the task? David Mello wrote a [practical guide](https://us.list-manage.com/HNYXgwnoBvQ?e=ba1d8f9f29&c2id=a40e6e4912c3a681861be21611234fac "This link leaves the DubBlog website.") to get you started, with tips for writing smarter Playwright tests and a checklist you can use in your accessibility audit._

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.