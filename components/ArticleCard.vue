<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps<{
  article: Article
}>()

const formatDateTime = (dateString: string) => {
  return new Date(dateString).toISOString()
}
// const { favorites, saveFavorite, removeFavorite } = useFavorites()
</script>

<template>
  <article class="article-card">
    <h2><NuxtLink :to="article.internalUrl">{{ article.title }}</NuxtLink></h2>
    <p>{{ article.summary }}</p>
    <details class="article-meta">
      <summary>
        <time :datetime="formatDateTime(article.repostedDate)">{{ article.repostedDate }}</time>
      </summary>
      <span>{{ article.author }}</span>
      <span>{{ article.source }}</span>
      <NuxtLink :to="article.externalUrl" >{{ article.externalUrl }}</NuxtLink>
    </details>
    <!-- <button @click="saveFavorite(article)">Save</button> -->
  </article>
</template>

<style lang="scss">
.article-meta span {
  display: block;
}
</style>
