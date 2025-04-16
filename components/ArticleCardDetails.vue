<script setup lang="ts">
import type { Article } from '~types/article'

defineProps<{
  article: Article
}>()

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toISOString()
}
</script>

<template>
  <details class="article-meta" open>
    <summary>
      <time :datetime="formatDateTime(article.repostedDate)">{{ article.repostedDate }}</time>
    </summary>
    <span>{{ article.author }}</span>
    <span>{{ article.source }}</span>
    <NuxtLink class="article-link--external" :to="article.externalUrl" >{{ article.externalUrl }}</NuxtLink>
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
</style>
