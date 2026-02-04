---
title: Label it Accessible
description: Imagine a spice rack with only abstract symbols on the jars. You might recognize a chili pepper as \"spicy,\" but what about a swirly symbol? Is that cinnamon or something else entirely? You're left gue
url: https://dubbot.com/dubblog/2025/label-it-accessible.html
source: https://dubbot.com/dubblog/index.html
organization: https://dubbot.com/dubblog/index.html
repostedDate: 2026-02-04T06:45:02.559Z
tags:
  - technology
  - accessibility
sourcePublishDate: 2025-03-20T00:00:00.000Z
author: Maggie Vaughan, CPACC
contentHash: cbd93e6d3599a17c7ae3cd72ddcb936f
---

Imagine a spice rack with only abstract symbols on the jars. You might recognize a chili pepper as "spicy," but what about a swirly symbol? Is that cinnamon or something else entirely? You're left guessing and potentially ruining your dish.

Now imagine a spice rack with both symbols and clear names. You see the chili pepper and the word "Paprika." You now have a much clearer understanding of what you're getting, ensuring you choose the correct spice according to your recipe.

Just like the text labels helped identify the spices, using text labels in your web design provides structure, eliminates ambiguity, and prevents confusion. It also makes your digital content accessible to users with diverse needs and abilities and simplifies navigation, empowering users to achieve their goals and complete tasks efficiently.

In this post, we'll look at six webpage elements for which text labels should be applied and why they are essential.

**Icons**  
Whenever we choose between an icon and a text label, we decide on cognitive load. Rather than viewing icons and text labels as competing design choices, we should view them as complementary tools. By strategically combining them, we minimize cognitive load and ensure users can focus on their tasks, not interface interpretation.

