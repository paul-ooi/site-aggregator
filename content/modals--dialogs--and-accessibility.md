---
title: Modals, Dialogs, and Accessibility
description: A modal dialog is an intentional interruption of the user’s experience. It takes over the underlying page, dimming or locking it down, making it inactive until the user responds to the information in 
url: https://dubbot.com/dubblog/2026/modals-dialogs-and-accessibility.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-04-01T10:11:24.026Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-03-26T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 276eaa90d194e51f873f631440f3bb9d
---

## What is a Modal Dialog?

A modal dialog is an intentional interruption of the user’s experience. It takes over the underlying page, dimming or locking it down, making it inactive until the user responds to the information in the modal.

Modal dialogs should be used when content truly requires the user’s full attention, such as confirming an action, addressing an important message, or making a critical decision. Keep in mind that when you use a modal dialog, you’re not just adding content; you’re interrupting the user’s flow. So be thoughtful and intentional about its use.

## What is a Non-Modal Dialog?

A non-modal dialog behaves very differently. It allows users to continue interacting with other content on the page while it is open. It's non-invasive and can be located on the side or in the corner of a page.

Non-modal dialogs work best for content that adds value without demanding attention, such as supplemental details, contextual guidance, temporary alerts, help text, or tooltips.

## Making Modals Accessible

The best way to make both modal and non-modal dialogs accessible is to be intentional in your use of **focus, semantics, and interaction controls,** and to follow the patterns defined in the [W3C ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/ "This link leaves the DubBlog website.").

### Use the right semantic foundation

-   Modal dialogs - Use:
    -   role="dialog" (or alertdialog for urgent messages)
    -   aria-modal="true"  
        

-   Non-modal dialogs
    -   Still use role="dialog" if it’s a structured overlay.
    -   Do NOT use aria-modal="true"
    -   Allow users to interact with background content.

See [_WAI-ARIA Roles, States, and Properties_](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#wai-ariaroles,states,andproperties "This link leaves the DubBlog website.") for more information on proper use of ARIA for modals.

### Manage Focus

-   Modal dialogs
    -   Move the focus to the dialog immediately when it opens.
    -   Keep focus trapped inside.
    -   Return focus to the triggering element when the dialog is closed.
    -   [Ensure focus is visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html "This link leaves the DubBlog website.") using proper color contrast and size.  
          
        
-   Non-modal dialogs
    -   Ensure focus appears in the dialog when it opens.
    -   BUT allow focus to move freely among elements.
    -   Do not trap keyboard users.

### Make Screen Reader Announcements Intentional

-   Ensure the dialog has a clear, accessible name.
    -   _aria-labelledby_ for title
    -   _aria-describedby_ for context
-   Avoid unnecessary content in the announcements.
-   Don’t rely on placeholder text or visuals alone.  
    

See [_WAI-ARIA Roles, States, and Properties_](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/#wai-ariaroles,states,andproperties "This link leaves the DubBlog website.") for more information on proper use of ARIA for modals.

### Control Background Interaction

-   Modal dialogs
    -   Hide background content from assistive tech.
    -   Prevent tabbing outside the dialog.
    -   Lock visual focus on the dialog.  
          
        
-   Non-modal dialogs
    -   Background remains fully accessible.
    -   Do not lock focus on the dialog; allow focus to move to all interactive page elements.

### Closing the Modal - Provide Multiple Ways Out

Both types should support:

-   Esc key to close (when appropriate).
-   Visible close button.
-   Logical focus returns on close.

## Before Using Either, Consider Alternatives

Dialogs often show up where better options may exist:

-   Expand content inline instead of hiding it behind a dialog.
-   Use a full page for anything complex or multi-step.
-   Use simple notifications for status updates.

## Ask Yourself This

Before reaching for a modal in your webpage design, pause for a moment and ask yourself whether the information in that modal is critical enough to interrupt what someone is doing, or if it can be a simple nudge to remind, help, or support the user as they navigate your website.

## Resources

-   [Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ "This link leaves the DubBlog website.")
-   [Modal vs non-modal dialogs](https://www.makethingsaccessible.com/guides/modal-vs-non-modal-dialogs/ "This link leaves the DubBlog website.")
-   [When to Use Modal vs Dialog Components](https://www.a11y-collective.com/blog/modal-vs-dialog/ "This link leaves the DubBlog website.")
-   [Dialogs vs. Modals: Is there a difference](https://dev.to/iam_timsmith/dialogs-vs-modals-is-there-a-difference-210k "This link leaves the DubBlog website.")?

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.