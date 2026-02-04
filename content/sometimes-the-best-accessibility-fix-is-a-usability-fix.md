---
title: Sometimes the Best Accessibility Fix is a Usability Fix
description: Teams often arbitrarily divide work into two piles: “UX defects” and “accessibility defects”. That split creates the belief that accessibility is an add-on rather than a dimension of good design. In p
url: https://buttondown.com/access-ability/archive/sometimes-the-best-accessibility-fix-is-a/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-10-29T14:30:11.000Z
author: 
contentHash: c5985ee9eda9f568a21788bc217faff9
---

![AI cartoon of woman with long dark hair struggling to open a bottle a common form of usability failure](https://assets.buttondown.email/images/1d791174-1618-4a0b-8526-887a0a1f7d94.jpeg?w=960&fit=max)

*AI cartoon of woman with long dark hair struggling to open a bottle, a common form of usability failure.*

Teams often arbitrarily divide work into two piles: “UX defects” and “accessibility defects”. That split creates the belief that accessibility is an add-on rather than a dimension of good design. In practice, accessibility gains often come from fixing ordinary UX friction points that already frustrate people who don’t have disabilities (yet).

**Premature field errors**  
Many modern forms generate errors as soon as you land in a field. You tab into a date input, and it announces “Invalid date” before you can type your first character.

-   Sighted users endure the visual noise.
    
-   Screen reader users hear speech before action.
    
-   Motor-limited users incur extra navigation.
    
-   Neurodivergent users and users with cognitive disabilities get distracted by the confusing error message.
    

Delaying validation until exiting the field or until an actual error occurs (e.g., entering ! in a field that does not allow punctuation) is a usability change that removes the noise and simultaneously closes access gaps.

**Dropdown opens in an arbitrary location or has a long list of unsorted items that does not support typeahead**  
Neither of these issues is technically a WCAG failure, but they make the product very difficult to use for assistive technology users. Opening a dropdown anywhere but the first item _or_ the selected item (if something has been preselected) forces the users to re-orient themselves immediately. Long lists that lack typeahead require keyboard-only users to arrow-key through items that could be accomplished in a couple of keystrokes. It takes me two characters to type “20”; it takes me 20 arrow-down presses to get to 20 on a numeric list that starts with 1 when typeahead is not supported. Don’t even get me started on lists of countries that don’t support typeahead. Do you know how long it takes to get to “United States” when it's at the bottom of the list in alphabetical order? That’s a guaranteed bounce-out for me. Anchoring open and adding typeahead are usability fixes that sharply reduce repeated navigation that blind and motor-limited users feel very acutely.

**Confirmations that disappear too quickly**  
Timed toasts that disappear before a user finishes reading are usually not considered WCAG failures. Requiring explicit dismissal or leaving them up for 30 seconds (usually they are left up around 6-10 seconds) is a usability change that gives users temporal control, especially benefiting assistive technology users who process content serially through speech, people with reading disabilities, and even English Language Learners.

**Fields that can only be cleared through the backspace key**

Fields that require backspacing to clear are another case where a simple usability defect that is not a WCAG failure becomes an accessibility burden. Reasons to clear text content can include situations where the user has made a mistake, the data has become stale, or the default is invalid. The longer the text, the more annoying it becomes. For sighted users, this is merely irritating.

-   For motor-limited and screen reader users, it adds a long series of extra keystrokes.
    
-   For screen reader users, it causes needless speech output for every removed character.
    
-   For users with cognitive disabilities, it creates uncertainty about whether the system is replacing or appending text.
    

A one-action “clear” control reachable from the keyboard, or automatic selection of the entire field on focus, removes all that cost with a single usability change.

**Looking at a specific product loses your place in the gallery**

Old Navy, I’m talking to you.

You are looking at a bunch of pairs of jeans. You scroll down the gallery and find one you like. You click on it to get more details. Rather than bringing up a dialog or a new tab, it completely takes over the current page with a new URL. OK, so far, not terrible. Here’s where it goes completely off the rails - when you hit the back button, it puts you back at the top of the gallery page, where you have to hold down the down arrow for a while, or hit the tab a bunch of times to get to where you were to continue looking. The further down the list you are, the worse the experience.

Just stop doing this. It is a terrible pattern, and non-disabled users don’t like it either.

**Press-and-hold show-password**  
Press-and-hold is allowed under WCAG; however, it still forces timing precision and fine motor control. Switching to a persistent toggle is a usability change that gives users a stable, known state and removes the timing burden that disproportionately affects blind and motor-limited users.

**Duplicate information sources**  
One source of information is sufficient to meet WCAG. Duplicate sources add cognitive sorting load, extra code, and extra maintenance. Common cases include:

-   inline text plus identical hover text
    
-   captions plus full subtitles (irritation bonus points if they are different, which they never should be, or visually overlap)
    
-   images beside text where the alt-text for the image repeats the text content.
    

Eliminating duplicates is a usability choice that reduces redundant announcements and cognitive overhead while simultaneously speeding up the experience for screen reader users.

**Field entries are erased after failure**  
Decline flows that wipe out the contents of credit card fields pass WCAG because the field remains labeled and reachable. Persisting the number until the user edits it is a usability change that removes heavy re-entry work that falls more heavily on motor-limited and cognitive users. However, having to re-enter a random 16-digit number is quite difficult for people with disabilities, who are far more likely to make an entry mistake.

**Final Thoughts**

TL;DR: Organizations that claim to care about accessibility must also care about usability.

-   When accessibility is framed as something other than “good design”, it competes with delivery and frequently gets deferred.
    
-   When a change is paired with a usability correction, it makes the product easier and more predictable for everyone to use.
    
-   Calling it a usability fix reduces managerial and product owner resistance.
    

No matter what you call it, implementing changes like this results in fewer complaints and support calls. Legal risk also decreases as a side effect, instead of being the primary motivating force for the change.

The fastest path to improved accessibility is to stop defending patterns that already irritate non-disabled users. Those patterns are already creating friction. Replacing them with stable, predictable interactions lifts accessibility without an extra negotiation cycle or a parallel backlog. That is not a compromise. It is the most efficient way to reduce risk and increase customer satisfaction.

Don't forget to subscribe if you want to read the articles before they get published on Wednesdays

[Subscribe now](https://buttondown.com/access-ability)