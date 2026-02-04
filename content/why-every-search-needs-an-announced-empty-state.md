---
title: Why Every Search Needs an Announced Empty State
description: We’ve all done it; Run a search and found no matches. Sometimes it’s because of a typo. Sometimes, it’s that there truly is nothing that matches what you are looking for. People without disabilities c
url: https://buttondown.com/access-ability/archive/why-every-search-needs-an-announced-empty-state/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-10-15T13:02:38.000Z
author: 
contentHash: b805f566a33913dfe55d8e3cd139dbe9
---

![Turquoise background with a white search function with a finger poised over the magnification icon to execute the search](https://assets.buttondown.email/images/65d5008d-06b9-43d8-aa4c-5581a0a81505.jpeg?w=960&fit=max)

*Turquoise background with a white search functio,n with a finger poised over the magnification icon to execute the search*

We’ve all done it; Run a search and found no matches. Sometimes it’s because of a typo. Sometimes, it’s that there truly is nothing that matches what you are looking for. People without disabilities can easily find their mistakes or reframe the query and try again.

Now imagine experiencing the same thing as a screen reader user without receiving any feedback. The page looks identical, the keyboard focus hasn’t moved, and the screen reader stays silent. You don’t know whether the search was successful, unsuccessful, still in progress, or frozen.

That’s what happens when a search feature doesn’t announce an empty state. This isn’t just a design oversight. It’s a breakdown in communication between the software and its disabled users.

### The Problem with Silence

For sighted users, an empty results page still communicates something. Implicitly, non-assistive technology users understand that there were no matches for their search terms, and they should try something else. Without that message being programmatically exposed, people using screen readers are left guessing. A silent update after a search feels like hitting “Enter” and being dumped into a black hole.

Inaccessible empty states are one of those subtle failures that make an interface feel broken to some users but not others. It’s not about the data; it’s about feedback. Everyone deserves to know what just happened.

### The Real-World Impact

When screen reader users get silence after a search, they start to question whether the system is functioning. Some repeat the search several times. Others reload the page, assuming it froze. Many give up because the absence of confirmation erodes trust.

This isn’t hypothetical. In user testing, I’ve seen participants spend minutes re-typing the same term because they never heard that there were no results. That kind of friction adds up, especially for people who rely on assistive technology to navigate every interaction.

### The WCAG Connection

The Web Content Accessibility Guidelines (WCAG) don’t use the words “empty state,” but they absolutely cover this behavior. Two success criteria are directly relevant:

-   [**4.1.3 Status Messages (Level AA)**](https://www.w3.org/TR/WCAG22/?utm_source=access-ability&utm_medium=email&utm_campaign=why-every-search-needs-an-announced-empty-state#status-messages): requires that important updates such as success, error, or completion messages be programmatically determinable without moving focus. A “no results found” message is a textbook example of a required status message.
    
-   [**3.2.2 On Input (Level A)**](https://www.w3.org/TR/WCAG22/?utm_source=access-ability&utm_medium=email&utm_campaign=why-every-search-needs-an-announced-empty-state#on-input): ensures that changes in context don’t occur unexpectedly. When search results refresh after input, users need clear, predictable feedback that the update has completed.
    

Failing to announce an empty state violates the spirit and often the letter of both criteria.

### What Good Looks Like

A well-designed search interaction tells users exactly what’s going on. When results appear, a screen reader announces them. When there are none, it says so. The change is immediate, polite, and informative.

An accessible empty state:

-   Announces the outcome, such as “No results found for ‘apple.’ ”
    
-   Keeps keyboard focus in the search field, allowing users to quickly refine their query.
    
-   Uses a live region with `aria-live="polite"` to make sure updates are announced quickly and automatically.
    
-   Provides next steps or alternatives — maybe a link to browse categories or help content.
    

If you want to test this yourself, open your site with NVDA or VoiceOver, run a search for “xxx”, and listen. If you hear nothing, that’s one (or more) accessibility failures that could be exposing your organization to legal penalties in the US.

### Where It Usually Fails

I’ve seen the same mistakes repeated in dozens of audits:

-   Designers treat the empty state as a visual placeholder rather than meaningful content.
    
-   Developers create search results visually but not programmatically.
    
-   The focus shifts to the top of the page after the search is completed, interrupting the workflow.
    
-   The live region exists, but it’s not triggered after asynchronous updates.
    

Each of these choices leaves users without confirmation that their action has been completed.

### Shared Responsibility

This isn’t a “developer bug.” It’s a shared design problem. Designers decide what the empty state should communicate. Developers make sure it’s exposed to assistive technology. QA verifies that it has actually been announced. Accessibility breaks when even one of those steps is skipped.

When teams collaborate on this intentionally, the result is smoother for everyone. Search behavior feels responsive, predictable, and respectful of the user’s time.

### The Takeaway

Accessibility isn’t only about providing information when things go right. It is just as important to announce when things go wrong. Screen reader users deserve the same clarity everyone else gets. The phrase “no results” may seem trivial, but it closes the feedback loop. It tells the user that the system heard them, processed their input, and completed the task.

Accessibility is about respect. When users search, they’re asking a question. The least we can do is answer, even if the answer is “nothing found.”

[Subscribe now](https://buttondown.com/access-ability)