---
title: Getting Developers to Care about Accessibility: Carrots and Sticks
description: Most developers aren't intentionally hostile to accessibility. They just weren’t taught about its importance. Plus, change is hard. Building accessibility into an inaccessible organization requires mo
url: https://buttondown.com/access-ability/archive/getting-developers-to-care-about-accessibility/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-04-01T10:11:23.456Z
tags:
  - accessibility
sourcePublishDate: 2026-03-19T16:57:32.000Z
author: 
contentHash: d5bff4e6f7e60101a429f90602a771f6
---

![Two technology professionals standing at a large monitor looking at user journeys](https://assets.buttondown.email/images/a451a4ec-7f6a-4ef4-bdce-04145db9f888.jpeg?w=960&fit=max)

*Two technology professionals standing at a large monitor, looking at user journeys*

Most developers aren't intentionally hostile to accessibility. They just weren’t taught about its importance. Plus, change is hard. Building accessibility into an inaccessible organization requires more than a style guide or a WCAG checklist. Successful change requires understanding what actually motivates people, and applying the right pressure in the right places.

Accessibility often feels like the plumbing in a house. No one thinks about it until something goes wrong, and then it becomes a very expensive emergency. Accessibility rarely trends on Hacker News or Stack Overflow. Most developers have never watched a screen reader user navigate their product. This creates an environment where accessibility falls to the bottom of every sprint, every quarter, every roadmap, and is the first thing to get cut when schedules start to creep. This doesn’t happen out of malice, but rather from the ordinary prioritization decisions made by people who are, frankly, not invested in the topic.

To change this, accessibility and product leaders need a mix of genuine incentives that make accessibility feel rewarding, and structural consequences that make ignoring it costly. In other words: carrots and sticks, applied thoughtfully.

**🥕  The Carrots -** **Make Accessibility Feel Like a Win**

Motivation follows reward. If accessibility work is invisible, unrecognized, and disconnected from the things developers care about, no amount of pleading will change behavior. Here's how to make it stick.

1.  **Connect accessibility to craft**
    

Most good developers care deeply about code quality. Frame accessibility as a marker of professional excellence. Creating semantic HTML, thoughtful ARIA, and keyboard flows that actually work is something to take pride in. Clean, accessible code is well-structured code. A developer who builds accessible interfaces is more skilled. Say this out loud. Repeat it often. A developer who creates accessible interfaces isn't doing extra work; they're doing the work the right way. The framing is really important.

2.  **Make the disabled users real**
    

Abstract guidelines don't move people; real users do. Bring in someone who relies on a screen reader to do a live session with your team. Bring in someone with quadraplegia and watch them navigate your product with an alternative keyboard. If you can’t bring them in, show videos like the Apple assistive technology videos on YouTube. This single exercise has converted more skeptics than any compliance training ever has. When developers see the gap between what they built and what a real user experiences, something shifts. Seeing people struggle with products and discuss the impact that has on their lives creates empathy.

3.  **Celebrate accessibility wins publicly**
    

Name the person who fixed the focus trap, who added the proper landmark regions, and who pushed back on a design that failed contrast ratios. Recognition is cheap and extraordinarily effective. If the only work that gets celebrated is shipped features, that's all anyone will prioritize. Do this in every communications channel you have: sprint reviews, Slack, and teams / all hands meetings at a minimum

4.  **Integrate accessibility into developer experience and onboarding**
    

Accessibility is almost always overlooked in developer onboarding. If you set the expectation at the beginning of a developer’s tenure that everything they develop must be accessible, it’s more likely to happen. Otherwise, developers do what's easy. If your linting pipeline surfaces accessibility violations the same way it surfaces unused variables, there is no longer a barrier or extra step to take. Add your favorite API-enabled automated tester to your CI pipeline. Make the feedback loop instant by bouncing check-ins that fail automated tests. When fixing an accessibility issue is as easy as fixing a lint warning, many developers will simply fix it.

5.  **Tie accessibility to things developers already want**
    

Accessibility improvements frequently deliver performance wins, better SEO, cleaner mobile experiences, and more resilient code. When someone asks you why they should spend time on this, don't lead with ethics. Lead with the concrete benefits that land in their world. Semantic HTML is faster to parse. Proper heading hierarchy helps SEO. Good alt text improves search indexing. Let accessibility be the tide that raises other ships. Be like Apple, which calculates up to 10% of bonuses based on how well the staff member performs in accessibility.

**🪄  The Sticks - Refuse to Ignore** **Inaccessibility**

Carrots alone are not enough. When there are no consequences for skipping accessibility work, the path of least resistance always wins. Consequences don't have to be punitive, but they do have to be tangible.

1.  **Fail the build**
    

If your CI pipeline surfaces accessibility violations without blocking deployment, developers will learn to ignore them, just as they ignore flaky test warnings. Make critical violations a build failure. Start with a small set of high-severity rules, such as missing image alt text, form labels without inputs, and sufficient color contrast, and expand from there. The signal needs teeth.

2.  **Include accessibility in code review**
    

If accessibility isn't on your code review checklist, it's optional. Add it. Explicitly. One-line additions like "Have you tested keyboard navigation? and “Does this work with a screen reader?" changes the social contract of the review process. It tells every developer that how accessible their work is will be seen and evaluated by peers, not just tools.

3.  **Track progress publicly**
    

I don’t love accessibility grades as I have discussed in other articles. I believe they are useful for two things, and two things only: 1) Trending, and 2) Gamification. An accessibility score on a public dashboard visible to engineering leadership can significantly influence conversation dynamics around accessibility. When you post accessibility grades saying one team is doing better than another, then the pressure is on the team lagging behind to do better. That has to be handled extremely carefully, as it can create resentment about accessibility if the developers are pressured to do this work without the appropriate resources or time.

