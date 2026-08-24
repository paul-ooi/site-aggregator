---
title: Bend, Do Not Break: Building Resilient Accessibility Programs
description: A passing audit measures a system on its best day, in a stable environment, with the people who built it still in the room.
url: https://buttondown.com/access-ability/archive/bend-do-not-break-building-resilient/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-01T10:44:28.599Z
tags:
  - accessibility
sourcePublishDate: 2026-07-29T14:31:18.000Z
author: 
contentHash: 4a904b629fac59d50e0c59ac5c9556f9
---

![AI generated image of tree that has grown sideways because of the wind](https://assets.buttondown.email/images/56a78599-651f-455d-9c3b-4de802e8cc4c.jpeg?w=960&fit=max)

*AI generated image of tree that has grown sideways because of the wind*

A passing audit measures a system on its best day, in a stable environment, with the people who built it still in the room.

None of those conditions last.

Accessibility resilience parallels general resilience engineering: the capacity of a system to maintain its accessibility under stress, absorb change without degradation, and recover quickly when things go sideways.

Conformance is a point-in-time measurement.

Resilience is what determines whether that measurement still means anything eighteen months later.

A passing audit tells you a product met the criteria on the day it was tested. It says nothing about what happens after the champion leaves, the CMS migrates, the framework updates, or a vibe coder starts maintaining your components. Those are the events that determine whether accessibility survives. None of these appear in your ACR/VPAT. What follows separates resilience into the dimensions that actually determine survival.

## **Personnel resilience**

Documented policies and procedures, and the knowledge bases that house them, are what allow a program to survive the departure of the one person who cared. The first question is whether that documentation exists. If accessibility knowledge lives in a single champion rather than in written process, role definitions, governance, and procurement language, the program has a single point of failure. Champions leave, get reorganized, or burn out. When they do, a program built around them collapses to whatever the surrounding structure can hold on its own, which is often nothing. What survives is what was written down and made findable, so the next person inherits a system rather than a blank page.

## **Technical resilience**

The second question is whether a CMS migration, framework upgrade, or design system refactor completely erases everything your program has accomplished. Accessibility built into shared components and enforced in continuous integration survives change because the fix lives in one place and the pipeline refuses to ship regressions. Accessibility patched page by page does not survive, because the next structural change reintroduces every defect the manual work removed. The difference is whether accessibility is a property of the system or a layer of corrections applied on top of it.

## **Artifact-level resilience**

This is a more technical aspect of accessibility resilience, which is whether your code gracefully degrades in the classic sense: does the page still work when JavaScript fails, CSS does not load, the network is slow, a person is using an old device or new assistive technology, the browser updates, the screen reader ships a new version? Progressive enhancement is resilience at the code layer. A page that depends on every asset loading perfectly and every script executing as intended fails the moment any one of those conditions breaks. Building from a working baseline outward, rather than assuming an ideal environment, helps keep the experience intact when conditions are less than ideal.

## **Regulatory resilience**

Programs anchored to WCAG conformance and user outcomes weather a shifted deadline, vacated rule, Section 504 ruling, or another country implementing a new accessibility law. Programs anchored to the minimum single-regulation demands get destabilized whenever that foundational regulation changes. When the legal target shifts, and they do shift often, a program built on outcomes keeps functioning because the outcomes did not change. A program built on the letter of a single rule has to be rebuilt around whatever replaces it. Yes, WCAG does update, but build your accessibility and definition-of-done policies around automatically adopting new versions within 18-24 months. Anchoring to what users actually need is the more stable foundation precisely because it is independent of any one regulation’s fate.

## **Detection and recovery**

This piece of accessibility resiliency borrows from incident response: what is your mean time to detect an accessibility regression and the mean time to remediate it? A program that finds defects in six days and fixes them in ten is more resilient than one that scores better on an annual audit but discovers nothing in between and ignores customer reports. The annual audit is a snapshot. What happens in the eleven months and three weeks between audits is where resilience is won or lost. A short detection-to-remediation cycle means defects live briefly, lowering the risk of litigation. A long cycle, or no cycle at all, means defects accumulate silently until the next scheduled look.

## **Fallback paths**

The final dimension is whether a person can still complete the task when the primary path breaks. Human-assisted channels, alternate formats, and an accommodations process are the resilience layer for the failures you did not catch. No detection system catches everything, and no code is defect-free. Fallback paths accept that reality and give the user a way through anyway. They are the difference between a broken feature that blocks someone entirely and one with a workaround while the fix is in progress.

# **The stressor that makes this urgent**

AI-generated code introduces inaccessible patterns faster than manual remediation can remove them. That single fact reframes the entire accessibility resilience challenge. When a human wrote every component, the rate of defect creation was bounded by how fast people could type. Vibe coding removes that boundary. Inaccessible markup, missing labels, broken focus management, and unlabeled controls now enter the codebase at machine speed.

Resilience, in that context, means the rate at which your controls catch defects has to exceed the rate at which generation creates them. If generation adds defects faster than detection and remediation remove them, your product’s accessibility will degrade continuously, no matter how good the previous audits looked. This is the inequality that matters: **catch rate must exceed creation rate**. It is a systems property, not an audit score, and it is the property most likely to be violated today.

# **Questions that measure resilience, not conformance**

If you want to know whether your program is resilient rather than merely conformant on paper, these are the questions to ask:

-   If the person most responsible for accessibility left tomorrow, what would still be in place? If the answer is process, governance, and procurement language, the program is resilient. If the answer is nothing, it is not.
    
-   What happens to accessibility the next time the codebase is migrated or refactored? If shared components and continuous integration carry it through, the program survives structural change. If it has to be redone, it does not.
    
-   How long does a regression live before someone notices? Measure the detection interval, not the audit calendar.
    
-   How long between noticing a defect and shipping the fix? A program with short, repeatable cycles is more resilient than one with a better annual number.
    
-   When the primary path fails, what does the user do instead? If there is a real fallback, the failures you missed are survivable. If there is not, every missed defect is a wall.
    
-   Is your rate of catching defects keeping pace with your rate of generating code? If code generation is in the pipeline and your controls have not scaled to match, your accessibility debt is growing, not shrinking.
    

# **The reframe**

Conformance answers whether a product met the criteria once. Resilience answers whether it will still meet them after the people, the platform, the regulations, and the tooling have all changed, because all of them will. The organizations that treat accessibility as a systems property, with resilience measured across personnel, technology, artifacts, regulation, detection, and fallback, are the ones whose passing audit still means something a year and a half from now. The rest are holding a snapshot of a system that has already moved on.