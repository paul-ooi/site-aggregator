---
title: Keeping an Eye on Accessibility: Manual Testing and WCAG Success - Part 1
description: While automated tools, like DubBot, quickly crawl large amounts of content to rapidly identify common accessibility barriers, that represents just half of the complete picture. A comprehensive accessi
url: https://dubbot.com/dubblog/2025/manual-testing-and-wcag-part-1.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.491Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-04-01T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: c3d2e24ce1791a14c2bed80484178b81
---

While automated tools, like DubBot, quickly crawl large amounts of content to rapidly identify common accessibility barriers, that represents just half of the complete picture. A comprehensive accessibility evaluation of WCAG compliance requires manual testing as well.

In this [two-part](manual-testing-and-wcag-part-2.html) blog series, we’ll examine some key WCAG criteria that require manual testing, review the intent and significance of each criterion, and provide scenarios you can add to your accessibility testing toolkit.

## [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html "This link leaves the DubBlog website."): Providing Alternatives

-   **Intent & Significance:** Instructions should not rely solely on sensory characteristics such as shape, size, visual location, and sound. You must ensure all users can "access instructions for using the content, even when they cannot perceive shape or size or use information about spatial location or orientation."
-   **Manual Testing Scenarios:**
    -   Review instructions and ensure they are not solely based on visual or auditory cues.
    -   Provide alternative text for images and descriptions for audio / video content.
    -   Use descriptive labels for form fields instead of relying on visual placement.
    -   Verify that instructions are comprehensible when read aloud by a screen reader.

## [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG20/Understanding/use-of-color "This link leaves the DubBlog website."): Ensuring Information Isn't Lost

-   **Intent & Significance:** Color should not be used as the sole means of communicating information. For example, using only a red asterisk as a required field indicator on your web form instead of a red asterisk alongside text that reads “Required.” 
-   **Manual Testing Scenarios:**
    -   Verify that all information conveyed by color is also available through other means, like text.
    -   Inspect elements that rely on color to convey meaning, such as error messages.

## [1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html "This link leaves the DubBlog website."): Adapting to Different Viewports

-   **Intent & Significance:** Content should be able to reflow to fit different viewport sizes without requiring horizontal scrolling, except for specific cases like data tables. This “supports people with low vision who need to enlarge text and read it in a single column.”
-   **Manual Testing Scenarios:**
    -   Resize the browser window to simulate different screen sizes.
    -   Verify that content reflows vertically and remains readable without horizontal scrolling.
    -   Check for overlapping content or loss of information when the viewport is reduced.
    -   Test on mobile devices and tablets of various sizes.

## [3.3.1 Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html "This link leaves the DubBlog website."): Communicating Errors

-   **Intent & Significance:** Identify and describe input errors to the user. Make sure users are aware that an error has occurred and that they can determine what is wrong.
-   **Manual Testing Scenarios:**
    -   Submit forms with missing or invalid data.
    -   Verify that error messages are associated with the corresponding form fields.
    -   [Ensure that error messages are easily identifiable and understandable](../2023/error-messages.html).
    -   Test error messages with screen readers.

## [3.3.3 Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html "This link leaves the DubBlog website."): Guiding Users to Correct Errors

-   **Intent & Significance:** When an input error is detected, "users receive appropriate suggestions for correcting the error." Clear error correction guidance is crucial for accessible forms. It empowers users with learning disabilities and enhances error comprehension for blind or visually impaired users.
-   **Manual Testing Scenarios:**
    -   Intentionally enter incorrect data into form fields.
    -   Verify that clear and specific error messages are displayed.
    -   Check if suggestions for correction are provided, such as the required format or valid values.
    -   Test various types of error conditions.

## [3.3.4 Error Prevention](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html "This link leaves the DubBlog website.") (Legal, Financial, Data): Minimizing Critical Mistakes

-   **Intent & Significance:** To assist users in "avoiding serious consequences resulting from a mistake when undertaking an action that cannot be reversed," such as a money wire transfer. Ensure confirmation messaging and a reversibility option.
-   **Manual Testing Scenarios:**
    -   Test critical transactions like financial transactions.
    -   Verify the presence of confirmation steps before final submission.
    -   Ensure that users can quickly correct or reverse actions.
    -   Test data entry fields for data type validation.

## [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html "This link leaves the DubBlog website."): Communicating Changes Effectively

-   **Intent & Significance:** Status messages should be programmatically determinable so that assistive technologies can present them to users without receiving focus. This ensures that users are [aware of changes or updates without actively seeking them out](making-your-status-messages-accessible.html).
-   **Manual Testing Scenarios:**
    -   Submit a form and observe if a screen reader announces a success or error message.
    -   Perform actions that trigger dynamic content updates, like adding an item to a shopping cart, and verify if the status message is announced.
    -   Inspect the HTML code to verify that the status message is included in the accessibility tree.

## Why Manual Testing Matters

While automated tools are valuable for initial checks, they can not identify all accessibility barriers. As you have read, many barriers can only be revealed through manual testing. 

For more on manual testing, see [Keeping an Eye on Accessibility: Manual Testing and WCAG Success - Part 2](manual-testing-and-wcag-part-2.html)

## Resources

-   [A Tool’s Errand](https://html5accessibility.com/stuff/2025/03/24/a-tools-errand/ "This link leaves the DubBlog website.")
-   [Section 508 ICT Testing Baseline Portfolio](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/ "This link leaves the DubBlog website.")
-   [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html "This link leaves the DubBlog website.")
-   [1.4.10 Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html "This link leaves the DubBlog website.")
-   [1.4.1 Use of Color](https://www.w3.org/WAI/WCAG20/Understanding/use-of-color "This link leaves the DubBlog website.")
-   [1.3.3 Sensory Characteristics](https://www.w3.org/WAI/WCAG21/Understanding/sensory-characteristics.html "This link leaves the DubBlog website.")
-   [3.3.4 Error Prevention](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-reversible.html "This link leaves the DubBlog website.") (Legal, Financial, Data)
-   [3.3.3 Error Suggestion](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-suggestions.html "This link leaves the DubBlog website.")
-   [3.3.1 Error Identification](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-identified.html "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.