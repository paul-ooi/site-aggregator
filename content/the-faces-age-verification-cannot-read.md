---
title: The Faces Age Verification Cannot Read
description: TL;DR: Half of U.S. states now require online age verification, and the systems doing the verifying were not built with disabled faces in mind.
url: https://buttondown.com/access-ability/archive/the-faces-age-verification-cannot-read/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-01T10:44:28.599Z
tags:
  - accessibility
sourcePublishDate: 2026-06-03T14:20:09.000Z
author: 
contentHash: ffae7d70659241b43951c925a66cc856
---

![Five people with colored pieces of paper covering their faces](https://assets.buttondown.email/images/91b941fe-9ccc-402b-b137-e47c7deb7d1d.jpeg?w=960&fit=max)

*Five people with colored pieces of paper covering their faces*

**TL;DR:** Half of U.S. states now require online age verification, and the systems doing the verifying were not built with disabled faces in mind.

Age verification is having a moment in the United States. Half the states now require it for adult content, several require it for social media, and platforms from Discord to YouTube are rolling out facial age estimation, ID upload flows, and behavioral signal models. More than 30 countries outside the US are doing it too; a partial list includes:

**EU + United Kingdom**: UK, Ireland, France, Germany, Italy, Spain, Greece, Denmark, Netherlands, Belgium, Norway

**The rest of North America**: Canada, Mexico

**Asia**: South Korea, Japan, China, India, Indonesia, Singapore, Pakistan

**ANZAC:** Australia, New Zealand

**Central/Eastern Europe**: Turkey, Russia

**Middle East/Africa**: Saudi Arabia, UAE, Qatar, Egypt, Nigeria, South Africa

**South America**: Brazil, Argentina, Chile, Colombia

Almost nobody has stopped to ask what happens when the face on the camera does not match what the model was trained to expect.

Facial age estimation compares a photo to a model trained on millions of labeled faces, producing an estimate with a typical confidence interval of ±5-7 years. That interval is fine when your face is statistically typical for your age. It is a disaster when it is not. NIST has documented systematic accuracy gaps in these models across skin tone and gender. The disability gap has not been measured at all because the training data either do not include people with disabilities at all, or they don’t consistently label the content. The result is a verification system that fails predictable groups in predictable ways, and the companies deploying it mostly do not know which groups or how badly, nor do they seem to care.

# Two ways the system fails

Disability creates two opposite problems for age estimation, and both are common enough to matter.

**1) Adults who read as minors**

-   A 23-year-old with achondroplasia, the most common form of dwarfism, may have adult facial proportions on a four-foot frame, which the model has rarely seen.
-   People with Williams and Down syndrome have a distinctive facial structure (broad forehead, full cheeks, wide mouth) that many models read as significantly younger than the actual age, compounded by the cognitive disability that makes the appeal process its own barrier.
-   Adults whose appearance was altered by childhood cancer treatment, growth hormone therapy, facial reconstruction or endocrine conditions that delayed development sit here too.

**2) Minors who read as adults** - A 15-year-old boy on anabolic steroids, whether for legitimate medical reasons or otherwise, may have the jawline, beard growth, and muscle mass of someone in their mid-20s. - A 14-year-old with severe cystic acne may trigger models that associate skin roughness with age.

These models do not measure age; they measure proxies for age, and the proxies fail in both directions. Both failure modes have real consequences. The adult who reads as a minor is locked out of legal content, legal purchases, and legal services. The minor who reads like an adult gains access to content that the law was specifically designed to keep them from accessing

# Who actually gets blocked

The list of conditions that confuse facial age estimation is longer than most platform engineers realize. Some affect the face directly: progeria, with features the model has essentially never seen; craniofacial conditions, including Treacher Collins, Apert, Crouzon, hemifacial microsomia, and outcomes from cleft lip and palate; facial scarring from burns; prosthetics worn after cancer surgery. Some affect the patterns the model reads: vitiligo breaking the shading the model relies on, alopecia removing the eyebrows and eyelashes that face detection itself depends on, ectodermal dysplasia affecting bone structure, teeth, and hair together.

Then there are disabilities that affect the verification flow without affecting the face.

-   Cognitive disabilities (intellectual disability, autism, traumatic brain injury) that make multi-step ID upload flows confusing or impossible to complete alone.
-   Motor disabilities that make centering a face in a webcam, holding a phone steady for a selfie, or aligning an ID with a guide overlay difficult.
-   Blindness and low vision, where instructions like "hold the ID flat in the center of the frame" cannot be visually confirmed.
-   Tremor conditions, including younger-onset Parkinson's disease, where motion blur is read as a spoofing attempt by the liveness check.

# The structural problem

Most systems offer a fallback when the automated check fails: upload a government ID, submit to manual review, or provide a credit card. These fallbacks are not equal. A blind adult locked out can probably find a screen-reader path through ID upload if the vendor built one, but most have not. A person with an intellectual disability whose face confuses the model cannot necessarily complete an ID upload alone, and asking a caregiver to do it creates obvious problems when the destination is adult content or alcohol delivery. A person with a motor disability who cannot hold their phone steady for a selfie likely cannot hold it steady for the liveness check either. The fallback assumes the disability that broke the model is not the one that breaks the alternative.

The legal exposure is real and underappreciated. ADA Title III applies to public accommodations. Federal courts have been clarifying for years that websites count, and state accessibility laws in California, New York, Colorado, and elsewhere reach further. The biometric data captured during facial age estimation falls under BIPA in Illinois, CUBI in Texas, and similar laws elsewhere. Disabled users who fail the automated check hand over more sensitive data than nondisabled users for the same transaction, and they do so because the system failed them, not because they did anything wrong.

# What platforms should do?

The fix is not to abandon age verification. The laws are not going away. The fix is to design systems that fail gracefully for the groups they will predictably fail for. This requires adherence to three basic principles:

1) **The alternative path must be as accessible as the primary path**: if the facial estimation flow has a screen-reader-compatible ID upload fallback, the live check must have one too.

2) **The appeal process has to actually work**, which means not requiring a 23-year-old with achondroplasia to explain their medical history to a customer service agent who has never heard of their condition.

The deeper fix is to label disability in training data and measure accuracy gaps across disability groups, as NIST measures them across skin tone and gender. We know facial recognition is biased against darker skin because researchers measured it. We do not know how badly facial age estimation fails for disabled faces because nobody has measured it with the same rigor. Until somebody does, the platforms deploying these systems are flying blind, a poor strategic posture for a domain that combines biometrics, minors, and adult content.

# Final Thoughts

Age verification is built on the assumption that a face is a reliable proxy for age and that people whose faces do not fit that proxy are rare enough to ignore. They are not rare. They are a predictable, identifiable population, and the laws that protect them have been on the books for decades. The companies deploying age verification right now have a narrow window to get this right before the demand letters arrive. Some may care enough to do the right thing. Most will not. The disabled adults locked out of legal services, the disabled teens incorrectly granted access to harmful content, and the disabled people of every age forced to surrender more personal data than their nondisabled peers to prove who they are will all be waiting on the other side of the next round of lawsuits.