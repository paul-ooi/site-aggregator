[ ] Add guardrails against empty markdown content; If a content page has frontmatter metadata but no main content, we should not keep that markdown file
[x] Fix Colophon to have technology stack items to each have their official documentation website referenced
[ ] Fix Responsive design of the single article template page so that the aside sidebar can be below the content on mobile, a remains on the left column on desktop sized screens
[ ] Create a markdown file to explore a new feature - AI Summary
    [ ] Identify maximum 3 or minimum 2 possible approaches to using AI in a github workflow to summarize article content that doesn't already have a summary in the frontmatter
    [ ] Summary would be created in its own github workflow to be run separately from `collect-content` and other workflows, but would still create a new PR like `collect-content` workflow
    [ ] Summary is less than 200 words
    [ ] Summary is saved as a short form paragraph in a new frontmatter metadata property of the content article
    [ ] Summary on the Front end should be included in the Aside component
    [ ] Summary label should have the abbr element for TLDR