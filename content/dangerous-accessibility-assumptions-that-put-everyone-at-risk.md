---
title: Dangerous Accessibility Assumptions That Put Everyone at Risk
description: Dangerous Accessibility Assumptions That Put Everyone at Risk
url: https://buttondown.com/access-ability/archive/dangerous-accessibility-assumptions-that-put/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2025-05-19T03:59:30.631Z
tags:
  - accessibility
sourcePublishDate: 2025-04-23T13:17:36.000Z
---

Three strips of intersecting yellow and black “warning” tape.
Accessibility isn’t an extra feature or a nice-to-have add-on. It’s a foundational requirement for digital equity. Yet, across almost all industries and sectors, product owners make harmful assumptions that delay the implementation of accessibility correctly.  The issue these product owners don’t realize is that they haven’t just harmed and excluded people with disabilities, they’ve put their own companies at risk of expensive lawsuits.  You might be thinking that with the current US administration, the risk of getting into trouble is lower.  The number of accessibility lawsuits filed in the first quarter of 2025 was at an all-time high.
Let’s break down some of the most dangerous assumptions people make about accessibility and how each one causes harm.
“We made it accessible already.”
This might be the most common and damaging assumption. This statement is usually uttered after pointing to an accessibility statement or ACR/VPAT.
Reality?  Accessibility isn’t a permanent state. It is a program, not a one-time project.  A platform that passed an audit two years ago with no further efforts will be riddled with issues introduced by updates, regressions, new features, or changes in user flows.
This assumption ignores the lived experience of disabled people. Something can’t be declared “accessible” based on an aspirational statement or a past audit. The only way to know if something is accessible is through continuous testing with assistive technologies executed by people who rely on them.
If you’re not checking your work regularly and adjusting it based on feedback from people with disabilities, it’s not accessible. Accessibility comes from intentional acts, not by accident.
“Accessibility can be fixed with an app.”
Overlay tools promise the impossible. Flashy marketing claims they can add accessibility to your site with just a few lines of code and an indefinite monthly payment. What overlays actually do is add another layer of complexity to your product, often interfering with native browser behavior and assistive technology. 
Reality?  Overlays don’t fix inaccessible code. At best, they mask it. More commonly, they often make things worse by hijacking keyboard navigation and breaking screen reader functionality.  One overlay company was fined by the FTC for deceptive claims that its product could make websites compliant with WCAG and for failing to disclose material connections to online reviewers.  But the two most telling statistics of overlay ineptitude are this:
1) In the first quarter of 2025, more than 28 % of the record-setting number of accessibility lawsuits were against companies using overlays.
2) Every single overlay company now has a manual accessibility auditing practice.  If overlays did what they claimed to do, why would this be needed?
Accessibility can’t be retroactively slapped on at the end of a software development project with a widget. It must be proactively part of the design and development process from day one. No app can fix bad development practices or a lack of understanding of inclusive design.
“The browser will take care of accessibility.”
Browser plugins have a place in accessibility, but they can’t be relied on exclusively.  They don’t even begin to capture the full scope of accessibility. They can't understand meaning, context, or whether the site functions with actual assistive technology.
These tools will never catch things like missing focus indicators, inappropriate use of ARIA, poor color contrast in dynamic states, or inaccessible custom components. Plugins cannot simulate the experience of navigating content with a screen reader, voice control software, or switch device.
Relying solely on browser plugins tells disabled users their experience doesn’t matter unless a tool can quantify it.
“Accessibility is a project.”
Accessibility isn’t a feature to be shipped. It’s not something a team can “own” and then move on from. Thinking about accessibility as a product implies there’s a finish line, or that it’s something that gets built once and forgotten.
Good accessibility is about processes and culture changes that touch every part of the organization, including design, development, testing, procurement, legal, and customer support. If any of those areas break down, accessibility does too.
Organizations that treat accessibility like a deliverable instead of a shared responsibility will miss the mark. It’s not a handoff. It’s a mindset.  Accessibility is everyone’s job.
“We use an accessible design system, so our product must be accessible.”
Design systems, component libraries, and linting tools can help reduce accessibility errors. They catch some accessibility issues before the code is released. But they’re not a substitute for manual testing or human judgment.  An accessible design system is only half of the accessibility battle.  The accessible design system needs to be implemented in a way that is accessible.
Design systems are only as good as the people maintaining them. They can become outdated. or misused. Often, they  don’t account for the complexity of real user interactions, like dynamic content, user-generated input, or third-party integrations.  Many are open-source, so they can be more like college projects than something ready for commercial implementation.
Accessible design systems are a starting point, but they aren’t the finish line. You still need human testing. You still need QA teams who know accessibility. And you absolutely still need feedback from people with disabilities.
“We don’t have any disabled users.”
Yes, you do. You just don’t know it. Roughly 1 in 4 adults in the United States has a disability. That number includes people with disabilities affecting mobility, cognition, hearing, or vision. It also includes people with temporary or situational limitations.
If no customer has identified themselves as disabled, that doesn’t mean they aren't there. It means they either weren’t comfortable disclosing their status, that they got someone to help them to work around your inaccessibility, or they tried to use your site and gave up. Inaccessible systems push customers and potential customers away.
Assuming your audience doesn’t include disabled people erases their presence and excuses bad design. This mindset guarantees exclusion.
“We can add on accessibility at the end, if we have time.”
Accessibility isn’t something you tack on at the end of a sprint or slap into a backlog. That’s how things get expensive, delayed, and frustrating.  Continually kicking the accessibility can down the road is how expensive litigation gets filed, and I speak from personal experience here.
When you wait to build accessibility until after the design is locked or the code is complete, you're building workarounds, not access. Retrofitting accessibility is harder, more expensive, and often less effective.
The cheapest bug to fix is the one that never gets introduced in the first place.  It is vastly easier to prevent bugs than fix them.  Accessibility should be included in the earliest conversations when choosing platforms, building wireframes, writing user stories, and planning release timelines.  Accessibility requires its own QA effort, separate from functional, performance, and security testing timelines.
If your roadmap treats accessibility as a future feature instead of a core requirement, you have effectively made the decision to exclude people with disabilities as customers.
“Automated accessibility testing is sufficient.”
This belief leads to incomplete and inaccurate results. Free automated accessibility tools only detect about 30  percent of accessibility barriers.  Those that you must pay for might reach 40%.  Those numbers are  under ideal conditions. Automated testing tools can detect missing alt text, color contrast violations, and some instances of ARIA misuse. But they miss critical issues, such as keyboard traps, broken screen reader interactions, confusing focus order, and whether the content makes sense to someone using assistive technology. Relying on automation alone sends the message that accessibility is just a technical checklist, rather than a crucial part of the user experience. People interact with your product, not your code. Real accessibility requires human judgment, manual testing, and lived experience — none of which automated tools can provide.
“Making the product accessible is enough.”
People don’t buy products or services; they buy experiences. Accessibility shouldn’t stop at the product.  Accessibility must extend to documentation, support channels, training materials, third-party code, social media, and every single point of interaction a user has. I’ve seen organizations spend months fixing their app, only to leave out critical elements like accessible onboarding or an inclusive customer service process. If someone can use your product but can’t activate it, get help with it, or understand how to use it because the help documentation is in an inaccessible PDF, then the work isn’t done. Accessibility has to be systemic. Making the product accessible alone is not enough.  Accessibility needs to be baked into the organization’s entire approach to communication, service, and engagement.
How to Get Past These Dangerous Accessibility Assumptions
Fixing these assumptions starts with education and accountability.

Talk about accessibility early and often

Combine forces with your disability ERG, if you have one

Give every role on the team specific responsibilities related to inclusion

Include disabled people in usability testing

Audit manually using assistive technology, not just with tools

Don’t rely on compliance documents to tell the whole story

Train your teams on how to build, test, and maintain accessible systems

Most of all, listen. Disabled users are not an edge case. They are your users, customers, employees, and stakeholders.
The most dangerous thing you can assume is that this work isn’t urgent. Because when accessibility is missing, people get shut out. And that’s never acceptable.