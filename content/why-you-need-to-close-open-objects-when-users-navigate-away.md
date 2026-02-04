---
title: Why You Need to Close Open Objects When Users Navigate Away
description: Imagine opening a dropdown, expanding an accordion, or opening a dialog box, then following a link that loads a new object. The old object is still programmatically marked as open. That means it linge
url: https://buttondown.com/access-ability/archive/why-you-need-to-close-open-objects-when-users/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-11-11T20:38:24.000Z
author: 
contentHash: 86cd1378d24f95ad0cc33eea9a474ee1
---

![AIgenerated image of five interior doors all partially open](https://assets.buttondown.email/images/3843e44c-dcbf-4b79-8f04-fca743ea3e44.png?w=960&fit=max)

*AI-generated image of five interior doors, all partially open*

Imagine opening a dropdown, expanding an accordion, or opening a dialog box, then following a link that loads a new object. The old object is still programmatically marked as open. That means it lingers in the accessibility tree. If you open something else, now you have _two_ things open. These stale objects become digital clutter, confusing users about what’s active and what isn’t.

This isn’t a cosmetic detail. It’s an accessibility problem that affects navigation, focus, and trust.

### Why This Matters

In practice, this kind of error causes three major problems:

1.  **Focus confusion** – Users think they’re interacting with visible content, but the screen reader might be announcing remnants of previously opened content.
    
2.  **Keyboard traps** – Focus can get “stuck” in an element and not be able to navigate away without clicking, which is a big accessibility no-no because it takes 15-20 minutes for a disabled user to recover from a keyboard trap.
    
3.  **Loss of trust** – When the interface behaves inconsistently, users question whether their actions are being processed correctly.
    

These failures often happen in modern JavaScript frameworks where state persists across route changes or where components are visually hidden, but remain accessible to assistive technology.

One important thing to realize is that people might use both a keyboard and a mouse. In this case, they may have opened something with the keyboard, but clicked elsewhere with a mouse. This case must be handled as well.

### Relevant WCAG Criteria

Accessibility problems caused by leaving objects open after the user navigates away are associated with multiple WCAG success criteria violations:

-   [**4.1.2 Name, Role, Value (Level A)**](https://www.w3.org/TR/WCAG22/?utm_source=access-ability&utm_medium=email&utm_campaign=why-you-need-to-close-open-objects-when-users#name-role-value): requires that objects accurately expose their current state. If a menu, dialog, or disclosure widget remains marked as “expanded” after navigation, that state is no longer valid.
    
-   [**2.4.3 Focus Order (Level A)**](https://www.w3.org/TR/WCAG22/?utm_source=access-ability&utm_medium=email&utm_campaign=why-you-need-to-close-open-objects-when-users#focus-order): ensures focus moves in a logical sequence. Leaving open elements behind can disrupt expected focus order during or after navigation.
    
-   [**3.2.2 On Input (Level A)**](https://www.w3.org/TR/WCAG22/?utm_source=access-ability&utm_medium=email&utm_campaign=why-you-need-to-close-open-objects-when-users#on-input): mandates predictable behavior when user input changes context. When a new page loads, users expect all prior interactive elements to reset.
    
-   [**2.4.7 Keyboard Focus Indicator (Level A)**](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html?utm_source=access-ability&utm_medium=email&utm_campaign=why-you-need-to-close-open-objects-when-users)**:** Having two keyboard focus indicators is arguably a violation of this important WCAG criterion. The KFI is supposed to highlight only interactive objects. When two KFIs are visible, one of them must be inactive.
    

### What Good Looks Like

A well-behaved interface, like a five-year-old trying to get ice cream, cleans up after itself. When a user navigates away, all open objects should:

-   Programmatically reset to `aria-expanded="false"` or equivalent.
    
-   Close all dialogs, accordions, menus, or other interactive objects.
    
-   Remove elements from the DOM or update them so they no longer appear in the accessibility tree.
    
-   Transfer focus predictably to the top of the new page or to the next object in the tab order (if the page is not being updated)
    

It’s also important to understand that users may mix keyboard, mouse, and alternative input methods such as voice on the same page. You can’t assume they are only going to use a single source of input. For single-page applications, developers must handle this explicitly. Framework transitions don’t always reset ARIA states automatically. Use route-change handlers to close open components and clear focus.

### What Happens When You Don’t Close Open Objects

During an accessibility audit, I once encountered a site where an accordion stayed “expanded” after users navigated to a new section. VoiceOver kept reading invisible content long after it disappeared visually. The result was pretty chaotic. The user heard outdated information read alongside new content.

The page wasn’t broken for sighted users, but it was unusable for screen reader users. That’s what happens when component state cleanup is overlooked.

### Shared Responsibility

Designers, developers, and QA testers each play a role in getting this right.

-   **Designers** define when objects should open and close.
    
-   **Developers** ensure those states are programmatically updated.
    
-   **QA** verifies the cleanup by testing with assistive technologies.
    

This collaboration ensures navigation feels cohesive and complete rather than fragmented.

### Final Thoughts

Every open object should close when a user leaves the page or changes context. Stale ARIA states aren’t just messy code; they are usability friction for assistive technology users. Accessibility is about aligning what users see, hear, and expect. When one of those falls out of sync, the experience breaks.

Clean exits matter as much as smooth entries. If your application opens things, it must also close them, both visibly and programmatically. That’s how you respect the user’s journey from start to finish.