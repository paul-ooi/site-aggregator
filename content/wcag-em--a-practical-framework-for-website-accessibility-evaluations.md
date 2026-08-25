---
title: WCAG-EM: A Practical Framework for Website Accessibility Evaluations
description: Last week I received my copy of the Smashing Newsletter from Smashing Magazine. I was especially excited about this issue because every feature section was focused on accessibility.
url: https://dubbot.com/dubblog/2026/wcag-em-a-practical-framework-for-website-accessibility-evaluations.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-08-25T07:17:39.278Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-08-11T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 2c189263c221124f97741207e154af7b
---

Last week I received my copy of the _Smashing Newsletter_ from [_Smashing Magazine_](https://www.smashingmagazine.com/about/ "This link leaves the DubBlog website."). I was especially excited about this issue because every feature section was focused on accessibility.

One section I found especially interesting was about [_Accessibility Quest_](https://a11y.quest/ "This link leaves the DubBlog website."), an accessibility knowledge quiz _created by_ [_Dave Davies_](https://davedavies.dev/) _as a drill to help him study for the_ [_Web Accessibility Specialist_](https://www.accessibilityassociation.org/was-exam "This link leaves the DubBlog website.") (WAS) exam. As soon as I read that, I did what I do and jumped over to the quiz.

My ARIA skills need a reboot. 😩

One of the first questions, if not the very first question, on the knowledge quiz was this:

_What is the correct order of the five steps in the WCAG-EM (_[_Website Accessibility Conformance Evaluation Methodology_](https://www.w3.org/TR/WCAG-EM/ "This link leaves the DubBlog website.")_) process?_

I am happy to report I got that question correct. The five ordered steps defined by the WCAG-EM are:

1.  Define the Evaluation Scope
2.  Explore the Target Website
3.  Select a Representative Sample
4.  Audit the Selected Sample
5.  Report the Evaluation Findings

And with that, I felt confident in my knowledge and continued with the quiz. (Note my earlier remark.) 😢

Later that same day, while reading through other resources I regularly check for blog post inspiration, I saw that two of them had noted that the W3C just published the WCAG-EM 2.0 update. Mmmm… coincidence or foreshadowing? Either way, it seemed like the perfect opportunity to take a closer look at WCAG-EM, what has changed with this update, and why it all matters.

## What is WCAG-EM 2.0? 

WCAG-EM is a structured methodology developed by the W3C for evaluating how well a website conforms to the WCAG criteria by providing a technology-agnostic, step-by-step process for assessing website accessibility. It's a framework that helps accessibility teams, practitioners, and auditors apply WCAG standards systematically to produce consistent, repeatable evaluations.

## The Five Steps of the WCAG-EM

As mentioned in the [_Accessibility Quest_](https://a11y.quest/ "This link leaves the DubBlog website.") knowledge quiz, the WCAG-EM is organized into five key phases of evaluation.

**Note:** The explanations below are meant only as an overview. Please see the [WCAG-EM](https://www.w3.org/TR/WCAG-EM/ "This link leaves the DubBlog website.") in its entirety for more in-depth, complete guidance on how to properly conduct an accessibility conformance evaluation.

### Step 1: Define the evaluation scope

Before testing begins, the evaluator, along with the person requesting the evaluation, should agree on exactly which sections of the digital product are to be assessed, which WCAG conformance level those sections need to conform to, and which browsers, devices, and assistive technologies the product needs to support.

Note: [_WCAG 2 Level AA is the generally accepted and recommended target_](https://www.w3.org/TR/WCAG-EM/#step1b "This link leaves the DubBlog website.").

### Step 2: Explore the target digital product

During this phase, the evaluator becomes familiar with the product by identifying common views, its core functions, different content types, styles and structures, the technologies the product relies on, and any areas that are [specifically relevant to the product's accessibility](https://www.w3.org/TR/WCAG-EM/#step2e "This link leaves the DubBlog website.").

This builds the foundation for choosing which parts to test in detail. In some cases, involving the _product owners and product developers_ can help make this process more efficient and effective.

### Step 3: Select a representative sample set

[_If feasible, it is recommended to evaluate the entire digital product_](https://www.w3.org/TR/WCAG-EM/#step3 "This link leaves the DubBlog website.")_._ 

If that is not possible due to product size (100s of webpages), time, or budget constraints, for example, the evaluator should select a representative sample set that reflects the findings from Step 2. 

The representative sample set should include 1) a structured sample which is made up of key pages, functions, content types, and technologies, 2) a random sample that will [_act as an indicator to verify that the structured sample set is sufficiently representative of the content provided on the website_](https://www.w3.org/TR/WCAG-EM/#step3b "This link leaves the DubBlog website.")_._ and 3) samples of all multi-step processes (like making a purchase or completing an admission application), from start to finish.

**Note**: For detailed information on what each sample includes and how to select it, please read / listen to [_Step 3: Select a representative sample set_](https://www.w3.org/TR/WCAG-EM/#step3 "This link leaves the DubBlog website.") of the WCAG-EM.

### Step 4: Evaluate the selected sample set

Each selected sample set, including multi-step process samples, is tested against the agreed-upon WCAG 2 success criteria and target conformance level. 

Testing must be carried out according to the five WCAG 2 conformance requirements, which are:

-   [Conformance Level](https://www.w3.org/TR/WCAG22/#cc1 "This link leaves the DubBlog website.")
-   [Full pages](https://www.w3.org/TR/WCAG22/#cc2 "This link leaves the DubBlog website.")
-   [Complete processes](https://www.w3.org/TR/WCAG22/#cc3 "This link leaves the DubBlog website.")
-   [Only Accessibility-Supported Ways of Using Technologies](https://www.w3.org/TR/WCAG22/#cc4 "This link leaves the DubBlog website.")
-   [Non-Interference](https://www.w3.org/TR/WCAG22/#cc5 "This link leaves the DubBlog website.")

In addition, the random sample set should be tested against the structured sample set. [_...the randomly selected sample set should not show new types of content not present in the structured sample set_](https://www.w3.org/TR/WCAG-EM/#step4c "This link leaves the DubBlog website.").

### Step 5: Report the evaluation findings

Documenting all test findings should take place at every step throughout the evaluation process. This creates reports that are transparent and repeatable. Optionally, the evaluator can record the technical details of how testing was done, issue a formal conformance statement, provide a numerical score, or produce a machine-readable report using a vendor-neutral and platform-independent format like the [Evaluation and Report Language](https://www.w3.org/WAI/standards-guidelines/earl/ "This link leaves the DubBlog website.") (EARL).

## What’s New in 2.0?

For more than a decade, WCAG-EM has provided a structured way to evaluate website accessibility. The new WCAG-EM 2.0 draft doesn't replace that process. Version 2.0 updates the process to be more technology-agnostic.

The biggest change is that the methodology is no longer limited to just websites. Instead, you can use it to evaluate a wide range of digital products. To support that broader scope, you will see familiar terms like **webpage** replaced with more flexible language such as **view**.

WCAG-EM 2.0 also places a greater emphasis on involving people with disabilities, combining different evaluator expertise, recognizing that automated tools go hand-in-hand with manual testing, and creating reports that support effective remediation. 

## Why This Update Matters

WCAG-EM 2.0 won't require learning a completely new methodology. This updated version is about applying the familiar WCAG-EM process to a broader range of digital experiences while taking advantage of clearer guidance on sampling, reporting, and collaboration. 

The result is a testing methodology that is now better aligned with today's digital offerings and accessibility best practices while staying true to the foundational principles that have made WCAG-EM a trusted resource from the start.

## Resources

-   [Understanding Conformance](https://www.w3.org/WAI/WCAG21/Understanding/conformance "This link leaves the DubBlog website.")
-   [Accessibility Conformance Testing Rules](https://www.w3.org/WAI/news/2026-02-05/act-rules-11/ "This link leaves the DubBlog website.")
-   [WCAG-EM: Website Accessibility Conformance Evaluation Methodology](https://www.w3.org/TR/WCAG-EM/ "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.