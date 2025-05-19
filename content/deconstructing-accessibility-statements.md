---
title: Deconstructing Accessibility Statements
description: Deconstructing Accessibility Statements
url: https://buttondown.com/access-ability/archive/deconstructing-accessibility-statements-6399/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2025-05-19T03:59:30.631Z
tags:
  - accessibility
sourcePublishDate: 2024-11-13T14:04:30.000Z
---

Glasses on a blurry piece of paper. Photo by Mari Helin on Unsplash
This is MY interpretation of the accessibility statement legal-ese. I am not your lawyer. You need to make up your own mind. With your own lawyer, who is someone other than me.
I received the following question after writing an article called “10 things that indicate people have no clue about accessibility” where one of the “10 things” was the lack of an accessibility statement being indicative of “no clue.” It started with “I would like to start putting a11y statement on our sites and wonder whether this is okay”
We are actively working to ensure our sites are WCAG 2.0 AA-compliant.
Please contact us if you are facing accessibility issues when using our sites

In processing my answer to the questioner, I realized that I had the privilege of having been to law school which allows me to translate legal-ese into accessibility-ese (and vice-versa). So I told the questioner that I would write a comprehensive article rather than give them a quick two-sentence LinkedIn message about what should go into their accessibility statements.
Where should accessibility statements go?
The first question that needs to be asked and answered concerning accessibility statements is not what is in them, but where should they appear. Accessibility statements should always:

have the shortest URL possible, something like:

foo.com/accessibility.ext

where foo.com is your domain and .ext is the extension of your default framework such as accessibility.html or accessibility.php
2. be reachable from your footer template on every page
3. if the statement pertains to a native app where the native app and the website point to the SAME accessibility statement, you should set this up as a webview on the native app side. That way any update to the statement will automatically show up in both places. As an additional bonus, an app store release won’t be required if the statement is updated and it is in a webview.
Basic Accessibility Statement Components
At its highest level, an accessibility statement should contain at a minimum:

A commitment to providing some level of an accessible experience

A list of guidelines and standards the experience uses as an objective measurement of whether or not the commitment identified in step 1 is being met

Accessible methodology for providing feedback.

Commitment
Expect some “weasel words” in most accessibility statement commitment sections. Weasel words is a colloquial phrase for language that makes it look like a direct statement is being made when actually the language is intentionally vague.
If your accessibility statement is going through legal review, there is no way a corporate lawyer will allow you to put in an unqualified commitment to accessibility. Common phrases you will see (these were all pulled from live accessibility statements) include :

committed to providing an accessible website

committed to providing access to all individuals

actively working to increase the accessibility

dedicated to supporting customers with accessibility needs

If you use the W3C accessibility statement generator, you will get language that is a little more concrete. The language they use is “committed to ensuring digital accessibility for people with disabilities.” Most lawyers are allergic to the word ensure. If you write a custom accessibility statement and put it through legal review, you will more likely see the reviewers recommending language around trying to be accessible. Most lawyers want their accessibility managers to commit to an accessibility effort, but not a accessible end result.
Guidelines
This part is relatively easy. WCAG 2.0? 2.1? 2.2? and what level (A or AA, rarely does anyone try to meet AAA).
Feedback
You need to tell your users how they can report an issue where an experience is not accessible. And for goodness sake:

if the feedback mechanism is a form, make sure at least the form is accessible even if the rest of the site is not.

if the feedback mechanism is chat, make sure you use an accessible chatbot. I always recommend Olark — their chatbot is accessible, even if their site has some issues like the impossible to read contrast on the skip link.

if your company has multiple feedback channels, list at least two of them in your accessibility statement so the person reporting can choose the mechanism that best fits their preferred form of communication. Preferable the two would use different senses.

If one of your channels is voice, make sure that your customer service reps are trained in taking relay calls. Or better yet, have a CSR trained in assistive technology and taking calls from users with disabilities.
Screenshot of Google’s Disability Support Team contact page which includes email, chat, and voice options

