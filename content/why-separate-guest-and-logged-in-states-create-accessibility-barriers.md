---
title: Why Separate Guest and Logged In States Create Accessibility Barriers
description: Do you have differing logged-in and logged-out experiences for your users?
url: https://buttondown.com/access-ability/archive/why-separate-guest-and-logged-in-states-create/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-02-04T06:45:00.869Z
tags:
  - accessibility
sourcePublishDate: 2025-11-05T14:15:43.000Z
author: 
contentHash: b9e4e7d668501436869a9bec27204eef
---

![Bluethemed simulated circuit board covered in shopping cart icons](https://assets.buttondown.email/images/fe40920a-b7ef-45ef-ad82-6e27c6c0ec8e.jpeg?w=960&fit=max)

*Blue-themed simulated circuit board covered in shopping cart icons*

**Do you have differing logged-in and logged-out experiences for your users?**

**Do you merge the two when someone logs in?**

**If you don't, you are creating accessibility barriers.**

People often think of accessibility as something that happens on the surface of a website, entirely under designers’ control. Labels. Color contrast. Focus indicators. What gets missed repeatedly are interactions, which must also be accessible. That includes treating the same user like two different people, depending on where in the login flow they are.

We’ve all done the following:

1) Go to a site we’ve been using forever, assuming our last login is still valid.

2) Thinking that we are still logged in, begin to fill a cart or complete a transaction. My most recent negative experience was with Kayak, which is what motivated me to write this article. Thanks, Kayak! </snark>

3) Go to check on some detail you can only do when you are logged in, and bam, realize that you are actually NOT logged in.

4) Log in, and everything in your cart or form vanishes. For bonus points, you are moved from where you were to a completely different page, like the login home page.

Think about how aggravated you were when this happened. And then ask yourself, would this have been a vastly worse experience if you had a disability and relied on assistive technology?

If a person starts a task while logged out and that work disappears after logging in, or if the user is moved somewhere unexpected without a clear indication of what happened, your software has an accessibility barrier. That is not a preference issue. That violates the requirement to preserve input and context across a user’s interaction with a website. This can show up when browsing a catalog, buying tickets, filling a cart, entering information into a form, or building a playlist, just to name a few straightforward and common places where this bad behavior can occur.

### **Why does this matter?**

People with disabilities almost always take longer to complete tasks. In my research, it can take someone using assistive technology to interact with a website up to 5 times as long to complete a transaction as it does for someone without a disability. The reasons for this are numerous.

-   Voice interaction is slower than typing.
    
-   Screen readers require exploration and generate numerous announcements.
    
-   Motor disabilities sometimes require users to pause and retry.
    
-   Cognitive disabilities mean that starting a task twice raises the risk of errors and abandonment.
    
-   Magnification users have to scroll looking for items outside the viewport that they need to interact with.
    

If your product discards or relocates work after login, it forces those users to redo everything they have already completed. If this does not include a warning or an option to merge, WCAG may treat this behavior as a failure.

### What typically goes wrong

One or more of the following things can happen in the interact/login/continue interaction cycle identified at the top of this article:

-   Cart contents or saved items do not persist across login
    
-   Forms clear when users are forced to log in mid-flow
    
-   The UI reroutes to the home page instead of returning to the task that was in progress after authentication
    
-   The person is brought back to the screen they left off from, but the focus jumps to the top with no announcement of state or preservation
    
-   Content that was visible before login disappears or relocates behind an unannounced tab or accordion
    

Each of these issues breaks disabled users’ expectations of continuity and requires additional cognitive and physical effort. That is the opposite of inclusive design.

### The accessibility duty here is simple

If someone begins a task in “guest mode”, then logs in, the software must do one of the following three things, in order of preference:

1.  Return the user to the same place post-login with the cart/form intact;
    
2.  Warn the user ahead of time that guest carts are not maintained after login, or;
    
3.  Clearly inform the user what changed, where it went, and how to resume.
    

This is not a nice-to-have. It is required to meet the WCAG principles of operability and understandability.

### Claiming this is a “Security issue” is not a get-out-of-jail-free card

Teams often justify clearing carts or forms in the name of security. However, this is really just a compliance fig leaf and sheer laziness because there are safer WCAG-compliant patterns that maintain integrity without abandoning the user’s work. If software that maintains compliance is going to wipe out information, that fact must be disclosed before the work is performed, not after the fact.

### What to check right now

Ask your team the following:

-   If a user begins a task before logging in, do we preserve their work after they have logged in?
    
-   If the work is not preserved, do we announce what will happen before they start their task?
    
-   After login, where does the focus go? Is it obvious to the user how to continue?
    
-   Do product and security agree on a pattern that protects data without throwing the user experience into the nearest rubbish bin?
    

If even one of the answers to these four questions is “no,” this is not a backlog problem. It is an accessibility barrier.

Login is not a reset point. It is a continuation point. If your product treats it as a reset, you are taking accessibility away from the people who need it the most.

**Abandoned Carts == Lost Profits**

Yes, there is a cost associated with crafting accessible cart-merging code. But has your organization looked at your abandoned cart rate lately? [On average, 70 % of shopping carts are abandoned](https://baymard.com/lists/cart-abandonment-rate?utm_source=access-ability&utm_medium=email&utm_campaign=why-separate-guest-and-logged-in-states-create). 1/3 of these customers who walked away say they did so because the process was too complicated or they encountered errors. These are people who are already on your site and want to spend money! Given the high cost of acquiring new customers, the cost associated with writing accessible cart-merging code will more than pay for itself.

Also, sites with shopping carts are at the highest risk for litigation due to their complexity. Almost [70 % of organizations sued in 2025](https://info.usablenet.com/hubfs/2025-MidYear-Report-FINAL.pdf?hsLang=en&utm_source=access-ability&utm_medium=email&utm_campaign=why-separate-guest-and-logged-in-states-create) were e-commerce sites. Throwing money away on settlement agreements and legal defenses when it could be spent on making shopping carts accessible seems incredibly short-sighted.

**Final Thoughts**

The idea that the pre-login and post-login experiences are separate is a relic of software antiquity. Today, people move in and out of authentication mid-stream and move back and forth between laptops and mobile devices. They may have retained login information on one device and forgotten to do so on the other. People crave immediacy. They want to start shopping as soon as they hit a site, and forget to check whether they are logged in. When a product ignores these facts, it imposes a cost that falls hardest on assistive technology users with disabilities, who already spend the most time and effort completing digital tasks.

This is not a debate over workflow preferences. This is a preventable access barrier. The fix is not exotic. Keep the work, or warn the user before they start the work that it may be erased. Return the user to where they were or tell them exactly what changed and how to continue. Anything short of that means you are penalizing disabled users.

When you ship a product that erases work on login, you are not just making a design choice. You are deciding that speed matters more for non-disabled users than for disabled users. That is the definition of disability discrimination and ableism.