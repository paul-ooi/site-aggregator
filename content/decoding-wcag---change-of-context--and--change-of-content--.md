---
title: Decoding WCAG: “Change of Context” and “Change of Content”
description: As was mentioned in an earlier blog post on “Alternative for Time-based Media” and “Media Alternative for Text,” understanding the differences between terms in the Web Content Accessibility
url: https://webaim.org/blog/decoding-wcag-change-of-context/
source: https://webaim.org/blog
organization: WebAIM Blog
repostedDate: 2025-05-22T04:37:27.589Z
tags:
  - accessibility
sourcePublishDate: 2024-07-31T16:54:31.000Z
author: 
contentHash: c79a6c266cbeaae95e59f8084a75409a
---

## Introduction

As was mentioned in an [earlier blog post on “Alternative for Time-based Media” and “Media Alternative for Text,”](https://webaim.org/blog/media-alternative/) understanding the differences between terms in the Web Content Accessibility Guidelines (WCAG) is essential to understanding the guidelines as a whole. In this post, we will explore two more WCAG terms that are easily confused—change of context and change of content.

## “Change of Context” and “Change of Content” in WCAG

WCAG [defines changes of context](https://www.w3.org/TR/WCAG22/#dfn-change-of-context) as “major changes that, if made without user awareness, can disorient users who are not able to view the entire page simultaneously.” The most common examples are changing focus or creating a popup window.

Changes of context relate to four WCAG success criteria:

1.  **[3.2.1 On Focus](https://www.w3.org/TR/WCAG22/#on-focus) (Level A)** – A change of context does not automatically occur when an element receives focus.
2.  **[3.2.2 On Input](https://www.w3.org/TR/WCAG22/#on-input) (Level A)** – A change of context does not automatically occur when changing an interactive component.
3.  **[3.2.5 Change on Request](https://www.w3.org/TR/WCAG22/#dfn-change-of-context) (Level AAA)** – Changes in context are always user-initiated or can be turned off.
4.  **[4.1.3 Status Messages](https://www.w3.org/TR/WCAG22/#status-messages) (Level AA)** – Status messages can be presented to assistive technologies without receiving focus (i.e., without a change of context).

The definition also includes an important note:

> A change of content is not always a change of context. Changes in content, such as an expanding outline, dynamic menu, or a tab control do not necessarily change the context, unless they also change one of the above (e.g., focus).

In my experience, many changes of content are mistaken for changes of context. Let’s explore the difference between these two through the process of booking a flight on [delta.com](https://delta.com).

## “On Focus”

[Success Criterion 3.2.1 On Focus](https://www.w3.org/TR/WCAG22/#on-focus) states:

> When any user interface component receives focus, it does not initiate a change of context.

On the delta.com page when a text field like “First Name” gets keyboard focus, the placeholder text in the field changes to a smaller visible label right above the field. This slight shift in appearance does not qualify as a change of content because the label itself remains unchanged and the visual change is minor.

![The First Name field has focus and is empty.](/blog/media/context/fname.png)

If I leave this field blank and submit the form, the next time that I navigate to this same field with a keyboard or mouse, an error message appears as a tooltip:

![The empty field has an icon indicating that there is an error and an error message. The error message is: Please enter a valid first name to continue.](/blog/media/context/fname-error.png)

This tooltip is a change of content that is presented on focus, but **it is not a change of context** because there is no major change like moving focus to a different place in the page. So this is not a failure of “On Focus.”

What would be an example of a failure due to a change of context? If I clicked on the “Last Name” field and focus instead automatically returned to the empty “First Name” field with error message.

## “On Input”

While changes of content and context can occur while navigating a page, these types of changes are more common while interacting with elements within the page, for example, interacting with a menu or filling in a form.

[Success Criterion 3.2.2 On Input](https://www.w3.org/TR/WCAG22/#on-input) states:

> Changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component.

WCAG provides a definition of a [user interface component](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components), but this term can usually be simplified to “an interactive thing.”

### Tabs

If I return to the main delta.com site, the main navigation is presented as a group of tabs. This group of tabs—or tab list—is a user interface component. I can interact with this tab list with a keyboard by navigating to the options with the Tab key and then using the ↑/↓ or ←/→ keys to move between tabs. When I do this, the tab panel area below the tab list updates automatically.

![Tab list and tab panel in the page header. The first tab--Book--is selected.](/blog/media/context/tabs.png)

This change of content in the tab panel occurs on input, but it **does not fail** the “On Input” success criterion. Even though this change is more significant than the error message in the last example, this is still a **change of content** and not a change of context. The visual tab structure (and proper ARIA markup) communicates that a change will occur during its use, and the change is limited to the tab panel.

### Dialogs

Within the default “Book” tab, I am going to select the “To Your Destination” option. A dialog opens and focus is automatically set to the “Destination” field.

![Search dialog](/blog/media/context/dialog.png)

Setting focus to this dialog is a **change of context** and a **change of content** in the page, but it is **not a failure of “On Input”** because this action was initiated by the user. “On Input” applies when “changing the setting” of a component and activating a link (or button) is more than a setting change. The same principle applies to the calendar dialog that appears when selecting the “Depart” and “Return” options that follow.

### Filters

After choosing the airports and dates, I am presented with dozens of choices for flights. Selecting “Sort & Filter” reveals several options to refine my search. Unchecking “1 Stop” automatically changes the page, reducing my choices from 47 to 7.

![Expanded sort and filter section for an SLC to ATL flight](/blog/media/context/filter.png)

This “major change” of content does not fail “On Input” due to two other requirements within the WCAG definition of change of context:

1.  It is not “made without user awareness.” It is logical to assume that changes in the filter section will change content later in the page.
2.  It does not change the “meaning” of the web page. The page still presents flight options between SLC and ATL airports on the specified dates.

If changes to the filter changed an airport or flight date without notifying the user or if focus were lost or set to an unexpected part of the page, that would be a change of context.

## Alerts

### Status Messages

Selecting “Log In” in the upper-right corner of the page opens a dialog where I can enter my username and password. An error message appears if one of these is missing or incorrect:

![To continue, please correct the 1 item indicated.](/blog/media/context/status-message.png)

A screen reader automatically reads this message because it is an ARIA alert. Since focus remains on the “Log In” button, **there is no change of context, only a change of content**. This type of message is called a “status messages” in WCAG (see [Success Criterion 4.1.3 Status Messages](https://www.w3.org/TR/WCAG22/#status-messages) for details).

### Messages with a change of context

A similar error message appears at the top of the “Review and Pay” page:

![To continue, please correct the 6 items indicated.](/blog/media/context/error-message.png)

In this case, focus is set to the error message. This is a **change of context**, but it is not a failure of “On Input” because the user initiated the change by submitting the form.

### Timeout messages

After several minutes of inactivity, focus is automatically set to a dialog warning the user that their session will expire after a five-minute countdown unless they choose to either start over or continue.

![Dialog warning that your session will expire. 2 seconds of time are left.](/blog/media/context/timeout.png)

This dialog is clearly a **change of context**. It is a change of focus, and it is made “without user awareness.” So, is it a WCAG failure? Not at Level A or AA (it does fail “Change on Request,” but this is a good example of how strictly adhering to Level AAA success criteria will not always result in the best overall user experience). “On Focus” and “On Input” require action on the part of the user and this change occurs without user action, so these requirements do not apply to periods of inactivity (but requirements in [Guideline 2.2 Enough Time](https://www.w3.org/TR/WCAG22/#enough-time) do).

## Recap

**Changes of context**—like changing keyboard focus or refreshing a page—must not occur while setting focus with a keyboard or mouse, or while changing an interactive element. Let the user initiate these changes by doing things like hitting enter on a focused object or submitting a form. Changes of context can occur after periods of inactivity.

**Changes of content**—like expanding a collapsed area or providing a status message—can occur on focus and on input if they do not change the meaning of the page. Status messages announce a status change without a change of context.