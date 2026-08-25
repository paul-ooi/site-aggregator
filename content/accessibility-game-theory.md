---
title: Accessibility Game Theory
description: Why do capable organizations keep buying and building inaccessible products, and how do you change the payoffs?
url: https://buttondown.com/access-ability/archive/accessibility-game-theory/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-25T07:17:38.451Z
tags:
  - accessibility
sourcePublishDate: 2026-08-22T16:08:06.000Z
author: 
contentHash: cb4891b0f4a8cbf8134200dba67ccbc4
---

![Woman intensely staring at a chessboard](https://assets.buttondown.email/images/ea44ef40-1490-40e4-8cb0-0f2d1f21e0ca.jpeg?w=960&fit=max)

*Woman intensely staring at a chessboard*

Why do capable organizations keep buying and building inaccessible products, and how do you change the payoffs?

Game theory studies situations where the best move for one party depends on what the other parties do. This includes competitive procurement, contract negotiation, and litigation. A substantial amount of accessibility strategy can be linked to game theory.

# Treating accessibility failure as a strategy problem

Accessibility failures are usually initially diagnosed as knowledge problems. The developer did not know about programmatic labels. The content author did not know that a heading is structure, not styling. The procurement officer did not know what an Accessibility Conformance Report should contain. The standard remedy for that diagnosis is training.

Training is necessary, but it doesn’t explain the pattern that shows up in almost every engagement. Organizations that have trained their staff three times over still buy software that fails a keyboard test in the first 60 seconds. Vendors that employ full-time accessibility specialists still ship releases with unlabeled controls. When a program stalls after everyone has been trained and everyone agrees in principle, the obstacle is usually structural, and the incentives deserve more attention than the curriculum does.

The frame is useful here because the current state of digital accessibility is stable across organizations that differ widely in size, budget, sector, and training history. That stability suggests that, for most of the people involved, no unilateral change in behavior improves their own position. Economists call that condition an equilibrium, and moving one requires changing the information available to the parties, the payoffs attached to their choices, the length of the relationship, or the set of participants at the table.

# The players and what they are actually paid to do

Before describing the games, you need to understand the real motivations of the players.

-   **Procurement officer.** Evaluated on cost, cycle time, defensibility of the award, and closing the contract. In most public entities, no part of the annual review depends on whether the purchased product is accessible.
    
-   **Department sponsor.** Needs a working tool by a date already announced to a governing board or school community. A finding that delays go-live costs this player even when the finding is correct.
    
-   **Vendor sales team.** Compensated for closing. Marketing, rather than engineering, frequently produces or edits the Accessibility Conformance Report, and it is treated as a document that must clear a checkbox in a solicitation.
    
-   **Vendor engineering.** Prioritizes the backlog by customer escalations and renewal risk. Accessibility defects reported by an entity that has already signed a multi-year contract sit below defects reported by an account that is threatening to leave.
    
-   **Accessibility coordinator.** Holds the responsibility, rarely holds the budget, and almost never holds a veto. This is a textbook principal-agent problem: the person accountable for the outcome does not control the decisions that produce it.
    
-   **The person who cannot use the product.** Bears the entire cost of the failure and is not present in the room where the decision is made. Their only move arrives after the harm, in the form of a complaint, a lawsuit, or giving up on the service.
    

The last item on that list is more important than it may seem at first glance. The party that absorbs the cost of an inaccessible product has no role in the decision that produces it, which is the standard definition of an externality. Externalities persist until something outside the transaction pushes the cost back onto the decision-makers.

# Game Theory Failure #1: The Procurement Dilemma

Consider a two-player game between a buyer and a vendor. The buyer can verify accessibility claims or accept them. The vendor can build accessibly or claim conformance without doing the work.

If both cooperate, the buyer gets a usable product, and the vendor gets a durable customer. That is the best joint outcome. As an added bonus, accessibility is also improved for the vendor’s next customer. However, the individual incentives point elsewhere.

-   **The buyer who verifies alone** spends money on testing, adds weeks to the timeline, and risks discovering something that forces a restart of a procurement the department already wanted finished. The reward for that diligence is friction with internal customers.
    
-   **The vendor who builds accessibly alone** carries higher engineering costs and prices higher than a competitor who asserts the same conformance on paper for less money. In a low-bid or best-value environment where the accessibility criterion is scored from self-reported documents, that vendor loses the award.
    

For each player, defection produces the better individual result no matter what the other player does. The predictable equilibrium is an inaccessible product delivered on schedule, at a competitive price, accompanied by a conformance report that looks clean. Everyone involved behaved rationally given their incentives, and the outcome is a service a constituent cannot use.

# Game Theory Failure #2: The Market for Lemons

George Akerlof’s 1970 paper, [The Market for Lemons](https://doi.org/10.2307/1879431?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory), described what happens to a market when buyers cannot distinguish quality before purchase. Buyers discount every offer to account for the risk; sellers of genuinely good products cannot get a price that covers their costs; those sellers exit, and average quality falls further. Akerlof was writing about used cars, and conformance reports present the same information problem.

Most vendors report conformance on the [Voluntary Product Accessibility Template](https://www.itic.org/policy/accessibility/vpat?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory) published by the Information Technology Industry Council, which maps its rows to WCAG success criteria and, in the federal edition, to the [Section 508 standards at 36 CFR Part 1194](https://www.ecfr.gov/current/title-36/part-1194?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory). A rigorous Accessibility Conformance Report, produced by testers who used assistive technology on the actual product, will document partial support and known defects. A report produced by someone filling in a template will claim full support across the board. Placed side by side in a scoring rubric that awards points for the word "Supports," the careful document scores worse than the fabricated one. The vendor that invested in testing is penalized for the accuracy of its disclosure.

Signaling theory suggests a response. A signal carries information only when producing it falsely is expensive, so a conformance claim that any vendor can assert at no cost gives the buyer very little to work with. Requirements that raise the cost of a false claim include the following.

-   **Methodology disclosure.** Require the report to name the testing method, the tools used, the assistive technology and browser combinations exercised, and the dates of testing.
    
-   **Scope disclosure.** Require the specific pages, screens, and workflows that were tested, including the administrative interfaces that staff with disabilities will have to use.
    
-   **Tester identity.** Require the name and qualifications of the individual or firm that performed the testing, and whether that party was independent of the development team.
    
-   **The defect list.** Require the underlying issue list, not the summary. A vendor with real testing already has this artifact. A vendor without it has to manufacture one, which is expensive and creates exposure.
    
-   **Live demonstration.** Require the vendor to complete a defined task in the product using a screen reader and keyboard only, in front of the evaluation committee. Live demonstrations are difficult to fake and costs the buyer about an hour.
    

Scoring should attach to evidence rather than to assertions. Vendors adjust what they produce to match what earns points, so a rubric built around evidence changes the content of the next round of proposals.

# Game Theory Failure #3: The Free Rider

Forty school districts license the same student information system. One of them pushes the vendor hard, funds an independent audit, escalates through the account team, and gets defects fixed in a platform release. All forty districts receive the fix. The thirty-nine that did nothing received the same benefit at no cost.

Every district understands this, which is why each has a reason to wait for someone else to act. Vendor accountability behaves like a public good, and public goods are chronically under-supplied when the cost falls on whoever moves first. The same structure appears at the complaint level, where filing takes time, documentation, and a willingness to be identified, while the resulting remediation benefits everyone who uses the service.

Cooperative game theory points to the answer: form the coalition and capture the value that no member can capture alone.

-   **Pooled testing.** Several entities using the same platform split the cost of one independent audit and share the findings, turning a cost each avoided into a cost none fully carries.
    
-   **Shared conformance verification.** A state term contract, a cooperative purchasing schedule, or a consortium can verify once for all members, raising the stakes for the vendor because a single finding now threatens many contracts at once.
    
-   **Coordinated contract language.** When a group of buyers uses the same accessibility terms and the same remedies, vendors stop treating those terms as a negotiable outlier from one unusually demanding customer.
    
-   **Publishing results.** Audit findings on commercial products, published or shared through professional networks, reduce the verification cost for every buyer that comes next and directly attack the information asymmetry described above.
    

# Game Theory Failure #4: Deadlines as Commitment Devices

The [Department of Justice rule published on April 24, 2024,](https://www.ada.gov/resources/2024-03-08-web-rule/?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory) adopted [WCAG 2.1 Level AA](https://www.w3.org/TR/WCAG21/?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory) as the technical standard for web content and mobile applications provided by state and local government entities. The requirements sit inside the Title II regulations at [28 CFR Part 35](https://www.ecfr.gov/current/title-28/part-35?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory), beginning at [28 CFR 35.200](https://www.ecfr.gov/current/title-28/section-35.200?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory). The original compliance dates were April 24, 2026, for entities serving populations of 50,000 or more, and April 26, 2027, for smaller entities and special district governments.  On April 20, 2026, four days before the first compliance date, the Department published an [interim final rule](https://www.federalregister.gov/documents/2026/04/20/2026-07663/extension-of-compliance-dates-for-nondiscrimination-on-the-basis-of-disability-accessibility-of-web?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory) extending both dates by one year, to April 26, 2027 and April 26, 2028. The rule took effect immediately. The substantive requirements were unchanged, and WCAG 2.1 Level AA remains the standard. The extension drew [organized opposition from disability advocates](https://www.lflegal.com/2026/03/title-ii-action-needed/?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory) during the comment period.

The rule mattered for reasons beyond its enforcement risk. A dated federal requirement is a focal point, in Thomas Schelling’s sense: a fixed reference that lets parties coordinate without further negotiation. Internally, it converted an argument about values, which the accessibility coordinator was structurally positioned to lose, into a budget line with a date attached, which finance departments know how to process. Deadlines do much of their work through that internal channel, improving the bargaining position of the person asking for resources.

Whatever the administrative merits of the extension, its effect on incentives was direct. Entities that spent 2024 and 2025 remediating received nothing that their peers who did nothing did not also receive. In repeated games, players update their strategies based on observed outcomes, and here the outcome was that delay carried no penalty. Covered entities now discount the next deadline by their estimate of the probability that it moves again, and that estimate has risen, reducing the internal leverage the current dates provide.

The payoff for waiting is less attractive than it appears, for reasons that a superficial reading of the extension misses.

-   **The underlying obligations did not move.** Title II’s general nondiscrimination and effective communication requirements supported web accessibility claims long before a technical standard existed, and they continued to apply throughout the extension period.
    
-   **Private litigation is unaffected.** Individuals and advocacy organizations retained the ability to sue during the extension, and the extension supplies no defense to a claim that a service is inaccessible.
    
-   **State obligations were not extended.** The Unruh Act and other state laws obliging digital accessibility have deadlines in the past.
    
-   **The extension is being contested.** The National Federation of the Blind [filed suit on May 21, 2026](https://www.adatitleiii.com/?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory), challenging the interim final rules issued by both agencies as procedurally improper and arbitrary under the Administrative Procedure Act.
    

An entity that stopped work in April 2026 kept its litigation exposure, and gave up the ability to make progress during the extension.

# Game Theory Failure #5: Repeated games

One-shot games favor defection. Repeated games with a long horizon support cooperation, because the value of the future relationship exceeds what a player gains by defecting once. Robert Axelrod’s tournament work found that the strategies that performed best over many rounds were the ones that cooperated first, responded to defection immediately, forgave a corrected defection, and stayed predictable enough that the other player could learn the rule.

Most accessibility conversations in procurement are accidentally structured as one-shot games. The conformance report is requested once, at solicitation. Nobody asks again for five years. The vendor correctly infers that the accessibility criterion was a gate rather than a standing expectation, and prioritizes accordingly.

The renewal is the enforcement point that already exists in the contract file and generally goes unused. Practices that convert the relationship into a repeated game include the following.

-   **Annual re-attestation.** Require an updated conformance report each contract year, tied to the current release rather than the version that was sold.
    
-   **Auto-updating Policies.** Avoid having to reopen policies every time the standards/laws update by automatically requiring software follow new versions of the standards/laws 18 months from their effective date
    
-   **Release-triggered retesting.** Require testing of the workflows that matter most after any major release, since audit results start to go stale the moment the product changes.
    
-   **Defect aging.** Track open accessibility defects by severity and age the way you track security defects, and report the aging to the same executives who see the security numbers.
    
-   **Renewal conditions.** Tie renewal, or a portion of the renewal fee, to closure of the highest severity defects identified in the prior term.
    
-   **Predictable responses.** Apply the same consequences to every vendor, every time. Vendors calibrate to what a buyer has done before, so inconsistent responses to missed commitments produce inconsistent vendor behavior.
    

# Game Theory Failure #6: Litigation, and the Option to Change the Game instead of Playing it

Litigation framed as a zero-sum contest produces defensive behavior that is rational and harmful. Counsel advises against audits that would create discoverable records. Remediation slows because progress could be characterized as an admission. Communication with the complaining party stops. Resources shift from engineering to defense, and the barrier that started the dispute remains two years later.

Structured negotiation, developed and documented in this field by [Lainey Feingold](https://www.lflegal.com/?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory), changes the payoff structure rather than the arguments. Parties negotiate before a formal complaint is filed, the relationship remains intact and repeated rather than adversarial and terminal, and the agreements produce dated remediation commitments with ongoing measurement. The technique converts a one-shot zero-sum game into a repeated positive-sum one, which is the structural change that supports cooperation in the models described above.

Sophisticated players also retain a second option: change the rules rather than playing better within them. Missouri enacted a law, effective August 28, 2026, that gives residents and the attorney general tools to address abusive website accessibility lawsuits. Whatever one concludes about that statute, it shows that the rule set itself is something the parties compete over, and that work aimed at rules reaches more disputes than work aimed at any single case.

# Changing the payoffs

The analysis is only worth the effort if it changes what a program actually does. The changes below affect one of four things: what the parties know, what they are paid, how long the relationship lasts, and how many buyers act together.

## For buyers

-   **Score evidence, not claims.** Award evaluation points for demonstrated task completion, methodology, and defect transparency, and award nothing for an unsupported assertion of conformance.
    
-   **Make money conditional on accessibility.** Include accessibility in the acceptance criteria, withhold a defined portion of payment until those criteria are met, and specify remedies for missed remediation dates. A contract term with no consequence attached gives the vendor nothing to weigh against the cost of ignoring it.
    
-   **Add weight where it matters.** Accessibility, scored at a token percentage of the evaluation, cannot change an award decision. Vendors read the published weightings and allocate engineering effort accordingly.
    
-   **Test before award.** Testing after go-live puts every finding in competition with money already spent, and those arguments usually end with a commitment to address the issue in a future release.  
    
-   **Fix the agency problem.** Provide the accessibility function with a documented escalation path, and require a written, signed exception whenever a decision goes against it. A signed exception leaves a record in the file after the people involved have moved on, which changes how carefully the decision is made.
    
-   **Use the renewal.** Calendar the retest dates in the contract file at execution rather than trusting anyone to remember them.
    

## For vendors

-   **Don’t hide the evidence.** A defect list with owners and dates does better with an experienced buyer than an unqualified claim of full support that is easily refuted.
    
-   **Understand the cost of your accessibility debt.** When accessibility debt surfaces during a renewal or a complaint, fixing it costs the most, and the customer relationship is least forgiving.<
    
-   **Invite verification.** An offer of independent testing costs the vendor something, which is the reason buyers treat it as credible.
    

## For leadership

-   **Measure it where the organization already looks.** Accessibility defects reported in the same dashboard as security and privacy defects receive the same treatment.
    
-   **Build governance that survives turnover.** A maturity model such as the [W3C Accessibility Maturity Model](https://www.w3.org/TR/maturity-model/?utm_source=access-ability&utm_medium=email&utm_campaign=accessibility-game-theory) gives an organization a way to describe its current state and its target state in terms that a budget process accepts, and it keeps the program from depending on one motivated employee.
    
-   **Join (or start) a coalition.** Shared testing, shared contract language, and shared findings reduce every member’s cost and raise the vendor’s cost of ignoring any single member.
    

# What game theory does not do

Game theory can explain why an outcome persists without defending it. A resident who cannot pay a water bill, a parent who cannot read a school closure notice, and a juror who cannot complete an online summons response are being excluded from government services. The legal duty to prevent that exclusion applies whether or not compliance is the dominant strategy for the entity involved.

The analysis is primarily diagnostic, and the interventions it points toward are specific: change what the buyer can verify before award, change what the contract pays for, extend the relationship beyond the award, and increase the number of buyers asking the same questions.

For an entity working toward April 26, 2027 or April 26, 2028, the concrete version of all of this is a procurement file that would hold up under a public records request, a contract with a remedy in it that someone is willing to enforce, a renewal calendar with test dates already on it, and a defect list that a governing board sees on the same page as everything else the organization tracks.