Can’t I use an Accessibility Statement Generator?
There are several of them out there. Plug in a company name, level of accessibility, and email address, press a button, and BOOM, you have an accessibility statement. It is my opinion that anyone who publishes an automatically generated accessibility statement without review and customization needs to have their head examined.

Accessibility statements are exhibit number one in lawsuits.

Accessibility statement language needs to be customized for each and every company

Accessibility statements should be reviewed by a lawyer with litigation experience who understands how the wording could be used against them in a lawsuit.

That being said, I have no problem using an automatically generated accessibility statement as a starting point to then create a customized accessibility statement. It’s the same philosophy as using automated captions as a starting point to create a custom caption set for a video. I would never, ever recommend directly publishing the output of an accessibility statement generator.
Screenshot of the W3C accessibility statement home page from https://www.w3.org/WAI/planning/statements/generator/#create
More Advanced Accessibility Statement Considerations
If you are going for a more comprehensive accessibility statement, consideration should also be given to:

Known exceptions to the intended accessibility level, to avoid user frustration

Supported Platforms Matrix — Full stack information on supported hardware, operating systems, browsers, whether you honor mobile device accessibility settings, and supported assistive technology.

Best Experienced On — Full stack information on environments that have been comprehensively reviewed including information on whether the testing was done by an independent third party and whether or not the testing was done by people with disabilities

Testing methodology — How do you test your software?

References to applicable national or local laws

Known exceptions
The purpose of the “known exceptions” section of the accessibility statement is about avoiding user frustration. Legitimate accessibility exceptions do exist. For example:

Organizations can’t be held responsible for content where they don’t have a copyright or license. That is because legally, they wouldn’t be allowed to change that content. This would include, for example, comments or reviews uploaded by customers.

Organizations may have one fully accessible path that provides complete access to information that is otherwise inaccessible in other paths. The Americans with Disabilities Act did not make stairs illegal. It did require that a ramp and elevator connect people with mobility disabilities to everywhere the stairs go. Let’s say you have a complicated chart where the graph is inaccessible, but the data used to build the graph is available in a downloadable. CSV file that people with vision loss can load into Excel or Google Sheets and process using whatever sorting works best for them. The chart is the stairs, the data is the ramp and elevator. Another common example is an inaccessible calendar that allows you to type in dates from the keyboard, bypassing the inaccessible UI.

Third-party advertising and plugins. This one is controversial because you (the site owner) have chosen to associate yourself, usually in a contractual manner, with third-party products. And while you SHOULD demand that your vendor make them accessible, you can’t be continually checking to make sure that they haven’t broken something on their side.

Testing Methodology
This is where your accessibility efforts can really shine. In this section, you can highlight things like:

manual testing efforts

whether you have testers with disabilities

whether your testing is done by an independent third party

whether you do user research on people with disabilities

Supported Platforms Matrix
A supported platforms matrix is a grid that contains a list of the hardware, operating systems, browsers, and assistive technology where the experience is *officially* supported.
Best Experienced On
“Best experienced on” is a statement of which environment from the supported platforms matrix you feel is the best experience. Typically the “best experienced” environment is where the most exhaustive manual testing was performed.
If there are environments that you are never going to support (ex: IE or mobile web) those should be identified in this section as well.
References
Add in Section 508, CCPA, GDPR, AODA, or any other regulations that may also control your website content.
Not having an accessibility statement is on my list of things that are highly correlated with inaccessible websites.

Organizations can’t meet their legal obligations to equal access if they exclude disabled individuals from being able to use their websites or products.

Organizations can’t achieve their corporate social responsibility / D&I goals if they exclude disabled employees or potential employees from being able to use their websites or products.

Having a publicly stated accessibility goal that can be easily measured helps hold companies accountable for continuing to move the accessibility needle forward toward complete accessibility for all users.
Subscribe now
This Article is copyrighted by Access*Ability, an imprint of sheribyrnehaber.com, please contact us for permission before quoting or linking our articles by emailing sheri@sheribyrne.com