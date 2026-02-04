---
title: Ignored Path Entries Get Better Messaging
description: While working with a client to help customize the crawl on one of their sites, DubBot’s client support specialist, Joanie Chembars, discovered an area for improvement in the Ignore Path setup module.
url: https://dubbot.com/dubblog/2025/ignored-path-entries-get-better-messaging.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.152Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-07-01T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: a1bd53489dc5701c824e92a599dc4077
---

While working with a client to help customize the crawl on one of their sites, DubBot’s client support specialist, [Joanie Chembars](https://www.linkedin.com/in/joanie-chembars-75718a52/ "This link leaves the DubBlog website."), discovered an area for improvement in the **Ignore Path** setup module.

Joanie was helping this client exclude specific pages from their site’s inventory by using a Regular Expression or RegEx. She entered what she knew to be the correct code, yet it did not exclude the pages as expected. 

While troubleshooting the issue, Joanie discovered she had not selected the correct **Type of Ignored Path**. Well, that’s easy enough to correct, right? But what if that happened again? What if that happened to a client?

That’s when Joanie reached out to engineering with this request:

> Could we add an error message when a user adds a Regex Ignore but mistakenly uses **Ignored Path** instead of **Ignored Path/URL using Regular Expression**?

Joanie made that request in the nick of time, as a day or two after she submitted it, a client encountered the same issue on a site he was working on.

Adding this message not only improves the overall user experience but also boosts DubBot’s accessibility compliance by meeting the requirements of [SC 3.3.1: Error Identification (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html "This link leaves the DubBlog website."). I call that a win-win!

Our support team doesn’t just answer questions—they live in the product just like our users do. So when Joanie flagged what looked like a minor text tweak, it wasn’t just a one-off request. Her thoughtful suggestion sparked a smarter, smoother experience for everyone. It was a tiny change with big ripple effects—proof that sometimes it’s the small tweaks that lead to the biggest wins.

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.