---
title: Keeping an Eye on Accessibility: Manual Testing and WCAG Success - Part 2
description: Achieving a comprehensive accessibility evaluation requires automated scans and manual testing. Manual testing allows for the simulation of how people with various disabilities use the web, which can 
url: https://dubbot.com/dubblog/2025/manual-testing-and-wcag-part-2.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.488Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-04-03T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: bb224e9e27f468cf6731cc183b9f273d
---

Achieving a comprehensive accessibility evaluation requires automated scans and manual testing. Manual testing allows for the simulation of how people with various disabilities use the web, which can uncover accessibility barriers that automated tools might miss.

In [part one of this two-part series](manual-testing-and-wcag-part-1.html), we covered WCAG criteria related to errors, the use of color, and sensory characteristics. In part two, we’ll discuss the intent and significance of each criterion and provide testing scenarios related to video, audio, navigation, and interaction.

## [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html "This link leaves the DubBlog website.") - Providing Alternatives

-   **Intent & Significance:** Provide an alternative, such as a text transcript or description, for audio-only and video-only content to ensure it is accessible to all users.
-   **Manual Testing Scenario:**Automated tools can detect the presence of the alternative description, but not accuracy or completeness.
    -   Check that the content provides transcript(s) for audio-only content.
    -   Check that the transcript is text. For example, an image-only PDF would not be sufficient to pass this test. 
    -   Play the audio-only content entirely while referring to the alternative.
    -   Check that the information in the transcript accurately represents the audio-only content and includes relevant sounds in addition to dialogue, such as doors banging, sirens wailing, identification of speakers in dialogue, etc. 

## [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html "This link leaves the DubBlog website.") - Equivalent Text Access 

-   **Intent & Significance:** Compliance ensures that “enable people who are deaf or hard of hearing to watch synchronized media presentations.” Captions must be provided for all prerecorded video content.
-   **Manual Testing Scenario:**
    -   Check that the user control for captions is provided. 
    -   Check for the captions' accuracy, completeness, and synchronization with the spoken words.
    -   Ensure that the captions are readable and don't obscure critical visual elements.

## [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded "This link leaves the DubBlog website.") - Providing Equivalent Experience

-   **Intent & Significance:** Provide people who are blind or visually impaired access to the visual information.
-   **Manual Testing Scenario:**
    -   Ensure audio description settings are accessible at the same menu level as volume and program options.
    -   Confirm that the audio descriptions effectively describe key visual content, including actions, characters, scene changes, on-screen text, and other visual information.
    -   If audio descriptions are unavailable, verify that a text transcript or an alternative media version, such as an audio-only version, is available and easily accessible.
    -   Verify that the alternative media or transcript provides all critical information from the video.

## [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG21/Understanding/captions-live "This link leaves the DubBlog website.") - Synchronous Text Alternatives 

-   **Intent & Significance:** Live captions must be provided for live video content to enable “people who are deaf or hard of hearing to watch real-time presentations.” 
-   **Manual Testing Scenario:**
    -   During a live video stream, verify that captions are displayed in real-time.
    -   Ensure captions accurately represent spoken dialogue and significant sounds.
    -   Check for accuracy, completeness, and synchronization of the captions with the spoken words.
    -   Ensure that the captions are readable and don't obscure critical visual elements.

## [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded.html "This link leaves the DubBlog website.") - Providing Auditory Context

-   **Intent & Significance:** Audio descriptions must be provided for all prerecorded video content, detailing visual information essential for people who cannot see or understand the visual content.
-   **Manual Testing Scenario:**
    -   Verify that the audio descriptions accurately convey all relevant visual details, such as actions, scene changes, and graphics.
    -   Ensure the descriptions are timed correctly and don't overlap with dialogue or essential audio.

## [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html "This link leaves the DubBlog website.") - Provide Sufficient Contrast 

-   **Intent & Significance:** Ensure that [user interface components and graphical objects achieve the same minimum contrast](../2024/charts-graphs.html) required for larger text, which is 3:1 against the background.
-   **Manual Testing Scenario:**
    -   Inspect user interface components like buttons, form fields, icons, and graphical objects like charts and diagrams.
    -   Use color contrast analysis tools to verify that the contrast ratio meets the standard of 3:1.
    -   Visually inspect the elements to make sure that they are easily distinguishable.
    -   Test in high contrast mode to ensure that all elements are still distinguishable.

## [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide "This link leaves the DubBlog website.") - Prevent Cognitive Overload

-   **Intent & Significance:** Provide users with the ability to pause, stop, or hide moving, blinking, scrolling, or auto-updating content unless the content is essential to an activity. This is essential for people with cognitive disabilities and attention deficits who can be easily distracted by continuous movement. 
-   **Manual Testing Scenario:**
    -   Ensure that the pause /stop / hide controls are clearly visible and operable with both a mouse and keyboard.
    -   For auto-updating content, ensure a mechanism for the user to pause, stop, or hide it or to control the update frequency.

## [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html "This link leaves the DubBlog website.") - Alternative Pathways 

-   **Intent & Significance:** Provide multiple ways for users to locate web pages within a set of web pages, unless the webpage is the result of, or a step in, a process. Not everyone navigates your content in the same way. Provide at least two options that enable users to reach the same content.
-   **Manual Testing Scenario:**
    -   Verify that users can navigate your website using various methods, such as a site map, search functionality, and clear navigation menus.
    -   Check that the navigation is consistent across different pages.
    -   If your site is large, ensure that site search is implemented and that the search function returns accurate results.

Remember that manual accessibility testing, while demanding, is an indispensable part of creating inclusive web experiences. By combining automated testing with tools like DubBot and robust manual testing procedures, you can ensure your website is compliant and genuinely usable for everyone.

For more on manual testing, see Keeping an Eye on Accessibility: Manual Testing and WCAG Success - Part 1

## Resources

-   [A Tool’s Errand](https://html5accessibility.com/stuff/2025/03/24/a-tools-errand/ "This link leaves the DubBlog website.")
-   [Section 508 ICT Testing Baseline Portfolio](https://ictbaseline.access-board.gov/web-baselines/17SyncMedia/ "This link leaves the DubBlog website.")
-   [1.2.1 Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html "This link leaves the DubBlog website.")
-   [1.2.2 Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded.html "This link leaves the DubBlog website.")
-   [1.2.3 Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded "This link leaves the DubBlog website.")
-   [1.2.4 Captions (Live)](https://www.w3.org/WAI/WCAG21/Understanding/captions-live "This link leaves the DubBlog website.")
-   [1.2.5 Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded "This link leaves the DubBlog website.")
-   [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html "This link leaves the DubBlog website.")
-   [2.2.2 Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide "This link leaves the DubBlog website.")
-   [2.4.5 Multiple Ways](https://www.w3.org/WAI/WCAG21/Understanding/multiple-ways.html "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.