---
title: False Positives in Accessibility Testing: What LinkedIn Taught Me
description: In my blog post, What's So Great About HTML?, I included a link to&nbsp;Mark Steadman's LinkedIn profile. That link was flagged as an HTTP 404 error in the DubBot app.
url: https://dubbot.com/dubblog/2026/false-positives-in-accessibility-testing-what-linkedin-taught-me.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-08-01T10:44:29.934Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-05-19T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 2f85f1caac2eadd614cd79e4b32b6cd6
---

In my blog post, _[What's So Great About HTML?](whats-so-great-about-html.html)_, I included a link to [Mark Steadman](https://dev.to/steady5063 "This link leaves the DubBlog website.")'s LinkedIn profile. That link was flagged as an [HTTP 404 error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404 "This link leaves the DubBlog website.") in the DubBot app.

I certainly was not expecting that. I jumped out to LinkedIn and looked up the profile. Yep, it was (and still is) there. Nothing changed. So why did DubBot return a false positive? And exactly, what does a **false positive** mean?

​A false positive occurs when an accessibility checker flags something as an issue even though it is, in fact, accessible or working as intended. In simple terms, the tool sees a possible problem, but human review confirms there is no actual barrier for users.

This usually happens because automated tools inspect code patterns rather than intent or context. And most modern websites are dynamic, interactive, and constantly changing.

​LinkedIn is a good example of this.

LinkedIn doesn’t behave like a normal public page. When a user is logged into LinkedIn, profile pages typically load and render as expected. However, when someone is not logged in, for example, automated bots, crawlers, or accessibility testing tools, LinkedIn often responds by blocking access, redirecting the request, or returning a non-standard response. This behavior might interfere with automated scans and lead to false positives, even when the actual content or page is operating properly for authenticated users.

​Because LinkedIn uses dynamic components, JavaScript tools, and customized content that updates as the page loads, automated scanners may occasionally flag elements incorrectly.

This does not mean that DubBot or any other automated accessibility scanning tool is flawed, nor does it mean LinkedIn is anti-accessibility. In this case, both systems are functioning exactly as intended.

Automated accessibility scanners are designed to surface potential issues that may require human review, helping teams reach informed decisions about accessibility and usability. At the same time, websites like LinkedIn are built to protect user data and restrict access from unauthenticated visitors, bots, and automated tools.

When those two systems interact, as happened when DubBot encountered the LinkedIn profile link in my blog post, the result can sometimes appear to be a false positive. In cases like this, the issue is typically caused by authentication requirements or bot-protection mechanisms on the target platform, not by a broken or invalid link.

If and when that happens in your automated checker, manually verify that the link works for real users and document it as _requires authentication_ for future reference.

False positives are a normal part of accessibility testing workflows. They act as signals that manual testing and human review are required, once again proving that automated testing works best in partnership with a larger accessibility strategy that includes manual testing, human judgment, and context-aware review.

## Resources

-   [False Positives in Accessibility Testing](https://dubbot.com/dubblog/2024/false-positives.html)
-   [LinkedIn Engineering Accessibility Team](https://www.linkedin.com/blog/engineering/accessibility/automated-accessibility-testing?utm_source=chatgpt.com)
-   [False positives - Guidance on how to deal with false positives and false assurances](https://accessibility.education.gov.uk/tools-testing/false-positives)

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.