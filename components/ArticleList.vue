<script setup lang="ts">
import type { Article } from '~/types/article'
// import { useArticles } from '~/composables/useArticles'

// const { articles, loading } = useArticles()
// Define the prop
const props = defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="article-list">
    <!-- <div v-if="loading">Loading articles...</div> -->
    <ArticleCard 
      v-for="article in articles" 
      :key="article.title" 
      :article="article" 
    />
  </div>
</template>