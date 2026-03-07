# Feature Exploration: AI Summary

## Overview

Articles collected by the aggregator often lack a concise summary. This feature would use AI to generate a short summary (under 200 words) for articles that don't already have one. The summary would be stored as a `summary` frontmatter property and displayed in the article's Aside sidebar with a TLDR label.

## Approaches

### 1. GitHub Actions with Claude API (Recommended)

A dedicated GitHub workflow runs on a schedule or manual dispatch. It scans `content/*.md` files for articles missing a `summary` frontmatter property, reads each article's body content, and sends it to the Anthropic Claude API with a prompt to produce a summary under 200 words. The workflow writes the summary back into the frontmatter and opens a PR.

**Pros:**
- Direct API control over prompt, model, and token limits
- Claude excels at concise summarization
- Simple implementation with a single script and API key secret

**Cons:**
- Requires an Anthropic API key stored as a repository secret
- API costs scale with article count and body length

### 2. GitHub Actions with OpenAI API

Same workflow structure as approach 1, but using the OpenAI Chat Completions API (GPT-4o-mini or similar). The script reads articles missing summaries, sends the body to OpenAI, and writes the response back to frontmatter.

**Pros:**
- GPT-4o-mini is cost-effective for short summarization tasks
- Well-documented API with broad community support

**Cons:**
- Requires an OpenAI API key stored as a repository secret
- Less control over output style compared to Claude's instruction-following

### 3. GitHub Actions with a Local Model via Ollama

A self-hosted approach where the workflow installs Ollama in the GitHub Actions runner, pulls a small model (e.g., Llama 3), and generates summaries locally without external API calls.

**Pros:**
- No API keys or external service dependencies
- No per-request costs

**Cons:**
- Model download adds several minutes to each workflow run
- Smaller models produce lower-quality summaries
- GitHub Actions runners have limited memory, constraining model size

## Workflow Design

The AI Summary workflow would be a separate GitHub Actions workflow (`summarize-content.yaml`), independent from `collect-content.yaml`. It follows the same PR-based pattern:

1. Checkout the repository
2. Install Node.js and pnpm
3. Run a summarization script that:
   - Reads each `content/*.md` file
   - Skips articles that already have a `summary` in frontmatter
   - Extracts the markdown body content
   - Sends content to the AI API with a prompt constraining output to under 200 words
   - Writes the summary into the file's frontmatter as the `summary` property
4. Creates a PR with the updated content files

The workflow can be triggered manually (`workflow_dispatch`) or on a schedule separate from content collection.

## Summary Storage

The summary is saved as a `summary` frontmatter property in the content markdown file. This property already exists in the content schema (`content.config.ts`) and the `Article` TypeScript interface (`types/article.d.ts`) as an optional string field.

Example frontmatter with summary:

```yaml
---
title: Article Title
description: Short description
url: https://example.com/article
source: https://example.com
organization: Example Org
repostedDate: 2026-02-08T00:00:00.000Z
summary: This article examines how organizations can build sustainable accessibility programs by embedding inclusive design into their development workflows rather than treating it as an afterthought.
sourcePublishDate: 2026-01-15T00:00:00.000Z
author: Jane Doe
contentHash: abc123
---
```

## Front-End Display

The summary would appear in the `<aside>` sidebar of the single article template (`pages/[...slug].vue`). The label uses an `<abbr>` element for the TLDR acronym:

```html
<p v-if="page.summary">
  <strong><abbr title="Too Long; Didn't Read">TLDR</abbr>: </strong>
  {{ page.summary }}
</p>
```

This provides screen reader users with the expanded form of the abbreviation while keeping the display compact.
