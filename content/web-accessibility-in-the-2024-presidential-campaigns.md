---
title: Web Accessibility in the 2024 Presidential Campaigns
description: There’s nothing quite like a presidential campaign year to gin up comparisons between rivals on a seemingly endless inventory of attributes, whether it’s their condiment preference, choice in
url: https://webaim.org/blog/2024-campaign-site-accessibility/
source: https://webaim.org/blog
organization: WebAIM Blog
repostedDate: 2025-05-22T04:37:27.589Z
tags:
  - accessibility
sourcePublishDate: 2024-04-30T19:10:51.000Z
author: 
contentHash: f9dc19076569fa8772cc1926ab680fce
---

There’s nothing quite like a presidential campaign year to gin up comparisons between rivals on a seemingly endless inventory of attributes, whether it’s their [condiment preference](https://www.vice.com/en/article/534mkk/donald-trump-eats-dry-ass-steak-with-ketchup-sad), [choice in footwear](https://www.politico.com/news/magazine/2023/10/31/desantis-boots-shoemakers-00121044), or [agility in ascending a set of stairs](https://www.foxnews.com/media/social-media-erupts-biden-stumbling-air-force-one-steps-vigor-display).

Unable to resist the temptation to pile on to the bandwagon, we here at WebAIM would like to put our own spin on things, and have run our 2024 presidential candidates’ campaign websites through our [AIM (“Accessibility Impact”)](https://wave.webaim.org/aim) testing sequence to answer the burning question of which is more accessible.

## Politically speaking, who cares about accessibility?

A [2016 Pew Research Center survey](https://www.pewresearch.org/short-reads/2016/09/22/a-political-profile-of-disabled-americans/) found that whether a person identifies as having a disability has almost no correlation to political party. Among respondents claiming “any disability,” 42% leaned Republican while 50% leaned Democratic. Among those claiming “no disability,” 43% leaned Republican while 52% leaned Democratic.

Looking farther back, the [Americans with Disabilities Act of 1990](https://en.wikipedia.org/wiki/Americans_with_Disabilities_Act_of_1990) enjoyed broad bipartisan support (agreed to in July 1990 by a vote of 377-28 in the House and 91-6 in the Senate) while leaning slightly Democratic.

So, both parties would do well to consider voters with disabilities.

## What does “Accessibility Impact” mean?

An AIM assessment begins with automated test results (powered by [WAVE](https://wave.webaim.org/)) from all detectable pages within a website. These results are aligned to the [WebAIM Million](https://webaim.org/projects/million) sample to allow comparisons with web pages generally. Then, one of WebAIM’s skilled evaluators performs manual spot checks on four key pages. The manual checks measure the impact of ten highly impactful accessibility barriers.  The automated and manual scores are combined to generate a score on a scale of 1 to 10. Higher AIM scores indicate a higher positive impact and better implementation of accessibility. A score of 5 indicates that the detected errors on the site are about average compared to other pages on the web.

Although the points we test on are drawn from the [Web Content Accessibility Guidelines (WCAG)](https://webaim.org/standards/wcag/checklist), the process is not equivalent to [a complete WCAG audit](https://webaim.org/services/evaluation/), which is more thorough.

## Automated Accessibility Scores

.bar {font:700 1em 'Segoe UI', sans-serif; margin:1em 0} .bar div {color:#FFF; padding:8px; display:inline-block; margin-right:8px} .dem {background:#009} .rep {background:#900} .tie {background:#909}

Trump

6.4

Biden

5.7

One significant difference between the websites is the sheer number of pages: Our spider found 1,086 pages in [donaldjtrump.com](https://donaldjtrump.com/) but only 16 in [joebiden.com](https://joebiden.com/). The vast majority of Trump’s pages are text-rich [news items](https://www.donaldjtrump.com/news/afd14cce-d1f6-4437-a4b8-536ff27bb1bb) and [position statements](https://www.donaldjtrump.com/agenda47/agenda47-america-must-have-the-1-lowest-cost-energy-and-electricity-on-earth) based on page templates that performed relatively well in our automated tests, so that helped hold average errors per page down to 13.7. Among the automatically detected errors, 92% had to do with missing alternative text—an easy fix that would boost the score tremendously.

By comparison, [joebiden.com](https://joebiden.com/) scored 24.3 average errors per page. Most automatically detected errors stemmed from missing alternative text (56%) and low contrast (40%). Again, of all the things that can go wrong with web accessibility, these are among the easiest to remedy.

## Manual Accessibility Scores

The Manual Accessibility Impact Score is generated from manual testing completed on four key pages. It reflects the end user impact of various accessibility issues and features as determined by a knowledgeable human tester. For example, while missing alternative text is a WCAG failure in any case, it takes human judgment to evaluate the user impact of that failure, depending on how important the image is and what kind of information it conveys.

## How the Sites Compare in Ten Top Accessibility Barriers

The following compares manual scores side-by-side in our list of the ten most impactful accessibility factors, across only the four pages that were manually tested. Again, ten is the highest possible score.

### 1\. Language of Page

Both Campaigns

10.0

Both websites correctly identify the [page language](https://webaim.org/techniques/language/) on all manually-tested pages.

### 2\. Alternative text

Biden

7.5

Trump

6.6

Trump’s site is missing [alternative text](https://webaim.org/techniques/alttext/) for icons in most social media links. Biden’s omits alternative text for an image that conveys text (although the text is not critical), while placing unnecessary alternative text on a decorative image.

### 3\. Empty Links and Buttons

Biden

10.0

Trump

8.3

Trump’s home page includes many [empty links](https://webaim.org/techniques/hypertext/link_text#empty_links) to videos.

### 4\. Form Input Labels

Biden

10.0

Trump

7.5

Some form inputs on Trump’s _Contribute_ and _Volunteer_ pages are [missing labels](https://webaim.org/techniques/forms/#labels).

### 5\. Contrast

Biden

8.3

Trump

7.8

Particularly noteworthy is Biden’s _Work With Us_ page. All of the job titles—arguably the most important content on the page—fail to meet [minimum contrast](https://webaim.org/articles/contrast/).

### 6\. Appropriate Page Titles

Biden

10.0

Trump

9.3

Both sites are far above average here, although the [page title](https://webaim.org/techniques/pagetitle/) on Trump’s _Contribute_ page alternates between “PATRIOT!” and “MAGA!”, which does not fully represent the page’s purpose.

### 7\. Animation and Movement

Both Campaigns

10.0

Both campaigns are to be congratulated for avoiding [distracting animation](https://webaim.org/techniques/images/#animations).

### 8\. Visual Focus Indicators

Biden

9.3  

Trump 0.0

Trump’s site uses no visual focus indicators at all. Allowing the default browser [focus indicators](https://webaim.org/techniques/keyboard/#focus) would be a very impactful—and yet very easy—fix.

### 9\. Keyboard Accessibility

Biden

7.8

Trump

2.3

Both sites include chat widgets, but neither of them are [keyboard-focusable](https://webaim.org/techniques/keyboard/). Both sites also present the user with modal dialogs on page load, but the dialogs do not maintain keyboard focus: After tabbing through the dialog contents, focus moves to elements on the underlying page that remain [visually obscured](https://webaim.org/standards/wcag/checklist#sc2.4.11) by the dialog.

On Trump’s _Contribute_ page, the predefined donation dollar amounts are mouse-clickable but not keyboard-focusable. On Trump’s _Issues_ page, the many position statements are contained in show/hide widgets whose triggers are likewise mouse-clickable but not keyboard-focusable.

### 10\. Reflow and Responsive Design

Both Campaigns

7.8

Both sites employ effective responsive design, but when [zooming](https://webaim.org/standards/wcag/checklist#sc1.4.10) in a landscape orientation (desktop/laptop), the chat widgets on both sites can obscure a significant amount of page content.

### Overall Manual Score

Biden

8.3

Trump

6.8

The reviewer’s overall accessibility score is based on their testing and any other observations they may have made about the accessibility of the pages.

### Final Manual Accessibility Score

Biden

8.7

Trump

6.9

The ten manual accessibility scores averaged with the overall score.

## The Bottom Line

Biden

7.2

Trump

6.6

The final AIM scores, factoring in both the automated and manual scores, are less than one point apart.

Both sites are better than average pages found in the WebAIM Million, but both could improve significantly with a few relatively simple changes that would not require throwing out an entire widget or design. They would just involve tweaks to what’s already there.

The web offers independence and freedom unavailable through any other medium. Campaigns that ignore voters with disabilities can wind up alienating a large voting bloc—the one that stands to gain the most from the internet. Campaigns that become more aware of, and implement, accessibility are helping to ensure the web can be accessed by a broader population, while also empowering their own campaigns to engage with the widest possible audience.