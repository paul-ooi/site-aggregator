---
title: Accessibility Belongs in Your Project Requirements
description: I recently attended an excellent webinar on accessibility metrics. The presenters broke the metrics into three categories, meant to be applied across the software / product development lifecycle:
url: https://dubbot.com/dubblog/2026/accessibility-belongs-in-your-project-requirements.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-08-25T07:17:39.208Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-08-18T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 951c9936c15fc6aae3a05b8d7b4ce0d3
---

I recently attended an excellent webinar on accessibility metrics. The presenters broke the metrics into three categories, meant to be applied across the software / product development lifecycle:

-   A11y barrier prevention metrics
-   A11y monitoring and recovery metrics
-   A11y reporting metrics

As a big fan of the Shift Left philosophy, I decided to focus this post on prevention metrics. After all, it’s a philosophy and methodology I strongly believe in, and one I’ve championed throughout [several blog posts](../2025/a-guide-to-continuous-accessibility-monitoring.html).

When the presenters got to the section defining prevention metrics, something caught my attention: a stage of the product development lifecycle that I had overlooked.

That stage is the project requirements. It defines what a product needs to do and how, so design and development have a solid foundation to work from. And getting this stage right reduces costly rework later if accessibility isn’t baked in from the start.

## Why Requirements Are the Real _Shift Left_

A lot has been written and said about shifting left within accessibility work. Topics like catching issues in design, testing early, and training developers. All of that matters. But if accessibility isn't written into the requirements before design or development begins, we're not actually shifting left. We're just moving the starting line.

Requirements define product scope and help stakeholders agree on what **done** looks like. If accessibility isn't part of those conversations from the start, it can become something that has to be tacked on later, or, even worse, something that has to be defended as **in scope** after the fact. That can directly affect timelines, budgets, and ultimately the product itself.

Think about how most requirements documents are structured. Among other important factors, those documents typically capture: (This is not a comprehensive list.)

### Functional Requirements: what the product needs to do

-   Features and capabilities, described in detail
-   Use cases and user flows
-   Input and output specifications
-   Business rules and logic

### Non-Functional Requirements: how the product needs to do it

-   Performance
-   Scalability
-   Security
-   Usability
-   Reliability and availability
-   Maintainability

### Acceptance Criteria: how to know the product is complete

-   Definition of **done** for each requirement
-   Testing and validation criteria
-   Conditions that must be met for the requirement to be accepted

Accessibility touches every one of these. A checkout flow isn't _functionally complete_ if you can't operate it with a keyboard. A page doesn't meet performance standards if a screen reader user can't parse the structure. And acceptance criteria that don't include accessibility checks don't really define **done** for all users.

When you build accessibility into project requirements, it becomes a deliverable with the same weight as any other requirement.

Accessibility in the project requirements according to the webinar that inspired this blog post:

> Project requirements:
> 
> -   Are a11y requirements part of the [Definition of Done](https://www.atlassian.com/agile/project-management/definition-of-done "This link leaves the DubBlog website.")?
> -   Is the required a11y standard documented? 
> -   Are a11y acceptance criteria defined for the product? 
> -   If a & b & c are not true, do not hand off to Design.
> -   **Metric**: % of projects entering Design with a11y reqs complete
> 
> ~ [_Metrics that unite your team to achieve and sustain accessibility_](https://youtu.be/4dchvzMqMiM?si=cSSzg1-5gXQFnzXW "This link leaves the DubBlog website.")_! (YouTube)_

## What This Looks Like in Practice

Talking about accessibility during the project requirement phase is easy. The harder part is writing requirements that are specific enough to guide design and development professionals, yet still testable.

Here are a few ways to make that process easier:

### Build Accessibility Directly into Functional Requirements, Not a Separate Checklist

Instead of a generic line item like _product must be accessible_, link accessibility directly to the feature itself. For example:

_Functional requirement:_ Users can complete a checkout process using only a keyboard, with visible focus indicators at every step.

_Functional requirement:_ All form validation errors are announced to assistive technology and are not conveyed by using color alone.

This keeps accessibility attached to the feature it affects.

### Set a Conformance Target Up Front

Most people benefit from determining a standard such as [WCAG 2.2 Level AA](https://www.w3.org/WAI/standards-guidelines/wcag/ "This link leaves the DubBlog website."), as the baseline requirement, much like specifying browser version support. This gives designers, developers, and testers a shared reference point instead of a vague goal.

### Make Acceptance Criteria Verifiable

Requirements are only useful if someone can verify them. Criteria like _images having appropriate ALT text_ or _modal dialogs that trap focus and can be dismissed with the Escape key_. Those requirements can be checked and verified by an accessibility tester or an automated testing platform, where appropriate. 

Vague language like _this element_ _should be accessible_ can not be verified and should not be included in the requirements documentation.

### Assign Ownership for Accessibility Requirements

Just as a product owner owns functional scope, someone needs to own accessibility scope. This person would review requirements before they're finalized, define what accessible means for the product, and make sure those accessibility requirements get built into design, development, and testing.

## Back to the Prevention Metrics

This is where the webinar's framing really clicked for me. Prevention metrics aren't just about catching issues before code ships. They're about catching issues long before a single design file or line of code exists. If a requirement never mentions keyboard access, that omission doesn't get prevented; it gets detected later, when it's more expensive to fix.

Monitoring and recovery metrics are critical. Reporting metrics are as well. But **prevention** starts at the project requirements stage, where scope, budget, and expectations are locked in, and accessibility should be, too. Get it right there, and you don’t just prevent accessibility issues later; you build accessibility into the project from the start and truly Shift Left.

## Resources

-   [Web Performance Metrics](../2022/web-performance-metrics.html)
-   [Want to Save Money? Make Your Website Accessible](../2024/want-to-save-money-make-your-website-accessible.html)
-   [Metrics that unite your team to achieve and sustain accessibility](https://youtu.be/4dchvzMqMiM?si=cSSzg1-5gXQFnzXW "This link leaves the DubBlog website.")! (YouTube)
-   [How to Use Google Analytics to Identify Web Accessibility Issues](https://www.juliemyoung.com/blog/2016/7/17/using-google-analytics-to-identify-web-accessibility-issues "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.