<script setup lang="ts">
import type { Article } from '~/types/article'
import { useArticles } from '~/composables/useArticles'

const { articles, loading } = useArticles()
</script>

<template>
  <div class="article-list">
    <div v-if="loading">Loading articles...</div>
    <ArticleCard 
      v-else
      v-for="article in articles" 
      :key="article.id" 
      :article="article" 
    />
  </div>
</template>