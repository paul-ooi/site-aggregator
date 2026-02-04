---
title: Eight Skunkworks Projects That Advance Accessibility Without Approval
description: The term “skunkworks” comes from Lockheed Martin and originally referred to a secretive team building experimental aircraft during World War II. These days, it’s tech shorthand for small, scrappy grou
url: https://buttondown.com/access-ability/archive/eight-skunkworks-projects-that-advance/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-07-16T11:24:32.000Z
author: 
contentHash: 1ce2b10ae664eb8fa5e0aad15b2bcf76
---

![Person carrying binders labeld Documents Information Skunkworks](https://assets.buttondown.email/images/57006367-c4b0-4200-bfa7-2587323a267c.jpeg?w=960&fit=max)

*Person carrying binders labeld Documents, Information, Skunkworks*

The term “skunkworks” comes from Lockheed Martin and originally referred to a secretive team building experimental aircraft during World War II. These days, it’s tech shorthand for small, scrappy groups that work independently and solve problems faster by skipping formal processes.

You don’t need a VP title or a budget to improve accessibility. In fact, some of the most successful accessibility initiatives begin as side projects. These initiatives are often quietly started by people who see a gap and decide to fill it, trusting the idea that it’s easier to ask for forgiveness than permission.

While **“Skunk Works”** remains a trademark, the uncapitalized, one-word version **“skunkworks”** has evolved into everyday business and technical jargon. It now refers generically to:

-   A small, loosely structured team
    
-   Working independently from the primary organization
    
-   Focused on innovation or experimental projects
    
-   Often with limited oversight or formal process
    

Here are eight accessibility-focused skunkworks ideas that anyone can initiate, even in environments where accessibility isn’t yet a formal priority.

**1\. “Click Here” Scavenger Hunt**  
What it is:  
Inventory all the places on your website that say “click here.”

Why it works:  
People will begin to understand the experience of users who are blind. They need to understand that users with sight visually associate links and content. However, there is no such association in code without ARIA.

Start small:  
Most companies have many websites. Start with a handful that is used most frequently

**2\. Caption Quality Sampling**  
What it is:  
Grab a random sample of 10–20 internal training or marketing videos and audit their captions for timing, accuracy, speaker identification, and clarity. You have some with no captions, you say? Play them in your favorite video teleconferencing system and grab the transcript from the auto captioning.

Why it works:  
Auto-generated captions are usually inadequate. Showing examples of poor captions from your organization helps make the issue tangible and builds a case for allocating resources toward better transcription.

Start small:  
Create a caption scoring rubric. Track how many videos meet a basic quality bar. Share before/after examples in internal newsletters or learning management systems. For bonus points, randomly sample training that has a quiz and compare the scores from those with bad captions and those with good captions. Screenshot the ones that are exceptionally bad for inclusion in a future PowerPoint deck.

**3\. Contrast Checker Bookmarklet Deployment**  
What it is:  
Build or deploy a browser bookmarklet that launches a WCAG 2.2 AA contrast checker directly on any internal or staging page.

Why it works:  
Designers and engineers often don’t realize their color choices fail contrast until after a customer complains. Unfortunately, sometimes that complaint takes the form of litigation. A fast-access tool embedded into daily workflows promotes self-correction.

Start small:  
Use tools like [Tanaguru Contrast Finder](https://contrast-finder.tanaguru.com/?utm_source=access-ability&utm_medium=email&utm_campaign=eight-skunkworks-projects-that-advance) or build a lightweight internal version. Add instructions on how to use it to the design system documentation.

**4\. Internal Accessibility Hall of Shame**  
What it is:  
Collect screenshots or GIFs of inaccessible patterns found within your organization’s websites, applications, or content. Of course, it’s probably better to blur out identifying details and focus on the issue.

Why it works:  
Humor and real-life examples stick with people more than regulatory or standards language. A “what not to do” deck can spark hallway conversations and training moments.

Start small:  
Collect 5–10 examples and share them monthly in an internal Slack or Teams channel with a narrative that explains why what is displayed is a problem and how to fix it.

**5\. Low-Vision Magnification Testing Rotation**  
What it is:  
Test how key pages or workflows perform at 200% and 400% browser zoom with reflow, using only browser settings. No additional tools or knowledge are required. Simply enter a URL into a browser and either press <ctrl><+> multiple times, or pinch to zoom if you are on mobile. Don’t forget to try _all_ browsers; some magnification issues are browser or device-specific. Plus-sized devices are a common source of accessibility magnification issues due to poor breakpoint choices. Sticky headers at 400% can obscure the entire page, making it unusable.

Why it works:  
This approach simulates real low-vision use and often reveals layout breakage, content clipping, or horizontal scrolling. These are WCAG 2.2 violations that automated tools won’t catch.

Start small:  
Assign one person per sprint to check a different area of the product. Log findings in a shared doc and suggest design alternatives.

**6\. Accessibility Office Hours / Mentorship Circles**  
What it is:  
Create a monthly drop-in meeting where anyone can bring accessibility questions, review a sticky problem, or get feedback on an issue they’ve encountered.

Why it works:  
This builds internal expertise informally. People are more likely to ask for help in a low-pressure setting than by filing tickets or escalating through management.

Start small:  
Host a 30-minute “Accessibility Office Hours” on your favorite accessible video conferencing platform. Advertise it in company-wide channels and bring a few starter topics to seed discussion.

**7\. Accessible Form Pattern Library**  
What it is:  
Build a small internal repo of accessible code snippets for common form patterns—radio groups, checkboxes, required fields, error messages—with embedded instructions.

Why it works:  
Developers reuse patterns. If your team can easily find pre-tested, accessible versions, it prevents issues from recurring. Likewise, if they can’t find them, they will use whatever they can find, or worse, build a new version, which is likely inaccessible.

Start small:  
Use CodePen or GitHub Gists to store examples. Add ARIA markup, keyboard focus handling, and visible error placement. Make it searchable and referenceable.

**8\. Keyboard-Only Game Challenge**  
What it is:  
Organize a 15-minute challenge where coworkers must complete a basic task (like booking a meeting room or filling a timesheet) using only their keyboard.

Why it works:  
This drives empathy fast. It reveals which parts of your app or site are inaccessible and gives able-bodied users a glimpse into real barriers.

Start small:  
Create a one-page guide on using Tab, Shift+Tab, and Enter to navigate. Award prizes for fastest completion or most bugs found.

**Final Thoughts**  
Skunkworks projects thrive on initiative, not perfection. They enable accessibility champions to prototype fixes, gather data, and build momentum without waiting for budget cycles or executive sponsorship. Pick one from this list and launch it quietly. If it works, scale it. If it doesn’t, you’ve still learned something worth sharing.