4.  **Keep track of regressions**
    

If someone makes the same mistake twice, send them a video snippet on that particular topic for retraining. Don’t fall into the trap of thinking that the grade tells you everything about the product. But if you implement it carefully with a specific focus on training and gamification, accessibility dashboards can be useful. Keep track of how many bug fixes you fail - that should go down over time. Visibility creates accountability without requiring a confrontation.

5.  **Make the risk tangible**
    

Web accessibility lawsuits have increased dramatically over the past decade. Businesses have faced significant settlements over inaccessible websites. Your legal team probably cares about this more than your developers do, so bring them into the conversation. A fifteen-minute briefing from counsel about litigation exposure lands differently than an engineering manager saying, “We should do better." The same goes for sales when they discuss the opportunities that cannot be bid on because an ACR/VPAT is the price of admission. Use the full weight of institutional concern.

6.  **Gate releases on accessibility milestones**
    

For new product areas or major redesigns, establish an accessibility baseline that must be met before launch. This moves accessibility into the realm of regulatory compliance, just like security or privacy. It promotes accessibility to the position of a non-negotiable property of shippable software. When a team knows that a launch is contingent on meeting a baseline, that work gets scheduled, resourced, and done.

## The Harder Work: Changing Corporate Culture

Carrots and sticks are tactical. The underlying goal is a culture where accessibility is simply how your team builds software. Accessibility should not be a special effort, or a compliance exercise, but a standard dimension of quality. Culture change takes time.

It starts with leadership using the language consistently. When engineering managers and senior developers talk about a well-built feature, accessibility should be part of that description. When they talk about technical debt, inaccessible code should be on the list. Language shapes norms over time. Staff cares about what their leaders care about. If their leaders make public statements about their commitment to accessibility, developers notice. They also notice silence.

Meeting developers where they are is important. Many developers don’t have firsthand experience with disability. Some come from environments where it is unthinkable that anyone who was blind would want to do something on the web independently or hold a job other than begging. They don’t have the context to understand what's at stake when accessibility is skipped or forgotten. Assume good faith and give people education and a chance to change before reaching for the sticks.

That being said, education without accountability is aspiration, not engineering. At some point, the organization has to put its foot down and state that accessible software is expected, not optional. The most successful teams combine a genuine culture of care with structural expectations that make the default behavior accessible.

### A Note on Shared Components

One of the highest-leverage investments any team can make is to build accessibility into the design system and component library. If the button component handles focus management correctly, every team using that button gets that for free. If your modal component manages ARIA roles and keyboard traps by default, developers don't need to know the intricacies; they only need to know enough to implement the component correctly. Accessible defaults multiply your impact across the entire organization. If your organization is not using an accessible design system or component library, you need to ask yourself why the hell not.

**Final Thoughts**

Developers who don't think about accessibility aren't bad people. They're largely operating in an environment where they didn’t learn about the importance of accessibility in their education and don’t have the knowledge, tools, or motivation to write accessible code. The only way to make this work is to tilt that windmill and change the system. Make accessible work visible, celebrated, and structurally required. Give people the context to care, then make caring the path of least resistance.

A billion people live with some form of disability. Your product is making a choice about whether they're included. If you choose not to decide, that is also a choice.