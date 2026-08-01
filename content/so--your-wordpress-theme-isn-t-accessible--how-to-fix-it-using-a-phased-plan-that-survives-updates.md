---
title: So, Your WordPress Theme Isn't Accessible: How to Fix It Using a Phased Plan That Survives Updates
description: You love your WordPress theme. It took hours to get everyone to agree on it. You’ve poured blood, sweat, and tears into getting your content just right. But it isn’t accessible. Maybe you are a Title 
url: https://buttondown.com/access-ability/archive/so-your-wordpress-theme-isnt-accessible-how-to/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-01T10:44:28.599Z
tags:
  - accessibility
sourcePublishDate: 2026-06-24T14:06:42.000Z
author: 
contentHash: dd7ada84eeed676f491f4025a6fdb9eb
---

![Laptop with “WordPress” logo on screen Agency NameContributor Name – stockadobecom](https://assets.buttondown.email/images/fabc7030-5140-4c28-9401-d570367d3382.jpeg?w=960&fit=max)

*Laptop with “WordPress” logo on screen. Agency Name/Contributor Name – stock.adobe.com*

You love your WordPress theme. It took hours to get everyone to agree on it. You’ve poured blood, sweat, and tears into getting your content just right. But it isn’t accessible. Maybe you are a Title II organization staring at a deadline.  Maybe you’ve received a demand letter, or just think it’s a good idea to be accessible.  What can you do?

You could switch to an accessible theme; there are [many available](https://wordpress.com/themes/all?s=accessible&utm_source=access-ability&utm_medium=email&utm_campaign=so-your-wordpress-theme-isnt-accessible-how-to).  However, moving over all that content and making it pixel-perfect is time-consuming

A better option is usually to keep the theme you already have and fix it in place, safely. The tool that makes that possible is a child theme: a lightweight second theme that inherits everything from your current one and becomes the active theme, while the original stays installed underneath and keeps doing most of the work. You make your changes in the child theme, the original keeps receiving its updates untouched, and the two run together. Almost everything that follows in this article rests on that foundation, so it is worth setting up first. The catch is that having a child theme available does not stop people from reaching for shortcuts.

Your next reflexive answer might be “well, let’s just edit the theme.” Open the template files, find the failing markup, and fix it in place. **Resist that urge.** Not because the fixes are wrong, but because of where you would be putting them. On a WordPress site, and especially one built on a page-builder theme like X with Cornerstone, the most important question is not what you change. It is where the change lives. That single question determines two things at once: whether your fix actually removes the barrier and whether the fix will survive your next theme update.

The reason is simple once you see it. A child theme, the customizer, the code editors, and your content all take precedence because WordPress reads them first or stores them in the database. The theme’s own files do not get that protection. They are replaced on update. So the whole craft of remediating a theme you cannot rebuild is a matter of putting each fix in a layer that both solves the problem and survives maintenance. Think of the work not as one large edit but as a sequence of phases, each operating at a different layer of the stack, each with its own powers, its own limits, and its own relationship to that update button. Here they are, in the order I would actually tackle them. The running example is X and Cornerstone, but the principles transfer to any builder-based theme.

## The Rule That Comes Before Every Phase: Leave the Parent Theme Alone

A theme’s core files belong to the company that built the theme. The next time you update, for a security patch, a bug fix, or a new feature, those files are completely overwritten, and every accessibility change you made inside them is gone. You end up with a site that passed last month and blew up the moment someone clicked update, with no warning and no record of what was lost. For a conformance claim, that is the worst possible outcome, because you cannot defend a state that your own maintenance routine erases. So modifying the parent theme is off-limits. Everything that follows is about doing the work somewhere it will actually stay.

## Phase 1: Fix the Content, Because That Is Where the Easy Barriers Are

Before touching a single line of code, start where the largest share of failures usually lives and where the fixes are simplest: the content itself.

-   Missing or unhelpful alternative text on images.
    
-   Headings chosen for visual size rather than document structure, so a page has three competing first-level headings and no logical outline.
    
-   Links and buttons labeled "click here" or "read more" with no surrounding context.
    
-   Form fields with no programmatic label.
    
-   Crappy color contrast
    
-   A page with no declared language.
    

None of these requires a developer. They are editorial fixes made in the page editor or the builder, and on a typical site, they can be up to half of an audit’s findings.

When you update your parent theme, these fixes remain unchanged. Content lives in your database, not in any theme or plugin file, so it is untouched by every update you will ever run. This is the safest layer, which is another reason to begin here.

## Phase 2: Do Not Forget the Plugins, They Answer to No One but Themselves

On the sites I assess, the worst accessibility offenders are frequently caused not by the theme but by plugins. Some examples include:

-   a hero slider that autoplays and stacks competing headings.
    
-   a social-media feed embedded with its own markup.
    
-   a machine-translation widget that swaps the page’s language on the fly and injects controls you never wrote.
    

Each plugin is a black hole of code you can’t see.  They generate their own markup and their own JavaScript, governed by neither your child theme nor your builder. The only reasonable solution is to replace them.

## **Phase 3: Build a Child Theme, Your Safe Room for Code**

A [**child theme**](https://theme.co/docs/child-themes?utm_source=access-ability&utm_medium=email&utm_campaign=so-your-wordpress-theme-isnt-accessible-how-to) inherits everything from its parent and contains only the changes you deliberately add. It becomes the active theme, while the parent remains installed beneath and handles most of the work. This is the home for code-level fixes the content layer cannot reach: a skip link injected at the top of every page, a corrected navigation structure, a stylesheet or script loaded site-wide, and semantic corrections to any template the theme renders in PHP. Because WordPress looks in the child theme first, your overrides win, and a parent update never touches them.

The parent theme must stay installed, because the child theme is a thin layer that depends on it. If your child theme is extensive, a major parent theme update that relocates files can leave your overrides pointing at a structure that no longer exists. Retesting template overrides after big parent theme releases. Functions and scripts you add through the child theme do not carry that fragility.

When you update your parent theme, your child theme remains intact. The only maintenance is to retest any comprehensive template updates after a major release.

## **Phase 4: Close the Visual Gaps With CSS**

A large category of accessibility issues is purely presentational, and most builder themes, X and Cornerstone included, let you add CSS through a built-in code editor at the global or page level with no child theme required. Visible focus indicators so keyboard users can see where they are. Sufficient color contrast. Spacing and reflow so content survives zoom and small screens. Target sizes large enough to tap comfortably. A utility class that hides skip-link text until it receives focus.

CSS can change how things look, but not how they behave.  CSS cannot add a missing label, correct an incorrect role, or make a fake button operable via keyboard. If a fix requires changing the meaning or behavior, CSS is the wrong tool; move to the next phase.

When you update your parent theme, any CSS added in the code editor is stored in your database and survives. The one watch item: if your rules target the builder’s generated class names, a future builder release can rename those classes, so target your own classes and IDs rather than the builder’s generated ones, and retest after major builder updates.

## **Phase 5: Add Accessible Behavior With JavaScript**

This is where the hardest and most common interactive failures get fixed.

-   Accordions that do not respond to a keyboard.
    
-   Tabs with no arrow-key support.
    
-   Modal dialogs that let focus wander behind them.
    
-   Menus that trap or lose focus.
    

These components are usually generated by the builder or a plugin, so you cannot rewrite their source. What you can do is enhance the rendered result: a script, added through the same code editor or enqueued from your child theme, that finds the component after it loads and supplies the missing keyboard handlers, manages focus, and keeps the ARIA state in sync with what the component is actually doing. The [**ARIA Authoring Practices Guide**](https://www.w3.org/WAI/ARIA/apg/?utm_source=access-ability&utm_medium=email&utm_campaign=so-your-wordpress-theme-isnt-accessible-how-to) documents the expected keyboard and focus behavior for each of these patterns.

This is the phase people shortchange and pay for later. It is tempting to “fix” an accordion by adding an aria-expanded attribute and calling it done. That changes only what a screen reader is told, not what the widget does. An aria-expanded that never updates, on a control that is not a real button and has no keyboard support, can test worse than adding nothing at all. Behavior problems need comprehensive behavior fixes.

When you update your parent theme, your script is stored as content and survives the update. Because it targets the rendered page, a builder or plugin update that changes a component’s markup can quietly stop the script from matching, so write it defensively and retest after major updates.

**Phase 6: Name Things, Right Inside the Builder**

Modern page builders, Cornerstone among them, let you attach attributes to elements directly in the editing interface with no code at all. This is the no-code path for a whole class of name and role fixes: an accessible label on an icon-only button, a label on a navigation region, a description tied to a field, a corrected heading level. For a content team without a developer, it is the most approachable lever in the entire stack.

However, attributes describe; they do not behave. ARIA changes the accessibility tree, not the element’s function. Use these attributes for naming and structure, not to fake an interaction state on a component that has no script keeping that state honest.

When you update your parent theme, attributes set in the builder are part of your content, so they persist without drifting. After a major builder release, retest only to confirm the builder has not started emitting its own native attribute that now duplicates or conflicts with yours.

**Phase 7: Rework What the Builder Itself Generates**

On a page-builder site, much of the page is not theme PHP at all. The header, footer, archive layouts, and page bodies are assembled in the builder and rendered by its engine from data in your database. That is exactly why a child theme cannot reach them: there is no file to override. The good news is that you do not need to reach them from outside, because you can rework them from inside the builder, where the structure actually lives. Set a solid heading hierarchy. Define real landmark regions. Choose semantic elements where the builder offers them. Where a built-in component is too broken to salvage with attributes and scripts, replace it with a custom or raw element, or a hand-built accessible component.

You can rebuild structure inside the builder, but you cannot edit the internal markup or bundled behavior of the builder’s own elements in either a parent or a child theme.  When a built-in element is the problem, your options are configuration, enhancement (as in Phase 5), or replacement.

When you update your parent theme, the structures you build persist. The internals of the builder’s stock elements belong to the builder and change with its updates, so anything you layered on top of them is retested when the builder releases a major update. If you replaced an element with your own build, its accessibility is now yours to own and maintain.

**So, What Can You Do? More Than You Thought, but Do It in the Right Order**

If your theme is inaccessible, it is not mandatory to rebuild or replace it. It also doesn’t mean you make a fragile pile of edits that block you from ever updating again. It means working layer by layer: content first, then plugins, then a child theme, then style, then behavior, then in-builder labeling, and finally in-builder structure. Each fix goes where it both removes the barrier and survives your maintenance routine.

And the update question, the one that started all of this, has a plain answer. Almost everything in this plan is update-safe because it lives in your database rather than in files that a vendor will replace. The two things that need watching are full template overrides after a major theme release, and any scripts or styles that target generated markup after a major builder or plugin release. That is a short, predictable retest list, not a standing liability. Done this way, your conformance with [**WCAG 2.1 Level AA**](https://www.w3.org/TR/WCAG21/?utm_source=access-ability&utm_medium=email&utm_campaign=so-your-wordpress-theme-isnt-accessible-how-to) is defensible because your own update button no longer undoes it.

Accessibility that does not survive maintenance is not really accessibility. It is a snapshot. Build it into the layers that last.