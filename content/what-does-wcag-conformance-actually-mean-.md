---
title: What Does WCAG Conformance Actually Mean?
description: We’re all working toward WCAG conformance. But what does conformance actually mean?
url: https://dubbot.com/dubblog/2026/what-does-wcag-conformance-actually-mean.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-09-01T14:04:13.799Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-08-27T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 81fc808404729efbfb6042ca7df1aa8b
---

We’re all working toward WCAG conformance. But what does **conformance** actually mean?

It’s a word that gets tossed around a lot in accessibility, sometimes as shorthand for _we’re doing_ _accessibility right_. But conformance is a specific, technical term. 

Understanding what conformance does and doesn’t mean helps set realistic expectations, communicate progress clearly, and avoid confusion about what accessibility success actually looks like.

Let’s break it down.

## Is WCAG Conformance the Same as Accessibility?

The short answer is no. WCAG conformance and accessibility are related, but they aren't the same thing. It helps to think of them this way:

-   Accessibility is the goal.
-   WCAG is a framework for improving digital accessibility in order to reach that goal.

And conformance, according to the W3C, to a standard means you meet or satisfy the requirements of that standard. For WCAG, those requirements are [the success criteria](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1 "This link leaves the DubBlog website."). 

In addition, meeting the WCAG success criteria doesn’t automatically mean a website will provide a perfect experience for people with disabilities.

A website can be accessible without fully conforming to WCAG, and a conformant website can have usability issues.

For example, a site can technically meet every applicable WCAG 2.2 Level AA success criterion and still frustrate users with confusing error messages, unhelpful link labels, or ALT text that exists but provides little useful information.

That’s because WCAG is a **standard** that gives us measurable accessibility requirements, but it can’t capture every nuance of someone’s real-world experience. (This is why [manual testing](https://web.dev/learn/accessibility/test-manual "This link leaves the DubBlog website."), alongside [automated testing](automated-testing-is-a-rockstar-too.html), is so critical.)

So, when we talk about WCAG conformance, the conversation should center on meeting all success criteria at a chosen level (typically AA), with no exceptions, for all content and functionality within our defined scope. It is a pass / fail statement about specific pages meeting specific rules.

## Conformance vs. Compliance vs. Accessibility

These three words get used interchangeably, but they answer different questions:

**Term**

**The Question it Answers**

**What it Means**

**Accessibility**

Can people with disabilities use this?

The overall goal of making a website truly usable by people with disabilities.

**Conformance**

Does it meet a particular standard?

A measurable relationship to a standard, such as WCAG 2.2, AA.

**Compliance**

Are we meeting a legal or regulatory obligation?

Meeting the requirements of a law, regulation, policy, or other enforceable requirement.

In other words, accessibility is the larger objective, conformance is a specific claim against a standard, and compliance is a legal or organizational obligation.

For example, a university might make accessibility a priority across its digital properties, adopt WCAG 2.2 as its accessibility standard, and work toward Level AA conformance. At the same time, it may have [legal obligations under Section 508](section-508-in-higher-education-when-it-applies-and-how-wcag-fits-in.html), [Section 504](https://www.ed.gov/laws-and-policy/individuals-disabilities/section-504 "This link leaves the DubBlog website."), or other state or local regulations that address accessibility.

Another distinction to keep in mind is that **conformance is not the same as usability**.

You can conform to every applicable Level AA success criterion and still create a frustrating user experience. An application page can be technically accessible to a screen reader user, keyboard user, and someone with low vision while creating substantial cognitive barriers.

A person with a cognitive disability might struggle to figure out which application applies to them, understand the terminology, keep track of multiple requirements, and remember specific information while moving through the application process.

Conformance gives us an important, measurable foundation. But it does not tell us whether the user experience is clear, efficient, intuitive, or barrier-free for every person.

## Can You Partially Conform to WCAG?

Well, yes, sort of, but no, not really. 

There's an important distinction between meeting individual success criteria and claiming an overall conformance level.

Don’t forget. **WCAG conformance applies to full pages, not selected portions of a page**. WCAG's formal conformance levels are A, AA, and AAA, and to claim a level, you must satisfy all applicable requirements for that level. 

For instance, a site could conform to WCAG 2.2 Level A while still failing several Level AA criteria. Therefore, you can't really say a site is _partially WCAG AA conformant_. 

WCAG 2.2 Level AA conformance means meeting **all** Level A **and** Level AA success criteria that apply to the content. It’s all or nothing. If you fail one applicable criterion, you don't have full conformance at that level.

But that doesn't mean your site is inaccessible, and it certainly doesn't mean the work behind it doesn't count. It just means the site doesn't yet meet the formal definition of conformance at that level.

### And There’s More - Partial Conformance Gets Tricky

WCAG does recognize something called [partial conformance due to a third party](https://www.w3.org/TR/wcag/?#conformance-partial "This link leaves the DubBlog website."), but it is a **very narrow and specific concept**. It's **not** a way of saying your website is 87% compliant.

## Talking Conformance

In your everyday accessibility work and conversations, it’s often clearer and more accurate to talk about your **progress toward conformance**, saying things like:

-   The site currently meets 85% of applicable WCAG 2.2 AA success criteria.
-   We are working toward WCAG 2.2 AA conformance.
-   The site has outstanding WCAG 2.2 AA issues.

**Why the distinction?**

Because conformance is all-or-nothing at any given level, while the path toward it is a matter of progress, and your organization should absolutely track progress. You just want to be precise about what that progress represents.

Think of it as the difference between saying _we’ve completed 85% of the work_ as opposed to saying _we’re 85% conformant._ The first communicates progress towards the goal. The second can imply a formal conformance claim that doesn’t actually exist.

## So, What Does Conformance Actually Mean?

Back to the original question.

Simply put, conformance means meeting the applicable requirements of a standard.

In reference to WCAG, the W3C is clear: success criteria determine conformance.

Conformance isn’t just about having [an accessibility statement](../2025/why-your-brand-needs-an-accessibility-statement.html), running an automated scan, following [accessibility best practices](best-practices-do-i-have-to-comply.html), or reaching an arbitrary measurement of accessibility.

Although these and other activities are valuable parts of a [sustainable accessibility strategy](../2025/building-a-sustainable-web-accessibility-strategy.html), none of them, on their own, establishes WCAG conformance.

Conformance is about evidence. It answers the question: _have the applicable success criteria been met at the chosen level across the defined scope?_

That evidence provides valuable clarity, giving accessibility teams, content creators, developers, designers, and organizational leaders a shared definition of what they’re working toward.

Use WCAG conformance to establish a measurable standard. Use testing and monitoring to understand where you are in your progress. And keep looking beyond the checklist to the people who actually use your digital experiences.

The goal should never be to make a website that passes a test. The goal should be to make a website people can use.

## Resources

-   [Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance.html "This link leaves the DubBlog website.")
-   [W3C: WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/?utm_source=chatgpt.com "This link leaves the DubBlog website.")
-   [Introduction to Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/intro?utm_source=chatgpt.com "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.