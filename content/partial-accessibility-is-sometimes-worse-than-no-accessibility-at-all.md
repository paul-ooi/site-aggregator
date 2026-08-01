---
title: Partial Accessibility Is Sometimes Worse Than No Accessibility at All
description: To people who do not use assistive technology, partial accessibility sounds like a reasonable compromise. Some access is better than none, the thinking goes, and an organization that fixed half its pr
url: https://buttondown.com/access-ability/archive/partial-accessibility-is-sometimes-worse-than-no/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-01T10:44:28.599Z
tags:
  - accessibility
sourcePublishDate: 2026-06-17T13:54:18.000Z
author: 
contentHash: 34b60337e93fc8a3ddff056687830d5b
---

![Doors closing that dissolve around the edges](https://assets.buttondown.email/images/9334c475-30db-4e15-b349-d8b6691ed2c4.jpeg?w=960&fit=max)

*Doors closing that dissolve around the edges*

## Claude responded: To people who do not use assistive technology, partial accessibility sounds like a reasonable compromise.

To people who do not use assistive technology, partial accessibility sounds like a reasonable compromise. Some access is better than none, the thinking goes, and an organization that fixed half its problems is surely better than one that fixed nothing. It feels generous, even logical. It is also wrong.

People who depend on assistive technology know better because they experience the difference between a site that fails immediately and one that fails halfway through. The first is a closed door. You see it, you turn around, you spend ten seconds, and move on. The second invites you in, takes your time and energy, lets you authenticate or create a login and start the task you came to do, and then strands you at a wall you could not see coming. By the time you hit it, you have already spent the resources you cannot easily get back. Partial accessibility does not split the difference between working and broken. It often delivers an outcome worse than total inaccessibility, because it fails you only after you have invested in the promise that it would not.

This is the part of the accessibility conversation that does not get said enough. Half-finished accessibility is not half a win. Half-done accessibility tells the world you knew about accessibility and decided to ship it half-unfinished anyway. There is also a legal dimension to this story that organizations consistently underestimate. Partial accessibility creates a paper trail. The accessible parts of your site demonstrate that your organization has the knowledge, budget, and technical capacity to comply with WCAG — some of the time. The inaccessible parts, sitting alongside the accessible ones, demonstrate that the failure to comply elsewhere was not due to ignorance or impossibility. It was a choice. That distinction matters in a Title II investigation, Title III demand letter, Section 504/509 complaint to a federal funding agency, and before a judge. Plaintiffs’ firms love partially complete patterns because they foreclose the most common accessibility defenses: that the standard was unclear, that remediation was infeasible, or that the organization was acting in good faith and had not gotten to it yet. An accessibility statement on a home page that links to an inaccessible application is not evidence of commitment. It is evidence, period. Organizations that ship partial accessibility are often handing, without realizing it, the strongest evidence in the case against them to the opposing counsel.

What follows is a tour of where this pattern shows up, what it costs the people it traps, and why the premise of “some accessibility is better than none” does not hold up under scrutiny from the people who actually rely on it.

## The Accessible Login, the Inaccessible Dashboard

The user authenticates without trouble. The login form has visible labels, a logical tab order, an accessible error pattern, and a password field that works with a password manager. The user lands on the page they actually came for, and that is where the experience falls apart. The table has no headers. The filter controls are unlabeled buttons with icon-only content. The modal traps focus and cannot be dismissed with the Escape key. The user cannot leave without losing the session they just established, and they cannot do the task they logged in to do.

Making logins accessible is straightforward. It is a well-documented pattern on every accessibility checklist, and the first thing remediated because it is what every user touches. The dashboard is where the actual work happens and where the custom components, dynamic content, and the team’s accessibility debt live. Fixing the front door without fixing the rooms down the hall results in a building that looks welcoming but is not.

## The Accessible Main Flow, the Inaccessible Error State

Everything works until something goes wrong. The user fills out a form, submits it, and waits. The page does not advance. There is a red border on a field, a toast that disappears without announcing, or an inline message that is not programmatically associated with the failed field. The user now knows something is broken, but not the critical details, such as what broke, where it is broken, or how to move forward. The happy path was tested with assistive technology. The unhappy path was not.

Error states reveal the depth of accessibility programs. Surface-level remediation addresses only the visible, predictable, success-case content. Real remediation addresses validation messages, server errors, session timeouts, network failures, and the long list of messages that appear only when something goes wrong. Most users, disabled or not, encounter errors regularly. Disabled users encounter them more often because the form was harder for them to complete in the first place. Lack of accessibility here hits them harder.

## The Accessible Desktop Site, the Inaccessible Mobile Site

The team remediated the desktop experience, ran an audit, congratulated itself, and shipped a separate mobile build that no one tested with TalkBack or VoiceOver. Touch targets are too small to tap reliably. Custom gestures have no alternatives. The hamburger menu is a div with a click handler and no role. The mobile navigation traps focus inside an off-canvas drawer that the screen reader cannot escape. Form fields zoom unpredictably when the user magnifies. The result is that a user who can complete a task at their desk cannot do so on the bus.

This pattern is especially painful because mobile is where many disabled users live. A blind user with VoiceOver on iOS, a low-vision user with system-level magnification on Android, a user with a tremor who relies on touch adjustments, and a user with cognitive disabilities who uses a simplified launcher are not edge cases. They are the daily reality of mobile access. Treating mobile as a downstream concern means you consider those users “downstream” as well.

## The Accessible Public Pages, the Inaccessible Authenticated Pages

This is where marketing gets the budget and schedule, but the product does not. Every page a prospective customer sees is clean; every page an actual customer uses is a mess. This is the most common pattern in government, where the home page and the ADA statement are pristine, while the permit application, the benefits portal, the property tax lookup, the bill payment system, and the records request forms, frequently provided by third-party vendors, are unusable. It is also common in private-sector products, where the marketing site is built by a design agency that cares about accessibility. Still, the application is built by an engineering team that does not.

The result is a brand that signals inclusion at the front door and throws up barriers once you are inside. Disabled users learn quickly to distrust the signal. They expect the gap, they plan for it, and they discount the marketing accordingly. The organizations that maintain this gap the longest are usually the ones most surprised when a complaint or lawsuit arrives, because they point to their accessible home page as evidence of commitment and miss that the home page is not where their users get stuck.

## The Accessible Web App, the Inaccessible PDF

The interface is clean. The user navigates to the resource they need. The resource is a scanned image of a document with no OCR, tags, reading order, or alternative format link. Everything that came before was a setup for a dead end. The user did the work to get to the document, and the document was what mattered.

This pattern is endemic in government and education, where decades of policy memos, board packets, meeting minutes, forms, and reports were produced as print artifacts, scanned, and posted without remediation. The web wrapper might be accessible, but that is no guarantee that the content the wrapper is meant to deliver is. Title II compliance work will surface this pattern at scale because the content behind otherwise accessible portals contains the largest remediation backlogs.

## The Accessible Site This Quarter, the Inaccessible Site Next Quarter

A redesign ships. The new framework was chosen for developer velocity, and the new component library was selected for visual polish. Nobody on the implementation team has accessibility in their performance objectives. The fixes from the last audit are gone. The new components reintroduced old problems. Custom dropdowns lost keyboard support. The new icon system removed text labels. The carousel that was finally accessible is now a CSS scroll snap with no controls. Users who had learned to navigate the site are starting over, and the institutional memory of what was fixed and why has evaporated with the team that fixed it.

Accessibility is not a one-time project. Treating it like one guarantees regression on the next major update. The organizations that hold their gains are the ones that built accessibility into design systems, component libraries, definition of done, code review checklists, procurement contracts, and performance reviews. The organizations that did a one-time remediation and declared victory are the ones whose audits, two years later, look identical to their audits two years earlier.

## The Accessible Parent Site, the Inaccessible Third-Party Widget

The site was built carefully. Then a chat widget, a video player, a survey tool, a payment iframe, a cookie banner, an analytics overlay, a tour walkthrough, an accessibility overlay, or a customer feedback popup was dropped in, and it does not meet the same standard. Users blame the site, not the vendor, and they are not wrong. The site owner chose the vendor, signed the contract, agreed to the open-source use, and added the script tag.

This pattern is the easiest to fix in policy and the hardest to fix in practice. The fix for third-party widgets that are being procured is language requiring a current Accessibility Conformance Report, an annual update cadence, contractual remediation timelines, and the right to terminate for noncompliance. The fix for open source is to avoid using inaccessible open source products where the UI is exposed, unless you plan to fix it and, hopefully, contribute the fix back. The disconnect is that the people choosing widgets are usually marketers, support leads, and product managers who do not know what an ACR is, do not request one, and only discover the accessibility problem when a user complains or a complaint is filed. Closing this gap requires accessibility to be present in procurement, not just in development.

## The Accessible Content, the Inaccessible CAPTCHA

The user reads the article. They click subscribe. A visual puzzle stops them with no audio alternative, or an audio alternative that is unintelligible, or a "click all the buses" grid that times out before a magnification user can pan across it, or an invisible reCAPTCHA that flags the user as a bot because their assistive technology produces an unusual interaction pattern. Everything that came before is wasted. The user is locked out at the last step, and the lockout is invisible to the site owner because the analytics show a “subscribe button click” and not a “human blocked by anti-human gate” event. Every inaccessible CAPTCHA wastes at least 20 minutes of your disabled user’s time, and that might be enough to make them angry enough to look for a lawyer or think about filing a case on their own. CAPTCHA is the rare case where the accessibility problem is also a security, usability, and fraud problem. The vendors know it. The alternatives exist. The reason CAPTCHA persists in its inaccessible form is inertia, not necessity.

## What Partial Accessibility Tells the World

Here is the part that stings beyond the user experience. Partial accessibility signals to the world that you are aware of accessibility. You knew enough to label the home page hero. You knew enough to add skip links. You knew enough to remediate the flagship product. You knew enough to publish an accessibility statement. Which means the inaccessible parts are not an oversight; they are decisions arising from laziness or poor prioritization. These decisions make a silent declaration about which users the site owner cares about, and which they do not.

Plaintiffs’ attorneys know how to read that decision. The complaint will cite your accessibility statement as evidence that you were on notice. It will cite your remediated pages as evidence that you had the capacity to comply. It will cite your unremediated pages as evidence of a deliberate choice to leave certain users behind. The Department of Justice’s Title II rulemaking record is full of comments from disabled users describing exactly this pattern, and the regulatory text reflects that.

Regulators know how to read it. The DOJ Title II rule does not reward partial compliance. WCAG 2.1 Level AA is the standard, and it applies to web content and mobile applications (plural), including documents and social media. Pointing at the parts you fixed does not excuse the parts you did not.

Disabled users can read it, too, because they have been reading this story of incompleteness their entire lives. The user who cannot complete a task on your site is not confused about whether you tried. They are clear-eyed about the fact that you tried in some places and did not try in others, and they are making a judgment about your organization based on where you drew the line.

## What to Do Instead

If you are going to do accessibility, do it across the whole experience. Every page, every state, every device, every vendor, every release.

**Build accessibility into the design system, not on top of it.** A component that is accessible in the library is accessible everywhere it is used. A component that is fixed in one feature and broken in another guarantees the inconsistency you are trying to avoid.

**Test the edge conditions, not just the happy path.** Errors, empty states, loading states, timeouts, permission denials, and edge cases need the same assistive technology testing as the success paths.

**Test on both mobile and desktop.** With actual screen readers, magnifiers, switches, voice control, and accessibility settings on mobile devices. Automated testing is a starting point, not a finish line.

**Hold third parties to the same standard you hold yourself.** Require ACRs at procurement, write remediation timelines into contracts, and walk away and keep looking if vendors refuse.

**Treat accessibility regressions as defects.** If a release reintroduces an accessibility problem that a previous release fixed, it is a bug. It should be prioritized just as a serious functional error, because it is a functional bug to a user with a disability.

**Plan for parity, not for press releases.** The goal is not to make parts accessible. The goal is to have an accessible experience.

Anything less is a trap dressed up as progress, and the people you trap are the people you claimed you were trying to include.

“Progress over perfection” has become the accessibility industry’s permission slip for stopping before they are finished. This phrase is repeated in conference talks, leadership memos, vendor pitches, and internal justifications organizations give themselves when a remediation budget runs out. The phrase sounds humble and pragmatic, and it is neither. It reframes incomplete work as a virtue and treats the users still locked out as an acceptable cost of being reasonable.

The honest framing is progress _toward_ perfection. No organization will ever reach the perfect state. WCAG will keep evolving; your products will keep changing; new content will keep being authored; new vendors will keep being onboarded; and new disabilities and assistive technologies will keep entering the conversation. Perfection is not a destination; it is a direction. The direction matters, and the commitment to keep moving in that direction is what separates organizations that are genuinely trying from organizations that have decided their current level of exclusion is good enough. Progress toward perfection means you do not stop when the easy wins are done. You do not declare victory at AA on the home page or when all your images have alt text, but reflow doesn’t work. You do not treat the next inaccessible component, the next inaccessible PDF, the next inaccessible vendor as someone else’s problem or next year’s problem. You keep going, because the people you are doing this for don’t get to stop being disabled when your roadmap runs out. They should not have to wait for another budget cycle to use your services.

The goal is not to be perfect. The goal is never to abandon the goal of perfection.