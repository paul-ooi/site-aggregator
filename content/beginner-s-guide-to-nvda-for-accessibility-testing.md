---
title: Beginner’s Guide to NVDA for Accessibility Testing
description: If you want to understand how accessible your website really is, there’s no substitute for experiencing it as many users do, and that’s with a screen reader. One of the most widely used screen readers
url: https://dubbot.com/dubblog/2026/beginners-guide-to-nvda-for-accessibility-testing.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-04-01T10:11:24.158Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-03-19T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: e5b5a608476817196c4b8eb195e13aa9
---

If you want to understand how accessible your website really is, there’s no substitute for experiencing it as many users do, and that’s with a screen reader. One of the most widely used screen readers is **NVDA**, and the good news is that getting started with it is easier than you might think.

This guide walks through a few basics and some simple test scenarios you can try right away.

## What is NVDA?

> NVDA stands for Non-Visual Desktop Access. It is a software package that _allows blind and vision impaired people to access and interact with the Windows operating system and many third party applications. ~_ [_NV Access_](https://www.nvaccess.org/about-nvda/ "This link leaves the DubBlog website.")

Before you get started, you will need to [download and install](https://download.nvaccess.org/releases/2025.1.2/documentation/userGuide.html#NVDAQuickStartGuide "This link leaves the Dubblog website.") the latest version of NVDA. Version 2025.3.3 is available as a free download. Note that NVDA only runs on Microsoft Windows 8.1 or later. If you need a version that works on older systems like Windows 7 or Windows XP, alternative versions are available on the [NV Access download page](https://www.nvaccess.org/download/ "This link leaves the DubBlog website.").

## Learn Your Basic Keys

Screen readers rely on the keyboard instead of a mouse. NVDA has a special modifier key called the **NVDA key** , which is used in many commands. 

The **NVDA key** is set to the **Insert key** by default, but it can be changed to the **Caps Lock key** during NVDA installation. ([WebAIM](https://webaim.org/resources/shortcuts/nvda "This link leaves the DubBlog website."))

A few other keys you’ll use often:

-   **Tab** \= move to the next link or form field
-   **Shift + Tab** \= jump to the previous link or form element
-   **Arrow keys** \= read content line by line
-   **Enter** \= activate a link or button
-   **Ctrl + NVDA +** ⬇ = decrease voice rate
-   **Ctrl + NVDA +** ⬆ = increase voice rate

### Commands You Need to Get Started

Like all screen readers, NVDA offers many commands, but you only need a handful to begin meaningful accessibility testing. For a more detailed list of commands, please see [Keyboard Shortcuts for NVDA](https://webaim.org/resources/shortcuts/nvda).

#### Common NVDA navigation commands

-   **H** \= jump to the next heading
-   **1 – 6** \= jump to heading level 1 - 6
-   **K** \= jump to the next link
-   **B** \= jump to the next button
-   **Ctrl** = stop reading

## Common Beginner Checks

Even a quick pass for each of these elements can uncover major accessibility barriers.

-   Headings out of order or missing.
-   Links without descriptive text.
-   Buttons that are improperly labeled or not labeled at all.

## Don’t Be Surprised If…

So you don't get caught off guard, there may be moments when you won't hear what you expect to hear based on what you see. These moments reinforce the fact that accessibility isn't about making things look pretty, but about making them **structurally and semantically usable** for everyone.

### Headings That Confuse

As you skim through the headings using the uppercase **H key**, you may expect to hear NVDA read the headings in the order in which you see them. But NVDA may announce them in a confusing, out-of-order manner. What seemed like a clean, well-organized page suddenly sounds chaotic. Proper heading structure, along with descriptive headings, provides a logical guide for everyone navigating your content.

### Links That Leave You Guessing

Using the uppercase **K key** to move from one link to the next, you may notice non-descriptive link text like _Click here_ or _Read more_, which doesn’t make any sense when read out of context. 

With NVDA, users can press the **NVDA key + F7** to open the Elements List dialog box to hear all links on the page. Hearing a list of links titled _Click Here_ doesn’t tell the user where those links go, reinforcing the need for each link to have a clear, descriptive label. 

### Buttons that disappear

Finally, you may encounter a button that looks like a clear, clickable element on the screen, but NVDA ignores it. If a button lacks a proper accessible label or its label doesn't clearly describe what the button does, NVDA users won't know it's interactive. That means they could miss important actions or information entirely.

## Ready, Set, Go

Let’s walk through a very simple accessibility test.

Using Chrome, open [a simple blog post](https://dubbot.com/dubblog/2026/testing/screen-reader.html) or landing page of your choice. Once the page is open 

-   press **Control + Alt + N** to turn NVDA on ( **NVDA + Q** turns NVDA off),
-   then press NVDA + ⬇ to start reading at the current position.

### Take a Minute and Listen

Once active, listen to how NVDA reads the page compared to what you see on the screen. Pay close attention to how headings, links, buttons, and other interactive elements are announced. It's a great way to familiarize yourself with how NVDA navigates a page and announces the elements it encounters.

**Pro Tip:** Keep a pad and pen nearby. Make note of what’s easy to follow and interact with and where you get lost. Doing that, you learn what real users might experience.

**Note:** By default, you will be testing the keyboard accessibility of each of these elements. Make sure to track and note any discrepancies.

### Headings

Using the **H key**, jump from heading to heading. Are they in logical order? Are the headings clear and descriptive? Do they match the content they introduce?  
[Understanding SC 2.4.6: Headings and Labels (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html "This link leaves the DubBlog website.")

### Links

Use the **K key** to move through all the links. Are they clearly labeled? Does the label text make sense out of context? If the link is clearly labeled and you want to take it a step further, press the Enter key to confirm it goes where the label says it will.  
[Understanding SC 2.4.4: Link Purpose (In Context) (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html "This link leaves the DubBlog website.")

### Buttons

Use the **B key** to move between the buttons on the page. Does the button have an accessible label that clearly describes its function? If so, press the **Enter key** to activate the button to confirm the action stated in the label.  
[Understanding SC 3.3.2: Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html "This link leaves the DubBlog website.")  
[Understanding SC 1.1.1: Non-text Content (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html "This link leaves the DubBlog website.")

**Pro Tip:** Check that the buttons can be accessed using only the Tab key.

## Tips for Efficient Testing

-   [Adjust NVDA’s speaking rate](#voice-rate) and voice to something that you will be comfortable with. 
-   Take notes as you navigate. This helps turn observations into actionable remediation.
-   Practice on multiple pages and apps to get a sense of patterns and pitfalls.

Testing with NVDA is one of the quickest ways to gauge how usable your website is for screen reader users. NVDA lets you step into the user journey and hear your website the way many users do. You don’t need to master every command right away. Start simple: open a page, turn on NVDA, and try navigating with just the keyboard. You’ll gain valuable insight into how your content actually works for people relying on assistive technology, and that’s where better accessibility begins.

## Resources

-   [NVDA User Guide](https://www.nvaccess.org/files/nvda/documentation/userGuide.html "This link leaves the DubBlog website.")
-   [Keyboard Shortcuts for NVDA](https://webaim.org/resources/shortcuts/nvda "This link leaves the DubBlog website.")
-   [Getting Started Testing with NVDA](https://accessibility.huit.harvard.edu/nvda "This link leaves the DubBlog website.")
-   [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/ "This link leaves the DubBlog website.")
-   [NVDA Screen Reader Setup for Sighted Testers](https://dubbot.com/dubblog/2025/nvda-screen-reader-setup-for-sighted-testers.html)

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase specific sections of content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.