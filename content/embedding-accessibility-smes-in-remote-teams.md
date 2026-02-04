---
title: Embedding Accessibility SMEs in Remote Teams
description: The longer I work in accessibility, the more convinced I become that organizational structure is what determines whether accessibility efforts succeed or stall. Intent is merely a small component of s
url: https://buttondown.com/access-ability/archive/embedding-accessibility-smes-in-remote-teams/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-07-23T13:07:37.000Z
author: 
contentHash: e79b871676a556a3d16010cded011f6b
---

![Four irregularlyshaped pieces of amber containing parts of bugs](https://assets.buttondown.email/images/18f38224-237a-435e-af74-7424a1d9d238.png?w=960&fit=max)

*Four irregularly-shaped pieces of amber containing parts of bugs.*

The longer I work in accessibility, the more convinced I become that organizational structure is what determines whether accessibility efforts succeed or stall. Intent is merely a small component of success. Companies love centralizing accessibility teams, until time zones, handoffs, and scale become obstacles. That’s where embedding comes in.

Despite the increasing prevalence of embedding accessibility employees on other teams, I rarely see practical guidance on how to effectively embed accessibility resources, including what issues embedding can address, when to utilize embedded resources, and how to do it without overburdening individuals or diluting the strategy. This article examines the practical logistics of embedded accessibility roles and how to effectively integrate them into your organization _without_ compromising your long-term maturity goals.

# **What does Embedded mean in Tech?**

Being “embedded” in tech is not that far off in principle from reporters being embedded with armed forces divisions, albeit in a far less dangerous setting. It means that one or more specialty resources operate with and support a particular organization's silo or product team. This is usually, but not always, software development. More on that later. These specialty resources become full-time cross-functional resources. They still report to and are paid by the accessibility budget, but receive their day-to-day instructions from the organization to which they’ve been assigned.

Another type of embedded accessibility resource is colloquially known as an “accessibility champion.” These typically home-grown individuals do not report back to the central accessibility organization. Instead, they are members of and paid by non-accessibility teams and have an interest in making things accessible. While Accessibility Champions are undoubtedly important, the primary focus of this article is on embedding FTE accessibility headcount into other parts of the organization and why you might want to consider that strategy.

# **1\. Benefits**

One of the most significant barriers facing all managers running a tech department in a large company is the problems caused by operating in different time zones. Frequently, the designers and developers that an accessibility manager needs to support are not in a timezone compatible with where the accessibility resources are located. Some examples I’ve faced include California and Bangalore (and also Gothenburg, on the same project), as well as California and Romania, and Chicago/London/Chennai.

Any time zone difference of 8 hours or more will be highly inconvenient for someone every time meetings are required, since no part of the workday between the two locations overlaps. It makes holding daily scrum calls a nightmare, which can impact being fully agile. It can also contribute to project delays, as a problem or question arising in India at the beginning of one day may not be resolved by US resources until the beginning of the next business day in India. And that’s assuming that enough information was sent with the query in the first place, and the response isn’t something along the lines of “Can you send me a video of that, please?”

Many companies use vendors and subcontractors rather than employees for some or all of their development efforts. A perfectly acceptable initial reaction might be “why should I pay for embedding an accessibility resource with a vendor, it’s their responsibility to deliver something accessible” (you did address this in the contract, right?). However, in the end, your organization may be reducing the risk of cost and schedule overruns by identifying, paying, and embedding an accessibility SME with a vendor for a specific period of time (12–18 months) with the understanding that the vendor may hire or contract with that resource directly when this time period is over.

By embedding accessibility resources in a remote team or location, the development team has someone to rely on for “the final word” on how something related to accessibility is to be accomplished.

Everyone must be reading from the same page for this to work. Having a single source of truth that defines guidelines around minimum touch-target sizes and the acceptable use of italics (just two small examples) in the form of a style guide or knowledge base is essential for successfully embedding accessibility resources in a remote team. WCAG by itself is not sufficient because:

a) Some of WCAG is up for interpretation — what does “incidental text” really mean, for example, and

b) Most good accessibility managers have a list of best practices they want implemented in addition to the minimums required in WCAG.

The embedded accessibility SME will also help the team they are embedded with grow their accessibility knowledge with both informal information exchange and formal training. Finally, depending on where the accessibility team and the team being embedded with are located, embedding accessibility team members may generate quite a financial savings. The cost of an accessibility SME in San Francisco is 500 % higher than the cost of an equally experienced SME in the Philippines, India, or Romania. Even experts in more expensive Australia and the UK are only about half the cost of the more expensive US cities. Development managers enjoy the financial benefits of not having to pay for the embedded accessibility expert. My recommendation is to limit the duration upfront. Twelve to 24 months is a reasonable timeframe. Any smaller than 12 months, and the embedded expert won’t have time to get integrated into the new org. Any period longer than two years may present a budgeting problem for the accessibility team and could potentially be a tax issue if the expert is a contractor based in the US.

## 2\. Drawbacks

Embedding accessibility resources is often the right move—but it’s not without challenges. Here are some downsides that can be mitigated through proper management planning:

### Isolation of Accessibility Knowledge

**Downside**_:_ Knowledge stays siloed in individual teams instead of being shared organization-wide.  
**Mitigation**_:_ Establish formal communication structures, including monthly syncs, shared documentation, and organization-wide accessibility communities of practice.

### Misalignment with Legal and Compliance Goals

**Downside**_:_ Embedded specialists might focus on technical fixes and be less experienced in legal risk or policy, especially if they are in a country other than where the headquarters is located.  
**Mitigation**_:_ Give accessibility leads access to legal and compliance updates. Collaborate with the centralized compliance team to create shared goals.

### Risk of Burnout for the Embedded Resource

**Downside**_:_ One person can end up being "the accessibility person" for all things, all the time, for the team they are embedded on.  
**Mitigation**_:_ Clarify role boundaries, assign backup support, and provide mental health support and workload management. Ensure that the development managers understand that the embedded resource is to help them improve their accessibility maturity.

### Reduced Influence Without Executive Backing

**Downside**_:_ Embedded resources may not have the authority to influence roadmap or design decisions.  
**Mitigation**_:_ Tie accessibility metrics for embedded resources to leadership-level KPIs. Ensure that product owners understand that accessibility requirements are a business priority.

### Lack of Consistent Metrics or Tracking

**Downside**_:_ Without shared metrics, it's challenging to determine the effectiveness of embedded work.  
**Mitigation**_:_ Use a central reporting dashboard. Set team-level accessibility OKRs that roll up into department goals. Track objective metrics like the introduction of new bugs, the time to fix bugs once identified, and the fix rejection rate. All of these will hopefully consistently drop over time.

# **Final Thoughts**

Embedding accessibility resources into product teams can accelerate progress when it’s done intentionally. It accommodates time zones, fosters local trust, enhances day-to-day access to expertise, and can lead to developers increasing their accessibility maturity. However, embedding only works when it’s part of a larger accessibility strategy, not a workaround for organizational gaps.

Assigning an SME to a product team won’t magically increase accessibility maturity unless there’s a clear scope, ongoing support, and alignment with centralized goals. Successful embedding requires training, documentation, metrics, and strong ties back to legal, compliance, and design standards. Without these supportive processes and resources, embedded resources become a patch, not a solution.

Don’t treat embedded roles as a fix-it-and-forget-it solution. Treat them as a way to shift accessibility left, which is closer to where decisions are made and code is written. Then give them what they need to succeed.

[Subscribe now](https://accessability.substack.com/subscribe?utm_source=access-ability&utm_medium=email&utm_campaign=embedding-accessibility-smes-in-remote-teams)