**Documents**  
"The descriptive title of an HTML Web page is marked up with the <title> element so that it will be displayed in the title bar of the user agent." ~ [Understanding SC 2.4.2: Page Titled (Level A)  
  
](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)The <title> describes the purpose of the page. For example, "Web Accessibility Check - DubBot" is in [the title bar on this page](https://dubbot.com/features/web-accessibility-checks.html "This link leaves the DubBlog website."). This is essential for users of assistive technology like screen readers as they use that description to infer the content of the page.  
  
The <title> element is also helpful for sighted users. For example, I usually open at least 4 to 5 webpage tabs while working. A quick glance at the title bar of any given tab tells me which tab to click when I need to return to a specific page.

**Image Maps**  
An image map is an image that is divided into clickable regions defined by <area> elements.  
  
Provide descriptive ALT text to describe the main image and any clickable regions defined by an <area> element.

![A white rectangle and a white circle inside of a blue square. The rectangle and the circle have a number centered in black. The rectangle has the number 1; the circle has the number 2.](../../images/blog-content/2025/blue-square-area.png)  
`<img src="image-map.jpg"  usemap="#image-map" alt="A white rectangle and a white circle inside of a blue square. The rectangle and the circle have a number centered in black. The rectangle has the number 1; the circle has the number 2.">   <map name="image-map">   <area shape="rect" coords="x1,y1,x2,y2" href="link1.html" alt="A white rectangle with a black number 1 in the center. The rectangle links to Link One">   <area shape="circle" coords="cx,cy,radius" href="link2.html" alt="A white circle with a black number 2 in the center. The circle links to Link Two">   </map>`

**Form Controls**  
Provide labels for all form controls, including text fields, checkboxes, radio buttons, and drop-down menus. In most cases, this is done using the <label> element. ~ [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/ "This link leaves the DubBlog website.")

**First Name**: 

 **Subscribe to our newsletter**

Submit

For the above form example:

-   "Whenever possible, use the label element to [associate text with form elements explicitly](https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-explicitly "This link leaves the DubBlog website."). The _for_ attribute of the label must exactly match the id of the form control."  
    `<label for="firstname">First name:</label>   <input type="text" name="firstname" id="firstname"><br>   <input type="checkbox" name="subscribe" id="subscribe">`  
    `<label for="subscribe">Subscribe to newsletter</label>`

-   "In some situations, form controls cannot be labeled explicitly. In this case, the label element is used as a container for both the form control and the label text so that [the two are associated implicitly](https://www.w3.org/WAI/tutorials/forms/labels/#associating-labels-implicitly "This link leaves the DubBlog website.")."  
    `<label>First name: <input type="text" name="firstname"></label>   <br>   <label><input type="checkbox" name="subscribe">Subscribe to newsletter</label>`

You should also provide additional input instructions when needed to address control-specific constraints, such as data ranges and format requirements.

**Iframes**  
The <iframe> HTML tag creates an inline frame (thus the name “iframe”), which allows you to embed another HTML document into the current webpage. Iframes frequently display external content like videos, ads, maps, and interactive components.

A title attribute should be used to describe the contents of the iframe.

For example, in the YouTube iframe code below, YouTube defaults the title attribute to “YouTube video player.” That does not describe the contents of the iframe. In this case, the iframe contains a video of Lady Gaga and Tony Bennett singing a duet. An accessible and descriptive title attribute would be "Tony Bennett, Lady Gaga - I've Got You Under My Skin."

`<iframe width="560" height="315" src="https://youtu.be/xyTa_gJkYwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

**Interactive Elements  
**Interactive elements include links, form elements, buttons, and any elements intended for users to interact with. The way to label an element depends on its type. As previously discussed, form elements, use a <label>. The element's text content should provide the label for links, buttons, and clickable elements. 

For example, links should be [written with discernible text](../2024/discernible-text.html). "Discernible text is text that can be seen, perceived, and understood by website users while conveying the purpose of the link." Using phrases like "Click Here" or "Learn More" are not discernible and do not provide the purpose of the link. [DubBot has a Custom Policy that exposes such instances](https://help.dubbot.com/en/articles/8095702-policy-set-review-link-text-for-seo-and-accessibility-best-practices "This link leaves the DubBlog website.").

"By default, a button's accessible name is the content between the opening and closing <button> tags, an image's accessible name is the content of its alt attribute, and a form input's accessible name is the content of the associated <label> element." ~ [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label "This link leaves the DubBlog website.")

Accessible text labels are essential for ensuring that web content is usable by people with disabilities. Text labels are also great for SEO, as search engines rely on text labels to understand the content of your links, images (ALT text), and interactive elements. 

Clear, descriptive labels create a smooth, intuitive experience for all users. This builds trust and encourages user engagement, fostering a positive brand image.

In essence, text labels are the indispensable signage that transforms a confusing digital structure into an accessible, navigable, and welcoming space for everyone.

## Resources

-   [In Defense of Text Labels](https://www.chrbutler.com/in-defense-of-text-labels "This link leaves the DubBlog website.")
-   [Text Labels and Names](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Text_labels_and_names "This link leaves the DubBlog website.")
-   [Provide Accessible Labels and Instructions](https://accessibility.huit.harvard.edu/provide-accessible-labels-and-instructions "This link leaves the DubBlog website.")
-   [Understanding SC 3.3.2: Labels or Instructions (Level A)](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html "This link leaves the DubBlog website and goes to the G2 website, review titled \"Very helpful tool for our company and clients\"")
-   [Technique H64: Using the title attribute of the iframe element](https://www.w3.org/WAI/WCAG21/Techniques/html/H64 "This link leaves the DubBlog website.")
-   [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/TR/WCAG20-TECHS/H24.html "This link leaves the DubBlog website.")

A human author creates the DubBlog posts. The AI tool Gemini is sometimes used to brainstorm subject ideas, generate blog post outlines, and rephrase certain portions of the content. Our marketing team carefully reviews all final drafts for accuracy and authenticity. The opinions and perspectives expressed remain the sole responsibility of the human author.