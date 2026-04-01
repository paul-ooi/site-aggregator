---
title: Why Keyboard-Only Testing Should Be Your First Accessibility Check
description: Keyboard-only testing is one of the simplest, most revealing ways to evaluate the accessibility and usability of your website. While many people effortlessly glide through websites using a mouse or to
url: https://dubbot.com/dubblog/2026/why-keyboard-only-testing-should-be-your-first-accessibility-check.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-04-01T10:11:24.102Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-03-24T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 31d6306842c049e1c0f58bd5cf3b4eb6
---

Keyboard-only testing is one of the simplest, most revealing ways to evaluate the accessibility and usability of your website. While many people effortlessly glide through websites using a mouse or touchscreen, a significant portion of users rely solely on a keyboard for navigation. 

Users with motor disabilities, repetitive strain injuries, temporary impairments, screen reader users, power users who prefer efficient keyboard shortcuts, and even people using devices with limited input options, such as smart TVs or gaming consoles, all benefit from a well-structured keyboard navigation system.

If a website doesn’t work with a keyboard, it can make it completely unusable. Missing focus states, broken tab order, and inaccessible menus can trap users or make key actions impossible. Those are not minor issues.

As I do every year, I attended [axe-con](https://www.deque.com/axe-con/ "This link leaves the DubBlog website.") back in February. One presentation struck me as particularly brilliant. That was [Greg Gibson’s](https://www.linkedin.com/in/hellogreg/ "This link leaves the DubBlog website.") [_Testing Web Experiences with Your Keyboard_](https://www.youtube.com/watch?v=n4X4nAlzZ14 "This link leaves the DubBlog website.")_._ (YouTube) 

I call it brilliant because his approach was refreshingly practical. No overcomplication, no abstract theory or flashy slides packed with buzzwords, slick visuals, and over-the-top animations. It was one of those rare presentations that was clear, straightforward, and easy to follow. And a little funny. Mr. Gibson walked his audience through [real keyboard testing step by step](https://hellogreg.org/axe26/ "This link leaves the DubBlog website.") (he didn't just talk about it), calling out each barrier as it appeared, explaining exactly why it mattered, and how to fix it.

**Here's a list of my takeaways and Ah-Ha moments:**

-   If you’re on a Mac - 
    -   In your system settings, you can go to the keyboard section and turn on the keyboard navigation switch.
    -   Then, in Safari, open your preferences via _Command-Comma_, open the _Advanced_ tab, and check the _Press_ _**Tab**_ _to highlight each item on a webpage_ checkbox.

-   Visible focus styles can help you catch other issues.

-   -   -   In Mr. Gibson’s presentation, he tabs through a paragraph, and three otherwise non-detectable links are discovered when they receive focus.
        -   This is a great catch for inline links that lack proper styling, such as blue underlines and/or proper contrast with the surrounding text. Affecting people with color deficiency disorders.

-   Using links as buttons. 

-   -   -   If you find something on a webpage that isn't expanding, or pop-ups that don't open when you press the space bar, the developer might have mistakenly used a link instead of something more semantically appropriate.

-   Tool tips are a big culprit.

-   -   -   Typically, we think of these short contextual pop-ups as something triggered by hovering the mouse cursor over them. 
        -   This excludes keyboard users, assistive tech users, and touchscreen users. In other words, someone using a phone or tablet will never see your hover-only tool tip.
        -   **_This is a case where keyboard testing helps more than just keyboard users._** 
        -   Tool tips should be toggled not only on hover, but also on focus or click.

-   Modals

-   -   When you close a modal via that close button, focus should return to the button that opened it. That way, people have a sense of place.

One of the biggest takeaways from the session was how quickly issues surface when you test this way. You can have the best messaging and the most polished design, but if users can’t navigate your website, none of that matters.

Conducting keyboard-only testing is surprisingly simple and can be seamlessly integrated into your development workflow. Plus, you don’t need a complex setup or deep technical expertise, just unplug your mouse and start tabbing.

And, as Mr. Gibson mentioned, it’s a low-barrier, high-impact habit that anyone on your team, from designers to developers to marketing professionals, can adopt easily and quickly.

I highly encourage you and your team to take 48 minutes to watch, listen, and learn why keyboard-only testing is a fundamental aspect of creating inclusive user experiences.

By understanding who depends on keyboard navigation and implementing these simple testing procedures, we can ensure that our websites are truly accessible for everyone.

## Resources

-   [Keyboard Accessibility](https://webaim.org/techniques/keyboard/ "This link leaves the DubBlog website.")
-   [Testing Web Experiences with Your Keyboard](https://www.youtube.com/watch?v=n4X4nAlzZ14 "This link leaves the DubBlog website.") (YouTube)
    -   [Visual Keyboard Testing](https://hellogreg.org/axe26/ "This link leaves the DubBlog website.")
    -   [Greg Gibson](https://www.linkedin.com/in/hellogreg/ "This link leaves the DubBlog website.")
-   [Understanding SC 2.1.1: Keyboard (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.