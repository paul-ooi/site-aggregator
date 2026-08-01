---
title: Two SDNY Decisions in One Week Show Courts Are Done Messing around with Questionable Accessibility Litigation
description: Courts in SDNY have been showing their impatience with repetitive, cookie-cutter accessibility lawsuits for years. Two decisions from the Southern District of New York were issued last week. Together,
url: https://buttondown.com/access-ability/archive/two-sdny-decisions-in-one-week-show-courts-are/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-01T10:44:28.599Z
tags:
  - accessibility
sourcePublishDate: 2026-04-09T13:07:09.000Z
author: 
contentHash: 21d09ca4a44543d087fb462400f25c8b
---

![Blurry courtroom with the scales of justice in the foreground](https://assets.buttondown.email/images/2ad4a3d1-5e03-4d96-8eca-736b9e1e5152.jpeg?w=960&fit=max)

*Blurry courtroom with the scales of justice in the foreground*

Courts in SDNY have been showing their impatience with repetitive, cookie-cutter accessibility lawsuits for years. Two decisions from the Southern District of New York were issued last week. Together, they send a message that the accessibility field has needed to hear for years.

1.  One decision acknowledged the efforts of a defendant who genuinely invested in accessibility and got sued anyway.
    
2.  The other warned an overlay vendor that its terms of service cannot cover up possible deliberate deception.
    

## Case 1: Jones v. Moscot.com - Doing the Work Pays Off

In Jones v. Moscot.com, LLC (S.D.N.Y., March 5, 2026), Judge J. Paul Oetken dismissed a proposed ADA class action filed by a blind plaintiff who claimed he couldn’t buy sunglasses on the Moscot website due to barriers such as missing alt text, unannounced pop-ups, mouse-only event requirements, and broken links. The complaint was typical serial-plaintiff litigation: a specific product and date were identified, a list of WCAG failures detectable via an automated crawl was provided, and a declared intention to return once the site is fixed.

What was unusual was Moscot's response. The company had been working with Level Access, a nationally recognized digital accessibility firm, since May 2023. Its e-commerce site had one of the highest accessibility scores within Level Access's client portfolio. (Note: I don’t personally believe in scores, but this judge placed significant weight on this particular fact). After receiving the complaint, Moscot asked Level Access to investigate every barrier Jones had claimed. The investigation found that none of the alleged barriers actually prevented a screen reader user from purchasing the sunglasses. One low-severity issue was identified and fixed immediately. Moscot submitted a detailed declaration from its Director of E-Commerce outlining all of this, supported by the Level Access audit report and the company's contractual engagement.

The plaintiff submitted nothing in response. No competing declaration. No counter-audit. No expert. The court found that Moscot had satisfied the voluntary cessation doctrine for mootness, demonstrating that the alleged violations had been completely and irrevocably eradicated and were not reasonably expected to recur. The case was dismissed.

This outcome did not happen by chance. SDNY courts have spent years observing serial plaintiffs flooding their systems with nearly identical ADA accessibility complaints against hundreds of defendants, many of whom either lacked an accessibility program or had only installed an overlay widget and claimed their accessibility efforts were complete. These courts are increasingly requiring plaintiffs to present more evidence to establish standing, ordering jurisdictional discovery, holding evidentiary hearings, and dismissing cases where boilerplate allegations cannot withstand scrutiny.

_Jones_ signals the next logical step in these court rulings: when a defendant can demonstrate a documented, ongoing, good-faith accessibility program and a plaintiff fails to rebut it, there is no case or controversy. Courts are not settlement mills. Law firms representing serial plaintiffs want easy, soft targets. Rebutting a nationally recognized consultancy takes effort, and they probably just moved on to the next defendant.

The practical lesson for defendants is clear. Organizations that have a genuine accessibility program, a documented relationship with a qualified accessibility partner, audit evidence, and a remediation track record are not easy targets. If they become defendants, their positions are defensible. Plaintiffs' firms that identify organizations to sue from boilerplate WCAG scan output and file identical complaints are wasting everyone's time, including the court's.

## Case 2: Parikh v. accessiBe: The Fine Print Does Not Save You from Your Own Fraud

The same week, Judge P. Kevin Castel issued the latest ruling in Parikh v. accessiBe, Inc. (S.D.N.Y., March 31, 2026), a putative class action filed by three small businesses that had purchased accessiBe's accessWidget. Tribeca Skin Center, Dillon Music, and Safe Life Defense each purchased and installed the widget based on accessiBe's claims that it would make their sites fully WCAG 2.1 AA compliant within 48 hours and protect them from ADA lawsuits through its Litigation Support Package. Each was later sued for ADA website inaccessibility. They all contacted accessiBe for the promised legal assistance. The provided legal assistance consisted of an audit report stating that the site was compliant, a claim that the lawsuit was invalid, and a referral to outside counsel at the customer’s expense.

AccessiBe moved to dismiss, arguing that its terms of service disclaimed all warranties, limited liability to the greater of six months of subscription fees or fifty dollars, and described its products as provided on an 'as is' basis. The court ruled that the plaintiffs were bound by those terms of service, a sign-in-wrap agreement that reasonably prudent business users would recognize as putting them on inquiry notice. Most of the plaintiffs’ claims were thrown out: breach of warranty (since the widget is software as a service, not a good under the UCC), implied contract (an express contract governs instead), New York General Business Law Section 349 (because accessiBe sells to businesses, not consumers), the Magnuson-Moss Warranty Act (fewer than 100 named plaintiffs), and negligent misrepresentation (which is duplicative of the contract claim).

What did survive dismissal was the most important claim: breach of contract based on accessiBe's representations that its widget would achieve full WCAG 2.1 AA compliance. Here, the court relied on a well-established principle of New York law. A limitation of liability clause cannot protect a defendant from gross negligence or willful misconduct when it limits recovery to a nominal amount. A cap of fifty dollars is considered nominal. The court found that the allegations plausibly established gross negligence because, as stated in the complaint, accessiBe's own internal testers identified WCAG compliance errors on nearly all websites they tested.

The FTC's April 2025 settlement with accessiBe, in which the company paid $1 million and agreed to stop claiming its widget could make any website WCAG-compliant, influences this case. The court took judicial notice of the settlement, though it explicitly stated the settlement carried no weight in deciding the motion. That stance will likely change. If this case continues, that FTC settlement will be crucial to the gross-negligence and willful-misconduct analysis. But will this case proceed? That is my major question because continuation would involve evidentiary hearings where accessiBe’s dirty laundry could be exposed for the world to see.

## What These Two Decisions Mean Together

Read together, _Jones_ and _Parikh_ draw a clear line between organizations that take accessibility seriously and those that exploit the legal and technical complexity of the ADA for commercial gain.

Moscot invested in a qualified accessibility partner, maintained documentation, and responded to litigation with evidence rather than argument. The court rewarded that investment by refusing to allow a boilerplate complaint to proceed. The decision does not guarantee immunity from all accessibility lawsuits. However, it shows that a genuine, documented accessibility program significantly impacts a defendant's legal stance.

accessiBe sold a product it had reason to know could not do what it promised, collected subscription fees from small businesses with no in-house legal or IT capacity, did not adequately support its customers when those businesses were sued, and then tried to hide behind a fifty-dollar liability cap. The court allowed the core claim to proceed. The terms of service protected accessiBe from most of the alleged legal theories, but not from the most important one: that accessiBe promised WCAG compliance, knew it could not deliver it, and its customers were harmed as a result.

For accessibility coordinators, procurement officers, and compliance leaders, the message is clear. Genuine accessibility work, executed by qualified individuals, documented with audit reports and remediation logs, and maintained over time provides a legal defense that a widget subscription alone cannot. Courts in SDNY have observed years of cut-and-paste litigation, and they are no longer impressed by shortcuts from either side.

## Why SDNY Decisions Carry Outsized Weight in Accessibility Law

The Southern District of New York has been at the center of digital accessibility litigation from the very beginning. New York has consistently led the nation in ADA Title III website accessibility lawsuit filings, and SDNY has been the venue where many of the field’s foundational procedural questions were first litigated: what facts are sufficient to establish standing, and when can a court dismiss a case without full discovery.

Because those questions arise in SDNY with far greater frequency than in virtually any other federal district, SDNY’s reasoning on them is more developed, more tested, and more consistently cited by courts elsewhere. Decisions from SDNY are not technically binding outside that district, but they are highly persuasive precisely because they arise from the jurisdiction that has processed more of this litigation than any other in the country. When SDNY speaks on the mechanics of accessibility lawsuit defense, practitioners and courts in other districts listen.

## Final Thoughts

Neither the _Jones_ nor the _Parikh_ cases resolve the broader challenges of digital accessibility enforcement in a litigation environment that remains noisy, inconsistent, and expensive. However, both decisions demonstrate a maturing of case law. Courts are becoming better at distinguishing between defendants who have genuinely invested and those who haven't, and at identifying vendors whose products may have contributed to inaccessible environments. For organizations working to develop effective accessibility programs, this maturation is encouraging. The legal system is beginning to reward the correct behaviors. The way forward remains the same: invest in qualified expertise, document everything, and treat accessibility as an ongoing effort rather than a one-time widget purchase. This approach may not completely eliminate legal risks, but it helps organizations respond to litigation from a position of strength rather than vulnerability.