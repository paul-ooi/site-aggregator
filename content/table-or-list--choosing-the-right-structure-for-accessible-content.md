---
title: Table or List? Choosing the Right Structure for Accessible Content
description: Tables and lists are both very useful ways to organize and present content. But they’re both structured to present different types of content. Choosing the right one isn't just a design decision.
url: https://dubbot.com/dubblog/2026/table-or-list-choosing-the-right-structure-for-accessible-content.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-09-20T07:49:44.219Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2026-09-17T04:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: 71af5d2941170eec46b5bbd8d981c42f
---

Tables and lists are both very useful ways to organize and present content. But they’re both structured to present different types of content. Choosing the right one isn't just a design decision. It’s also an editorial and accessibility decision. The right choice can make content easier to understand and navigate for everyone, including people who use screen readers, magnification, keyboard navigation, or mobile devices.

**Let’s start with a question**: Is the content relational data, or is it simply a group of related items? 

**Answer**: If rows and columns are needed to make sense of the relationship between data points, use a table. If not, consider using a list.

For example, a class schedule.

A simple list would tell you that Biology meets on Monday, Wednesday, and Friday. But with the row-and-column relationship, you can quickly associate a particular course with a particular day and time.

**Course**

**Monday**

**Wednesday**

**Friday**

Biology 101

9:00 AM

9:00 AM

9:00 AM

English 201

10:30 AM

No class

10:30 AM

Chemistry 110

No class

1:00 PM

No class

## When Should You Use a List?

Use a list when you're presenting a collection of related items, concepts, or steps.

Lists work particularly well for:

-   Steps in a process or procedure.
-   A collection of related items.
-   Requirements or recommendations.

Lists are generally easy to scan visually, straightforward for screen reader users to navigate, and require less cognitive effort, making information easier to understand quickly. 

They are especially helpful on smaller screens because list items reflow naturally to the available space rather than requiring horizontal scrolling. 

**Note:** As [Dax Castro](https://www.linkedin.com/in/daxcastro/ "This link leaves the DubBlog website.") points out, [long,nested lists](https://lnkd.in/p/eUNEnxzx "This link leaves the DubBlog website.") can overwhelm screen reader users and folks with cognitive challenges. So keep your lists simple, no more than two levels deep.

### Make Your List Accessible

Instead of creating the appearance of a list with manually typed bullet symbols or numbers, use proper semantic HTML with **<ul>** for unordered lists and **<ol>** for ordered, sequential step lists. 

This supports [WCAG 2.2 Success Criterion 1.3.1, Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships "This link leaves the DubBlog website."), which requires meaningful structure and relationships to be programmatically determinable.

Use **bulleted lists** for a list of related items. For example: 

-   Apples
-   Oranges
-   Bananas
-   Grapes
-   Strawberries

Use a **numbered list** when order matters, such as steps that must be completed in a specific sequence. For example:

1.  Open the website.
2.  Select Sign In.
3.  Enter your username and password.
4.  Select Submit.
5.  Confirm that you’re signed in.

## When Should You Use a Table?

Use a table when people need to understand relationships between two data points. For example, the class schedule above, financial data, statistics, or other content where the meaning of the data in one cell depends on its corresponding row and column headers.

For example, this high tide schedule.

For this type of content, a table is more effective than a list because the information has multiple related attributes of _Day, Time,_ and _Tide Level_ that need to be compared across rows to make sense and be of value.

**Day**

**Time**

**Tide Level**

Monday

8:15 AM

3.2 ft

Tuesday

9:02 AM

3.5 ft

Wednesday

9:48 AM

3.7 ft

Using a table to convey this type of content helps:

-   make relationships clear, as each day is directly associated with its corresponding time and tide level.
-   support quick comparisons so the reader can scan down the columns to compare times or tide levels across days.
-   provide a consistent structure with each row following the same pattern, making the information predictable and easier to understand.

Tables can be particularly useful for people who need to compare multiple pieces of content at once. But they can also be harder to navigate with a screen reader or on a small screen, so they shouldn't be the default choice when a list or even a paragraph would communicate the information just as well. 

When in doubt as to whether to use a table or a list, go back to our original question (and the answer) at the beginning of this blog post:

**Is the content relational data, or is it simply a group of related items?**  

### Make Your Table Accessible

-   Use [proper semantic table markup](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table "This link leaves the DubBlog website."), not a visual grid.
-   Identify row and column headers with **<th>**.
-   Associate headers and data cells so meaning is programmatically determined.
-   Provide a [meaningful caption](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/caption "This link leaves the DubBlog website.") when useful.
-   Keep the structure simple and avoid merged cells.
-   Ensure sufficient [text and background contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html "This link leaves the DubBlog website.").

These practices also support [WCAG 2.2 Success Criterion 1.3.1, Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships "This link leaves the DubBlog website."), by ensuring that relationships between headers and data can be programmatically determined.

## Simplicity is an Accessibility Strategy

Accessibility isn’t always about technology. Sometimes, it’s about the content itself and making thoughtful, strategic choices about how that content is structured from the start. The goal is to choose the simplest structure that communicates information clearly and works well for the widest range of people. Knowing when to use a table and when a simple list will do is an editorial and design decision that will make content easier to scan, understand, and navigate.

Good accessibility often starts with simple choices like less complexity, more clarity, and a structure that helps people get to the information they need.

## Resources

-   [7 Core Accessibility Skills > Lists](https://accessibility.umn.edu/guides-resources/7-core-accessibility-skills/lists "This link leaves the DubBlog website.")
-   [When to use tables: Ensuring accessibility for all](https://www.digital.nsw.gov.au/article/when-to-use-tables-ensuring-accessibility-for-all "This link leaves the DubBlog website.")
-   [Avoid Excessive Bullet Levels](https://lnkd.in/p/eUNEnxzx "This link leaves the DubBlog website.") (LinkedIn, [Dax Castro](https://www.linkedin.com/in/daxcastro/ "This link leaves the DubBlog website."))
-   [Accessibility tip: Sometimes a table isn't the best option](https://www.linkedin.com/posts/toddmarquisboutin_accessibility-education-edtech-activity-7376641001924218881-Lj5X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAACmLHMBpb9Qho4Thxy4VJBQ9l5qz-BYvzA "This link leaves the DubBlog website.") (LinkedIn, [Todd Marquis Boutin](https://www.linkedin.com/in/toddmarquisboutin/ "This link leaves the DubBlog website."))

A human author creates the DubBlog posts. The AI tools Gemini and ChatGPT are sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.