---
title: NVDA Screen Reader Setup for Sighted Testers
description: Automated accessibility testing is a powerful tool for quickly identifying many common accessibility issues and should be an integral part of your accessibility testing workflow. But it’s only one pie
url: https://dubbot.com/dubblog/2025/nvda-screen-reader-setup-for-sighted-testers.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.119Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-07-08T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 03e06cb948cfc0e78f8e269f2b5c9476
---

Automated accessibility testing is a powerful tool for quickly identifying many common accessibility issues and should be an integral part of your accessibility testing workflow. But it’s only one piece of the puzzle. To truly understand how people with disabilities experience your digital content, you need to go a step further with manual testing. And one of the most impactful manual testing methods is to use a screen reader. By navigating your site with a screen reader, you can experience firsthand how users who rely on assistive technology interact with your content, helping you identify barriers that automated tools may not detect and refine the overall user experience.

If you’re new to screen readers, the idea of testing with one might feel intimidating, but it doesn’t have to be. You don’t need to become an expert user to get valuable insights. Even a basic understanding of how to navigate with a screen reader can reveal issues like missing labels, confusing heading structures, and inaccessible interactive elements. 

In this blog post, you will learn about setting up a screen reader for testing, enabling you to incorporate this critical step into your accessibility testing and monitoring.

**Caveat:** The setup options described are for NVDA, which is a Windows-only screen reader application. This content is aimed at new or novice screen reader users, with a focus on sighted accessibility testers. All setups are optional.

After [downloading and installing NVDA](https://download.nvaccess.org/releases/2025.1.2/documentation/userGuide.html#NVDAQuickStartGuide "This link leaves the DubBlog website."), you will want to configure it to make the testing environment and workflow more efficient and easier to use, especially if you are new to screen readers.

The first thing to know about screen readers is that they all have a modifier key. A screen reader modifier key is a special key on the keyboard that, when pressed in combination with other keys, activates specific commands or features within the screen reader software. 

In NVDA, the Insert key is the default modifier key. You can change this to the **Caps Lock key** in the startup dialog box by checking **Use Caps Lock as the NVDA modifier key**.

![The Welcome to NVDA dialog box where the option Use CapLock as n NVDA modifier key and the option Show this dialog when NVDA starts are both checked.](../../images/blog-content/2025/03-nvda-welcome.png)

Next, you will want to update the **Start NVDA after I sign in** setting. Switching off this setting will prevent NVDA from running every time you log in to your PC. To switch off this setting, uncheck **Start NVDA after I sign in** on the startup dialog box.

Before you continue customizing your testing environment, familiarize yourself with the essential single-key and combo shortcuts that you will use most frequently during accessibility testing. When you see NVDA + another key, NVDA = modifier key.

H – Jump to the next heading

1–6 – Jump to heading levels (1–6)

K – Jump to the next link

T – Jump to the next table

F – Jump to the next form field

NVDA + F7 – Open a list of all elements (links, headings, landmarks)

Down Arrow – Read line by line

NVDA + Down Arrow – Read continuously from the current spot

Take a look at [WebAIM's list of single-key and combo shortcuts](https://webaim.org/articles/nvda/#navigation "This link leaves the DubBlog website.") to further customize your testing navigation.

You may want to adjust the voice settings for the screen reader output, as the default voice is a bit robotic in tone. You can also adjust the voice rate, slowing it down or speeding it up. To make these changes:

-   Press NVDA key + N
-   Navigate to Preferences, then to Settings, then to Speech
-   Adjust the voice rate to one that you are comfortable with
-   Choose a voice you like

If you would rather not hear the screen reader's output at all, you can visualize the screen reader's output by using the **Speech Viewer** found in the Tools menu of NVDA. Speech Viewer allows you to see but not hear the output of NVDA.

![An example of the Speech Viewer tool. A red arrow points from the viewer box to the content highlighted on the webpage to show how the viewer box content follows the content on the webpage.](../../images/blog-content/2025/speech-viewer-focused.png)

There are a couple of settings that can level up your testing by helping you experience web content the way your users do. You’ll find these under **Browse Mode**. **Browse Mode** is the default for reading and moving around a page. Then there’s **Focus Mode**, which takes over when it’s time to interact with elements like form fields, passing your keystrokes directly to them for hands-on interaction.

-   Go to Preferences, then Settings, then to Browse Mode. Verify that **Automatically set focus to focusable elements** is enabled.
-   Next, enable **Say all on page load** if you want NVDA to read the page automatically.  
    

Once you have completed your initial setup, you can begin testing. When conducting manual testing with a screen reader, some of the issues you want to be on the lookout for are:

-   Focus order
-   Table captions
-   Meaningful ALT text
-   Zoom and Reflow
-   Use of color only
-   Keyboard accessibility
-   Logical document structure
-   Table row and/or column headers

These and the other configuration steps outlined in this blog are meant to help you get up and running quickly to begin manual accessibility testing. They are by no means a complete list of customization options. Please refer to the list of videos and articles in the [Resources section](https://docs.google.com/document/d/13XFnZ_6eegYhzpbruVgfwNMiqnyijT6IfZm4hmsmhN4/edit?tab=t.0#bookmark=id.87ny2t6e7ltp "This link leaves the DubBlog website.") for more information.

Getting comfortable with NVDA (or any other screen reader) is a significant step toward enhancing the testing process in your [accessibility monitoring strategy](https://dubbot.com/dubblog/2025/a-guide-to-continuous-accessibility-monitoring.html "This link leaves the DubBlog website."). By pairing manual screen reader testing with automated tools, you create a more complete picture of your site’s accessibility over time. This proactive approach enables you to identify issues early, adapt to changes, and deliver a consistently inclusive experience for all users.

## Resources

-   [NVDA 2025.1.2 User Guide](https://download.nvaccess.org/releases/2025.1.2/documentation/userGuide.html "This link leaves the DubBlog website.")
-   [Screen Reader Basics: NVDA](https://youtu.be/Jao3s_CwdRU?feature=shared "This link leaves the DubBlog website.") (YouTube)
-   [Getting Started Testing with NVDA](https://accessibility.huit.harvard.edu/nvda "This link leaves the DubBlog website.")
-   [Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/ "This link leaves the DubBlog website.")
-   [Accessibility Testing with the NVDA Screenreader](https://youtu.be/Vx1vSd5uYS8?feature=shared "This link leaves the DubBlog website.") (YouTube)
-   [Setting up a screen reader testing environment on your computer](https://www.sarasoueidan.com/blog/testing-environment-setup/ "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.