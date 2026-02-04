---
title: What's So Great About HTML?
description: Early in my career, building websites meant writing HTML by hand, often in Notepad. No visual editors or drag-and-drop tools, just tags and a lot of trial and error. As the tools evolved, so did my wo
url: https://dubbot.com/dubblog/2026/whats-so-great-about-html.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:01.421Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-01-15T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: ee7a777004c76e425d33c17b2613fb1e
---

Early in my career, building websites meant writing HTML by hand, often in Notepad. No visual editors or drag-and-drop tools, just tags and a lot of trial and error. As the tools evolved, so did my workflow. I moved from Dreamweaver to full-fledged content management systems, and eventually to platforms where the HTML was mostly shielded from view. Over time, I spent less of my day writing HTML and more time learning the tools that generated it for me. The markup was still there, but it was increasingly out of sight, and, unfortunately, I became out of practice.

In September 2025, I attended a session by [Mark Steadman](https://www.linkedin.com/in/mark-steady/ "This link leaves the DubBlog website.") titled [**A Tangled Web of ARIA**](https://youtu.be/5Mbjj3SX1Ck?si=utEvmJehVXD2Vold "This link leaves the DubBlog website.") (YouTube) at the [Web Accessibility in Mind Conference](https://conference.webaim.org/schedule "This link leaves the DubBlog website."). I expected a deep dive into ARIA roles and attributes. What I didn’t expect was that Mr. Steadman would pull me back to HTML, [native HTML versus semantic HTML](https://www.sitelint.com/blog/semantic-html-explained "This link leaves the DubBlog website."). That’s when I leaned in. This presentation wasn’t about ARIA in isolation. Interestingly, the presentation focused on the _lost art_ of using semantic HTML for accessibility and the overreliance on ARIA. Mr. Steadman also highlighted that many modern developers lack a solid foundation in HTML for building truly accessible websites.

The central takeaway from that session was simple: _HTML still matters_. Even in a world dominated by design systems, JavaScript frameworks, CSS, and some ARIA sprinkled on top, it all comes down to HTML. Steadman put it plainly: _At the end of the day, it’s built with Hypertext Markup Language. How about that? So, it matters. It does._

## Why Semantic HTML is Important for Accessibility

HTML is the foundation for browsers, assistive tech, and search engines.

If your foundation of semantic HTML, solid accessibility practices, and native browser behavior is cracked, no framework, component library, or design system will fix it.

### Semantic HTML matters because:

**It comes with accessibility baked in.**  
Semantic elements like <button>, <input>, <label>, <nav>, and <header> ship with built-in semantics, keyboard support, focus behavior, and screen reader announcements.

**Assistive technology actually understands it.**Screen readers, voice control, switch devices, and browser accessibility APIs are all optimized for semantic HTML. When you use standard elements, users hear the right roles, states, and names without your team having to manually **wire** everything together and possibly miss something.

**Keyboard behavior works by default.**  
Tab order, focus states, etc., are all handled automatically; those functions are built in. A <button> is keyboard-accessible on day one. 

**It requires little to no ARIA.**ARIA is powerful, but it’s not a replacement for HTML. The first rule of ARIA is **don’t use ARIA if native HTML will do**. Using semantic elements reduces complexity, cognitive load, and the risk of breaking accessibility.

**It’s more resilient over time.**Semantic HTML survives redesigns and new frameworks better than custom components. Browsers evolve, assistive technology improves, and semantic HTML keeps working without constant maintenance.

**Compliance is easier (and cheaper).**WCAG success criteria often map directly to semantic behaviors. When you start with semantic HTML, you’re already most of the way to compliance.

[Semantic HTML is accessible by default](https://css-tricks.com/explaining-the-accessible-benefits-of-using-semantic-html-elements/ "This link leaves the DubBlog website."), widely supported by assistive technologies, easier to maintain, and less prone to failure over time. Choosing not to use it doesn’t add meaningful innovation; it adds avoidable complexity by forcing teams to recreate accessibility behaviors that browsers already handle well. That extra effort increases risk, maintenance overhead, and long-term cost. In short, **HTML still matters**. Learn it. Use it.

When you do, you’ll naturally learn how real people, using real assistive technology, use the web. And that’s where accessible development actually begins.

## Resources:

-   [Mark Steadman's post](https://www.linkedin.com/posts/dr-danielle-bowes_a11y-accessibility-activity-7414062741792919552-etR3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAACmLHMBpb9Qho4Thxy4VJBQ9l5qz-BYvzA "This link leaves the DubBlog website.") on LinkedIn
-   [2026 Predictions](https://webaim.org/blog/2026-predictions/ "This link leaves the DubBlog website.")
-   [HTML Is Dead. And Honestly? That’s Fine](https://medium.com/frontend-interviews/html-is-dead-and-honestly-thats-fine-5fa6574243f0 "This link leaves the DubBlog website.")
-   [WebAIM conference](https://conference.webaim.org/schedule "This link leaves the DubBlog website.") - [Mark Steadman’s presentation](https://youtu.be/5Mbjj3SX1Ck?si=IhC-2Zaavd8s9nte "This link leaves the DubBlog website.") (YouTube)
-   [Explaining the Accessible Benefits of Using Semantic HTML Elements](https://css-tricks.com/explaining-the-accessible-benefits-of-using-semantic-html-elements/ "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.