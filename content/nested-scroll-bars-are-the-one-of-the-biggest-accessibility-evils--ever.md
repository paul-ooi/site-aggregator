---
title: Nested Scroll Bars Are the One of the Biggest Accessibility Evils, Ever
description: You can violate many WCAG Success Criteria and still have your website be nominally usable by users with disabilities. Sometimes, the bigger problem is accessibility problems that are exacerbated by u
url: https://buttondown.com/access-ability/archive/nested-scroll-bars-are-the-one-of-the-biggest/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-08-26T12:21:02.000Z
author: 
contentHash: c5ba3cb0486e8cdf91611aea10e3efad
---

![AIgenerated image of a scrollable table inside a dialog inside a scrollable browser window](https://assets.buttondown.email/images/1b4c0c98-6e08-4266-82f5-8aa9571a7dbd.jpg?w=960&fit=max)

*AI-generated image of a scrollable table inside a dialog inside a scrollable browser window.*

You can violate many WCAG Success Criteria and still have your website be nominally usable by users with disabilities. Sometimes, the bigger problem is accessibility problems that are exacerbated by usability programs. Nested scroll bars don’t just trip up users; they shove users face-first into accessibility barriers that scream, “We really didn’t think about your needs when designing this.” I’m a little salty about this topic because it frequently severely impacts me.

I’m going to start by making a strong statement that might not be obvious to all: WCAG isn’t just about components. It’s about how components are assembled and interact with each other. You can take a perfectly accessible set of components and put them together in a way that makes accessibility impossible to achieve. This is absolutely the case with nested scrollbars.

When scrollbars appear inside scrollbars, you’re setting up a fight for control. The user scrolls, the browser responds. Which component scrolled can be a big guessing game. The main page? The nested region? The horizontal-and-vertical-scrolling table inside it? Assistive technology users, keyboard users, people with tremors, people with low vision, people using magnification, and people on mobile devices all pay the price when nested scrollbars are used, even when they satisfy WCAG guidelines.

### Tables That Scroll in Two Dimensions

Tables that scroll in both directions are already complex. Now imagine putting that table inside a dialog that also scrolls, and putting that dialog inside a scrollable browser. That’s three separate scroll contexts. It’s the digital equivalent of [turducken](https://en.wikipedia.org/wiki/Turducken?utm_source=access-ability&utm_medium=email&utm_campaign=nested-scroll-bars-are-the-one-of-the-biggest). Each scrolling area may have a unique interaction model.

Most people overlook this design faux pas because they’re using a mouse or touchscreen. However, keyboard-only and switch users are left trying to guess how to _reach_ each scrollable area and _activate_ the correct scroll axis.

Let’s walk through what a keyboard-only user has to do to accomplish this

1.  **Tab through the page** until focus lands _somewhere_ inside the scrollable container.
    
2.  **Arrow keys scroll vertically**—but only if the focus is inside the scrollable table region and the browser allows it.
    
3.  **Try to scroll horizontally** by pressing left or right arrows. That usually doesn’t work because arrow keys typically trigger horizontal scrolling _only_ when focus is inside a scrollable element with keyboard event listeners or specific focusable cell elements.
    
4.  **Try to find a horizontal scrollbar** using the Tab key. Many horizontal scrollbars aren’t keyboard focusable. Even when they are, reaching them involves a ridiculous combination of tabbing, arrowing, and praying to the layout gods that someone didn’t improperly style them.
    
5.  **Lose focus entirely** if the table scrolls the content out from under the currently focused cell. Curse, bang head, then try again.
    

The burden is worse for switch users, who often lack granular directional control and must rely on sequential focus. Nested containers increase the number of focusable elements exponentially, but without a meaningful navigation order.

### What Happens When You Can’t Reach the Scrollbar

Many developers assume users can “just use the arrow keys.” That’s true _only_ when the focused element is inside a scrollable container that’s configured correctly. If the user is on a heading or static text block inside the table region, the arrow keys are completely ineffective.

If the user’s screen reader forces a virtual cursor mode (like NVDA or JAWS), they may not even be in interactive mode, which means the table’s scroll behavior never activates. Additionally, there is no audible cue indicating that the user must switch modes to scroll a table horizontally.

### Magnification Makes It Worse

A 2D scrolling table means the content is likely to overflow both horizontally and vertically. Developers can get away with this because tables are exempt from reflow rules (see [Note two on WCAG 1.4.10](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html?utm_source=access-ability&utm_medium=email&utm_campaign=nested-scroll-bars-are-the-one-of-the-biggest)). If magnification is being used, users now have to scroll _vertically_ through the container and then _horizontally_ through the table cells, constantly shifting both axes to view related data.

Add to that: most magnification users are working with a viewport the size of a postcard. They can’t see column headers and data rows at the same time. When they manage to scroll in the intended direction, the scrolling wipes out their spatial map.

### Real-Life Consequences of Nested Scrolling

Users miss essential information. Screen reader users hear data with no header context. Disclaimers at the bottom of pages in tiny print get missed. Keyboard users tab endlessly through cells. People with tremors struggle to reach scrollbars. Magnification users often overlook that half the table exists. It is rare for designers even to be able to provide a legitimate business reason behind choosing the nested scrolling pattern.

### What to Do Instead

Avoid using:

-   Scrollable tables inside scrollable containers
    
-   Scrollable containers inside scrollable pages
    
-   Expand and collapse functions to hide the fact that you have way too many scrollable regions
    

Do:

-   Split data across multiple pages or collapse long tables into sections
    
-   Consider using sticky headers and columns, _but only when fully keyboard-accessible_
    
-   Provide a CSV or Excel download for large tables
    
-   Support keyboard arrow navigation in both directions, with clear focus states
    
-   Test table access with screen readers, magnification, and keyboard navigation
    

### Final Thought

A table that scrolls in two directions, inside another scrolling region, is more than a design oversight. It’s a barrier erected by failing to consult with users with disabilities. Keyboard users didn’t ask for this. Screen reader users didn’t consent to it. If your layout creates a maze of scroll targets, you’re telling users with disabilities they’re not your priority.

You don’t need clever design. You need functional design. And functional design means: no nested scrollbars. No exceptions.