---
title: Meet AIMAC: Redefining Accessibility in AI
description: The AI Model Accessibility Checker (AIMAC) is a groundbreaking, open-source tool designed to hold Large Language Models (LLMs) accountable for how effectively they generate accessible HTML.
url: https://dubbot.com/dubblog/2025/meet-aimac-redefining-accessibility-in-ai.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.226Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-06-12T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 90030013e9919ec8ba7385438892042b
---

The AI Model Accessibility Checker (AIMAC) is a groundbreaking, open-source tool designed to hold Large Language Models (LLMs) accountable for how effectively they generate accessible HTML.

By using neutral, nonspecific prompts, just like everyday users might, AIMAC tests whether AI can produce inclusive, standards-aligned code without being explicitly instructed to do so. It provides a critical lens for evaluating how well these models support digital accessibility by default.

The AIMAC was developed collaboratively by the [GAAD Foundation](https://gaad.foundation/ "This link leaves the DubBlog website.") and [ServiceNow](https://www.servicenow.com/ "This link leaves the DubBlog website.") and was officially introduced on May 15, 2025, to coincide with [Global Accessibility Awareness Day](https://accessibility.day/ "This link leaves the DubBlog website.") (GAAD). 

The AIMAC functions by sending prompts to LLMs and then analyzing the returned HTML code using the axe-core accessibility engine. It then generates a comparative score weighted by the severity of the accessibility issue. The lower the score, the higher the rating of the LLM.

It also supports fully customizable prompts, making it adaptable to different use cases from design and layout to semantic structure.

The open-source files for the AIMAC will be available for [download on GitHub](https://github.com/GAAD-Foundation/AIMAC "This link leaves the DubBlog website.") in early June 2025.

Until available, you can view how different models perform in generating accessible code by exploring the [AIMAC Accessibility Leaderboard](https://aimac.ai/?view=wcag22aa_all "This link leaves the DubBlog website."). _Critical_ issues add 5 points; Serious issues add 2 points. Scores are based on the active rule set. The AIMAC Accessibility Leaderboard includes two rule-set tabs:  

WCAG 2.2 AA - Check against Web Content Accessibility Guidelines 2.2 Level A & AA.  
![WCAG 2.2 rule set tab with AIMAC Accessibility Leaderboard at the top and a list of several LLM below.](../../images/blog-content/2025/WCAG-AIMAC-Board.png)  

WebAIM Top 6 - Focuses on the six most common WCAG issues identified by [WebAIM's analysis](https://webaim.org/projects/million/#wcag "This link leaves the DubBlog website."). These six errors account for 96% of all automatically detectable homepage errors.

![WebAIM Top 6 rule set tab with AIMAC Accessibility Leaderboard at the top and a list of several LLM below.](../../images/blog-content/2025/WebAIM-AIMAC-Board.png)

By holding AI models accountable for the accessibility of their output, the AIMAC is driving meaningful change across the tech industry. Beyond benchmarks, it's helping to shape a future where inclusive digital experiences are the norm, not the exception, for the 1.3 billion people living with disabilities worldwide.

"Accessibility must be a foundational requirement as AI reshapes our digital future," said [Joe Devon](https://www.linkedin.com/in/joedevon/ "This link leaves the DubBlog website."), GAAD co‑founder. "With AI adoption accelerating, there's a risk of the industry becoming a 'winner takes all' space dominated by a handful of companies. If accessibility isn't prioritized, people with disabilities risk being systematically excluded from AI's transformative potential. AIMAC helps address this risk by embedding accessibility as a baseline standard in AI innovation.

## Resources

-   [Can Your AI Code for Everyone?](https://theaieconomy.substack.com/p/aimac-ai-accessible-code-checker "This link leaves the DubBlog website.")
-   [AIMAC Accessibility Leaderboard](https://aimac.ai/?view=wcag22aa_all "This link leaves the DubBlog website.")
-   [The Open‑Source AI Accessibility Checker Holding LLMs Accountable](https://www.vktr.com/ai-market/the-opensource-ai-accessibility-checker-holding-llms-accountable/ "This link leaves the DubBlog website.")
-   [A Practical Guide to AI Governance and Embedding Ethics in AI Solutions](https://www.vktr.com/digital-experience/a-practical-guide-to-ai-governance-and-embedding-ethics-in-ai-solutions/ "This link leaves the DubBlog website.")
-   [Global Accessibility Awareness Day (GAAD) Foundation Launches AI Accessibility Checker with ServiceNow to Advance Inclusive Code Standards](https://gaad.foundation/news/ai-a11y-checker "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.