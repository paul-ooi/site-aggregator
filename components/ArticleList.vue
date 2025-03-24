<script setup lang="ts">
import type { Article } from '~/types/article'
// Define the prop
const props = defineProps<{
  articles: Article[]
}>()
</script>

<template>
  <div class="article-list">
    <ArticleCard 
      v-for="article in articles" 
      :key="article.title" 
      :article="article" 
    />
  </div>
</template>