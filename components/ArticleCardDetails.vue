<script setup lang="ts">
import type { Article } from '~types/article';

defineProps<{
  article: Article;
}>();

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toISOString();
};
const prettyDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <details class="article-meta" open>
    <summary>
      <time :datetime="article.repostedDate">{{ prettyDate(article.repostedDate) }}</time>
    </summary>
    <span v-if="article.author">{{ article.author }}</span>
    <span v-if="article.organization">{{ article.organization }}</span>
    <p class="tags" v-if="article.tags?.length"><strong>Tags:</strong> {{ article.tags.join(', ') }}</p>
  </details>
</template>

<style lang="scss">
.article-meta span {
  display: block;
}
.article-meta time {
  font-size: 0.8em;
  color: #666;
}
.article-meta .article-link {
  color: #007bff;
  text-decoration: none;
}
.article-meta .article-link:hover {
  text-decoration: underline;
}
.tags {
  margin-block: 0;
  text-transform: capitalize;
}
</style>
