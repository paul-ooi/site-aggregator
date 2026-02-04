---
title: What Continuous Improvement Model is Best for Accessibility?
description: Most organizations start their accessibility journey in reactive mode. A complaint arrives. A defect ticket opens. A fix ships under pressure. The immediate barrier may disappear, yet the system that 
url: https://buttondown.com/access-ability/archive/what-continuous-improvement-model-is-best-for/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-12-17T11:05:04.000Z
author: 
contentHash: 2f6c70d59b9a39deb553fbef8834fa7a
---

![Hand holding sharpie with the following message “Be better than you were yesterday”](https://assets.buttondown.email/images/55ce6b4c-28f8-45b3-8d56-54a0ddfd9cf3.jpeg?w=960&fit=max)

*Hand holding sharpie with the following message “Be better than you were yesterday”*

Most organizations start their accessibility journey in reactive mode. A complaint arrives. A defect ticket opens. A fix ships under pressure. The immediate barrier may disappear, yet the system that created it stays intact. Over time, the same issues resurface across new features, releases, and teams. Accessibility becomes a recurring cleanup task instead of a shared responsibility.

Proactive accessibility takes a different stance. It assumes barriers will emerge and puts structures in place to surface them early, learn from them, and reduce the chance of repetition. This shift matters most for organizations new to accessibility. Early choices shape whether accessibility becomes a sustainable practice or an endless backlog of fixes.

Continuous improvement models provide the scaffolding for that shift. They replace one-time remediation with repeatable learning. Among these models, the Plan-Do-Check-Act approach offers a simple starting point. PDCA frames accessibility as an ongoing process that improves through planning, experimentation, reflection, and adjustment, rather than through perfection in the first release.

This article explores how PDCA, along with DMAIC and Kaizen, supports proactive accessibility. It focuses on when each model fits best, where each falls short, and how organizations can move from reactive responses toward an accessibility program that improves with every cycle.

**PDCA**  
PDCA is a four-step cycle: Plan (set goals and outline changes), Do (implement the change), Check (assess outcomes), Act (standardize or adjust before repeating). It traces its roots to quality-control work by Walter A. Shewhart and was later popularized by W. Edwards Deming in post-WWII Japan.

This model works exceptionally well when teams need an accessible, repeatable structure to guide iterative improvements. It supports small experiments and incremental refinements, rather than forcing perfection on the first try. That flexibility can make accessibility work manageable, especially in agile or fast-moving product teams. On the downside, PDCA can lead to superficial changes if teams focus on cycles and artifacts rather than on root causes and user experience. Without careful reflection during “Check” and “Act,” underlying design or process problems may slip through, or issues may recur. Checking a box in a plan does not mean a person with a disability can complete a task without barriers. Additionally, it defers the “action” until the end, which can cause significant delays if a person with a disability encounters an issue and must contact customer support.

**DMAIC**

DMAIC stands for Define, Measure, Analyze, Improve, Control. It derives from the broader Lean Six Sigma methods and is also commonly used for process improvement outside manufacturing.

-   **Define** clarifies the problem, stakeholders, and goals.
    
-   **Measure** captures data on current performance and the scope of defects.
    
-   **Analyze** finds root causes using data and structured problem-solving tools.
    
-   **Improve** implements changes addressing root causes.
    
-   **Control** builds checks to ensure improvements persist over time rather than regressing.
    

DMAIC is well-suited for addressing recurring accessibility issues, complex systems, or widespread defects. Because it focuses on data, root-cause analysis, and preventive measures, DMAIC helps prevent recurring problems more reliably than quick fixes alone. Its limitation is that it can feel heavier or slower than simpler cycles. If accessibility work occurs at a rapid release pace, such as that in Software as a Service (SaaS), DMAIC might add overhead that some teams resist. It can also be too cumbersome for resolving customer-reported issues.

**Kaizen**  
Kaizen is a philosophy rather than a strict process, focused on cultivating a habit of continuous, incremental improvement. It encourages everyone in an organization to contribute small changes, gradually enhancing products, workflows, and culture. The strength of Kaizen lies in its low barrier to action and widespread ownership: improvements don’t need major project plans or large budgets. Over time, many small changes build up into significant accessibility gains. However, without coordination or standards, Kaizen-style improvements may stay tactical or inconsistent. Some fixes might overlook deeper systemic problems.

## How the Models Behave in Two Accessibility Scenarios

### Scenario A: Customer reports an accessibility bug

**What happened:** A user reports that a “Submit” button on a checkout page isn’t readable by screen readers and blocks them from completing a purchase.

-   **PDCA**: The team could plan a fix, implement it quickly, test screen reader behavior, and deploy it. This gives a rapid patch. The problem is solved, but only for that page and that instance. If the underlying issue (for example, a widely used, flawed UI component) isn’t addressed, similar bugs may emerge on other pages.
    
-   **DMAIC**: A better approach is to have the team define the problem and scope, such as which pages use the same button component. Then, measure how many other pages share it; analyze the root cause (e.g., custom button markup or missing ARIA attributes); improve the shared component or design system; and finally add automated accessibility checks or code-review rules (controls) to prevent recurrence. This systematic approach reduces the risk of repeated bugs.
    
-   **Kaizen**: Complementary to one of the other models, but insufficient alone. Developers or designers might adopt minor fixes or add a habit of checking accessibility on every component. But without strong standards or controls, it’s easy for oversights to slip through, especially as projects grow.
    

**Best approach:** DMAIC. Its structured, data-informed process and preventive controls help ensure the bug is not only fixed but also doesn’t recur in other parts of the system.

### Scenario B: Rolling out a new feature that you want to be accessible from the outset

**What happened:** The team builds a new “product comparison” feature in an e-commerce website. They aim for good accessibility from the start, including keyboard navigation, clear labels, sufficient color contrast, and support for screen readers.

-   **PDCA**: This works well. The team plans accessibility requirements, builds the feature, tests with assistive technologies and keyboard navigation, and refines it before release. After launch, they monitor feedback and iterate in future cycles. This balances speed and attention to accessibility without heavy overhead.
    
-   **DMAIC**: Can work, but is often overkill. Because this is a new feature, not a recurring bug, many measurement and analysis steps may not add value; instead, DMAIC can slow down the release with excessive process.
    
-   **Kaizen**: Useful for incremental refinements post-launch. For example, minor tweaks to improve usability, reorder focus, refine alt text, or address low-contrast issues.
    

**Best approach:** PDCA, with Kaizen added in the post-launch phase. Use PDCA to deliver a functional, accessible version quickly and iterate on it. Then continue using Kaizen to improve and refine the user experience continuously.

## A Unified Hybrid Workflow for Accessibility

Rather than pick just one model, teams often succeed by combining them. Here’s a hybrid workflow that mixes PDCA, DMAIC, and Kaizen to get both agility and reliability

-   Use **PDCA** for new features and accessibility requirements during releases. It offers structure and flexibility for rapid, incremental improvements.
    
-   When a bug recurs or affects multiple components of a product, trigger **DMAIC**. Use it to root out systemic issues, redesign shared components or processes, and apply controls to prevent regressions.
    
-   Maintain a **Kaizen mindset** throughout. Encourage all team members to suggest or make minor accessibility improvements whenever possible throughout the Software Development Life Cycle.
    

This hybrid approach provides the speed needed for product development and the depth required for long-term stability. Accessibility becomes part of everyday workflows instead of a special project. Over time, you build a resilient, inclusive product that improves release after release.