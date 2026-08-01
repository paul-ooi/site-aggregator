---
title: The Problem with Blanks for People Who Are Blind or Low Vision
description: A sighted person glances at an empty space and reads it as part of a whole. A screen reader user lands on that same empty space and reads it as a question: Is this blank on purpose, did something just
url: https://buttondown.com/access-ability/archive/the-problem-with-blanks-for-people-who-are-blind/
source: https://buttondown.com/access-ability
organization: Access * Ability
repostedDate: 2026-08-01T10:44:28.599Z
tags:
  - accessibility
sourcePublishDate: 2026-07-01T14:22:24.000Z
author: 
contentHash: d2f0a422f662f9de8e64993855d67bca
---

![A computer with a completely white screen sitting on a wooden desk surrounded by foliage](https://assets.buttondown.email/images/94ca5801-350d-4744-873b-d3a664c2ffa6.jpeg?w=960&fit=max)

*A computer with a completely white screen sitting on a wooden desk surrounded by foliage*

A sighted person glances at an empty space and reads it as part of a whole. A screen reader user lands on that same empty space and reads it as a question: Is this blank on purpose, did something just break, or did I do something wrong?

Those questions are at the heart of a problem that shows up everywhere in documents and on websites, and it almost never gets the attention it deserves. White space is not neutral for people who are blind or have low vision. It is ambiguous. And ambiguity is time-consuming and exhausting.

## Empty by design versus empty by accident

When a screen reader encounters content with no text, it does one of two things.

a)    It announces “blank,” or

b) It says nothing at all and moves on.

Neither of those tells the user why the content is empty.

A blind user cannot see that the rest of the page looks fine. They cannot glance at the surrounding layout and conclude that the white space is intentional. Every blank becomes an interruption where a decision must be made: do I trust that this is supposed to be empty, or do I assume the page failed to load, the data did not populate, it isn’t compatible with my screen reader, or did I miss something?

Sighted users resolve that question in a fraction of a second with peripheral vision. Screen reader users have to investigate, and investigating takes time and erodes confidence in the whole interface.

## Blank table cells

Tables are where this problem bites hardest, because tables make a promise. When you build a data table, you are telling the user that every row and every column mean something. When a screen reader announces a cell as “blank,” the user has no way to know which of these is true:

•        The value is genuinely zero or not applicable.

•        The value exists, but the author forgot to enter it.

•        The value failed to load from a database or feed.

•        The cell is empty only because it is being used for visual spacing.

Each of those calls for a different reaction, and the screen reader user cannot distinguish between them. A sighted reader skims the column, sees the pattern, and fills in the meaning. A screen reader user navigating cell by cell gets identical “blank” announcements that mean very different things.

### The fix

Do not leave data cells empty. If a value does not apply, put something there that says so. The text “N/A” or “None” communicates intent: it tells the user the author considered this cell and decided it has no applicable value. Even a bare hyphen is better than nothing, but be aware that a single “-” is announced inconsistently across screen readers depending on their punctuation settings, so “N/A” or “None” is the more reliable choice.

## Empty paragraphs and blank lines

Authors love pressing the Enter key. Need a little breathing room between a heading and a paragraph? Press Enter twice. Want a gap before a signature block? Add three blank lines. Visually, it looks fine, but it is less than optimal for screen reader users.

Every one of those empty paragraphs is a stop on the screen reader’s digital journey through your document or web page. As the user scrolls through the document, the screen reader announces “blank” for each empty line. Three blank lines become “blank, blank, blank” with no information attached, leaving the user to wonder whether they are passing intentional spacing or content that did not render.

### The fix

Use paragraph spacing, not blank lines. This feature is found in Word, in the Paragraph dialog under the Layout tab. You can set Space Before and Space After on the paragraph itself, or adjust line spacing, instead of pressing Enter to create gaps. The visual result is the same generous white space, but the screen reader sees a clean run of real content with no phantom blank stops in between. Built-in heading styles already include spacing, which is another reason to use them instead of manually spacing your headings.

## Spaces and tabs used for formatting

The same instinct that creates extra blank lines also creates extra spaces. People use the space bar to indent a paragraph, center a title, push a date to the right margin, or line up columns of text without a real table.

For a screen reader user, runs of spaces are, at best, invisible and, at worst, confusing. A title with twenty leading spaces is not centered for anyone using assistive technology; it is just a line that may announce oddly. Columns aligned with spaces fall apart completely because the screen reader reads straight across in document order, and the visual alignment carries no meaning.

### The fix

Use the tools built for layout. Indents, tab stops, alignment settings, real tables, and table cell alignment all produce the visual result you want while preserving meaning for assistive technology. White space created with a real formatting tool is structured. Whitespace created with the spacebar is noise.

## Empty search results and other empty states

The ambiguity problem caused by blanks is not limited to documents. It appears online whenever an interface has an empty state, and the most common empty state is a search that returns no results.

Imagine a blind user typing a query and pressing Enter. The results region updates to show nothing. A sighted user sees the blank results area, maybe notices a small “no results” line, possibly combined with a cute little graphic, and instantly understands. Screen readers may hear nothing at all. Focus might not move. There might not be a live region to trigger an announcement. They are left with the worst version of the blank question: did the search return zero results, is it still loading, did it fail, or did my query even get submitted?

### The fix

Two things have to happen. First, the empty state needs real, explicit text, such as “No results found for your search. Try different keywords.” Never communicate an empty result with only an icon, a faded illustration, or by showing nothing at all. Not only is it a bad experience, but it is probably also a WCAG 3.3.3 violation.

Second, that message must be announced. This is exactly what WCAG success criterion 4.1.3, Status Messages, addresses. A “no results” message should be placed in a live region, for example, with an ARIA live or role attribute.  This means the announcement reaches the screen reader user automatically, without them having to go out of their way to find it. The same applies to empty inboxes, shopping carts, dashboards, and any other “nothing here yet” state: state what is happening, and ensure it is announced.

## It all comes down to two things

The first is to create a genuinely inclusive experience; you must understand how your users are interacting with what you are building.  That includes users who access what you are building via assistive technology. Watching them interact with your screens and pages using screen readers will give you a whole new appreciation for the erroneous assumptions you’ve made.

The second is intent. Blanks communicate nothing about why they are blank, and a screen reader user cannot infer the why from the surrounding layout the way a sighted user can. The fix is almost always the same: replace ambiguous emptiness with an explicit signal.

•   Put “N/A” or “None” in a data cell instead of leaving it empty.

•        Use paragraph spacing instead of empty paragraphs.

•        Use real layout tools instead of spaces and tabs.

•        Give empty states a clear message, and make sure it is announced.

None of this is hard. It is merely a matter of deliberately breaking bad habits formed when assuming that all people interacting with a workflow will be sighted.  When you stop using emptiness as a design element and start treating it as information that must be stated out loud, your documents and interfaces become clearer for everyone and far less ambiguous for the people who depend on a screen reader to tell them what is actually there.