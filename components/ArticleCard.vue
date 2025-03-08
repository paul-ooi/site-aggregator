<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps<{
  article: Article
}>()

// const { favorites, saveFavorite, removeFavorite } = useFavorites()
</script>

<template>
  <article class="article-card">
    <h2>{{ article.title }}</h2>
    <p>{{ article.summary }}</p>
    <div class="article-meta">
      <span>{{ new Date(article.publishDate).toLocaleDateString() }}</span>
      <span>{{ article.source }}</span>
    </div>
    <!-- <button @click="saveFavorite(article)">Save</button> -->
  </article>
</template>