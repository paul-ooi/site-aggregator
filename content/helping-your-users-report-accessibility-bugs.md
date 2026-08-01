---
title: Helping Your Users Report Accessibility Bugs
description: After a long day of reading reports, meeting with stakeholders, and returning numerous emails and phone calls, you come home, grab your tablet, and go to your favorite sushi restaurant's website to or
url: https://dubbot.com/dubblog/2026/helping-your-users-report-accessibility-bugs.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-08-01T10:44:29.194Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-07-23T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 9dc004294dc91cc0f3196dd700767b5e
---

After a long day of reading reports, meeting with stakeholders, and returning numerous emails and phone calls, you come home, grab your tablet, and go to your favorite sushi restaurant's website to order dinner. <sigh>

You scroll down the list, select all your favorites, then tap **Check Out**. The list reappears with all your selections unchecked, with a message in red text at the top of the screen that reads, _One or more fields contain errors_.

You scroll up and down the list, but alas. There is no indication of which field(s) contain what error(s).

Sound familiar? Have you experienced this? If so, did you report the accessibility issue?

## The Feedback Gap

If you're like a lot of people, you probably didn't report it.

According to WebAIM’s [2024 Screen Reader User Survey](https://webaim.org/projects/screenreadersurvey10/ "This link leaves the DubBlog website.")

> The majority (67%) of respondents never or rarely contact web site owners about barriers. Respondents without disabilities reported nearly the same likelihood to contact website owners as respondents with disabilities. ~ Screen Reader User Survey, [Contacting Website Owners](https://webaim.org/projects/screenreadersurvey10/#contact "This link leaves the DubBlog website.")

Or maybe you weren't sure who to contact. Was there a **Report an Issue** link? A contact page? Or even an accessibility statement with an email address?

Even when users can locate a resource and take the time to report the issue, there's no guarantee the information will reach the people who can fix it. It may get buried in a generic inbox or routed to the wrong team. And even worse, it may get dismissed as user error, or simply disappear into an already overloaded support queue.

But from the organization’s standpoint, everything appears to be fine. Conversions are happening, no one is complaining, the site is clearly working. But in most cases, [that is simply not the reality](yes-web-teams-disabled-people-use-your-website-dispelling-a-myth.html).

Understanding why accessibility issues go unreported, or why reports never make it to the right people, is the first step in building a feedback process that actually works.

Fortunately, the [World Wide Web Consortium](https://www.w3.org/ "This link leaves the DubBlog website.") (W3C) has [step-by-step guidance for users](https://www.w3.org/WAI/teach-advocate/contact-inaccessible-websites/ "This link leaves the DubBlog website.") on how to report accessibility barriers. While the instructions are written to help people submit reports for barriers they’ve encountered, this list of how-tos also provides valuable insight for accessibility practitioners.

From an organization's point of view - one that is building an accessibility feedback process - they can serve as a practical blueprint for designing feedback channels that make it easy for their users to report issues and for organizations to receive, route, and act on those reports.

The W3C’s user instructions map out three steps for success: identify key contacts, describe the problem, and follow up as needed. Those same three steps provide the framework for organizations to build accessibility issue reporting channels that encourage users to report issues, help ensure those reports get in front of the correct person or team, and lead to meaningful action.

### Create Dedicated Feedback Channels

The easier you make it for people to report accessibility barriers, the more likely they are to do so. And because not everyone communicates the same way, offering varying feedback channels that accommodate different needs and preferences goes a long way in helping people help you. 

For example, 

-   **Web Chat or Web Call**: This option allows you to provide feedback via fully accessible live chat or a video call.
-   **Phone**: A dedicated feedback phone number, ideally with a feature to automatically call via [Voice User Interfaces](https://www.interaction-design.org/literature/topics/voice-user-interfaces "This link leaves the DubBlog website.") (VUIs) with simple voice menus. Be sure to create a regular message retrieval cadence.
-   **Web Form**: A simple contact form with no more than three required fields. Make sure to [use best practices](../2024/accessible-web-forms.html) when developing an accessible web form and follow [the guidance of the W3C](https://www.w3.org/WAI/tutorials/forms/ "This link leaves the DubBlog website.").
-   **Email**: A dedicated email address with an email link using the **mailto:** protocol with prefilled **To:** and **Subject:** fields.  
    

_~_ [_Accessibility Feedback & the User Experience_](../2024/accessibility-feedback-the-user-experience.html)

## Guide Users Through Reporting the Issue

Creating a feedback channel is only the first step. To resolve accessibility issues quickly and efficiently, guide users on what to include in their reports. The more details they provide, the easier it will be for you to track down the problem, identify the root cause, implement a fix, and release the update.

This framework was adapted from the W3C's guidance for users:

**Where:** The exact page URL and, if applicable, the specific page, feature, form, or component where the issue occurred.

**What:** A clear description of what the user was trying to accomplish, what happened instead, and what they expected to happen. Encourage specific descriptions, such as _I couldn't tab to the Checkout button_.  
  

**How:** Information about the user's environment, including the browser, operating system, device, and any assistive technology being used, such as a screen reader, screen magnifier, or voice recognition software. If known, version numbers for all the above.

**When:** If the issue is intermittent, note when it occurred and whether it can be replicated consistently.

**Supporting evidence (optional):** A screenshot, screen recording, or other supporting documentation can provide valuable context, although users should never be required to provide visual evidence to report an accessibility barrier.

You can adapt this into an information-gathering worksheet for phone calls or create an accessible web form. The form should be just one of several ways users can report accessibility issues. Make the link easy to find on your website, readily available for support staff to share during live chat conversations, and consider including it in the email signatures of accessibility or customer support personnel.

Providing clear reporting instructions up front helps users submit actionable reports while giving your accessibility team the information they need to address the issue as efficiently as possible.

## Acknowledge The Effort and Provide a Timeline

A prompt confirmation builds trust, validates that the person's effort was worthwhile, and establishes clear expectations for next steps. Even in cases where an immediate fix isn't possible, timely acknowledgment reflects an organization's genuine commitment to accessibility and to respectful, transparent communication.

In addition, people may be reporting a barrier that is actively preventing them from completing a task. That acknowledgment is even more critical and should be prompt, accessible, and available in the same channel the person used whenever possible.

The acknowledgment method should vary based on channel, but the core information should remain consistent.

### What Every Acknowledgment Should Include

Regardless of how the issue was submitted, provide:

-   A thank you for taking the time to report the issue.
-   Confirmation that the report was received.
-   A reference or case number (if applicable).
-   A summary of the information received.
-   Expected response time.
-   Information about next steps in the review process.
-   Alternative contact methods if additional assistance is needed.
-   A commitment to accessibility and continuous improvement.

### Channel-Specific Recommendations

-   **Web Form**, _Best practice: Immediate automated confirmation_  
    After submission, display an on-screen confirmation message and send an email acknowledgment if the user provided an email address. The confirmation page could include:
    -   Confirmation of successful submission
    -   Case number
    -   Response timeline
    -   Accessibility contact information  
        

-   **Email**, _Best practice: Automated reply followed by a human response_  
    Immediately send an automated acknowledgment confirming receipt. Then have a staff member provide a personalized response once the issue has been reviewed. This reassures users that their email did not disappear into a queue.  
      
    
-   **Chatbot or Live Chat**, _Best practice: End-of-chat transcript and case confirmation_  
    Before ending the session:
    -   Confirm the issue has been documented.
    -   Provide a case number.
    -   Offer a transcript download or email copy.
    -   Explain when they should expect a follow-up.  
          
        
-   **Phone Call**, _Best practice: Verbal confirmation plus written follow-up when possible_  
    At the end of the call:
    -   Read back the issue summary.
    -   Confirm contact information.
    -   Provide a case number.
    -   Explain next steps and timelines.
    -   If the caller provides an email address, send a written acknowledgment after the call.  
          
        
-   **Zoom or Video Call**, _Best practice: Meeting summary and written follow-up_  
    At the conclusion of the call:
    -   Summarize the reported issue.
    -   Confirm any URLs, pages, or tasks discussed.
    -   Explain next steps.
    -   Provide a timeline for follow-up.
    -   Afterward, send an email containing:
        -   Summary of the discussion
        -   Case number
        -   Contact information
        -   Expected response timeline
        -   Consider Multiple Levels of Acknowledgment

Many organizations stop after the first acknowledgment. Providing updates throughout the process helps build trust and demonstrates that accessibility feedback is taken seriously.

### Don't Forget Accessibility

The acknowledgment itself should be accessible:

-   Plain language.
-   Clear subject lines.
-   Accessible email formatting.
-   Accessible PDFs (Use PDF only when necessary).
-   Captions and transcripts for video communications.
-   Alternative communication methods available upon request.

The goal is not simply to acknowledge the report, but to assure the individual that their feedback reached the right people, is being actively reviewed, and will be tracked through resolution whenever possible.

When people realize that their feedback leads to meaningful action, they are far more likely to report future issues, helping you identify and resolve barriers more efficiently.

## Resources

-   [Make It Easy to Find Help and Give Feedback](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o7p05-findable-support/ "This link leaves the DubBlog website.")
-   [Accessibility Feedback & the User Experience](../2024/accessibility-feedback-the-user-experience.html)
-   [Contacting Organizations about Inaccessible Websites](https://www.w3.org/WAI/teach-advocate/contact-inaccessible-websites/ "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.