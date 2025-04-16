<script setup lang="ts">
import type { Article } from '~types/article'

defineProps<{
  article: Article
}>()

</script>

<template>
  <article class="article-card">
    <h2><NuxtLink class="article-link" :to="article.internalUrl">{{ article.title }}</NuxtLink></h2>
    <p>{{ article.summary }}</p>
    <ArticleCardDetails :article="article" />
    <ArticleCardControls :article="article" />
    <!-- <button @click="saveFavorite(article)">Save</button> -->
  </article>
</template>

<style lang="scss">
.article-card {
  position: relative;
}
.article-link {
  color: #007bff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
  }
}
.article-link:hover {
  text-decoration: underline;
}
</style>
