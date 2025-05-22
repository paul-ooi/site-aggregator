<script setup lang="ts">
import type { Article } from '~types/article';

defineProps<{
  article: Article;
}>();
</script>

<template>
  <article class="article-card">
    <h2 class="card-title" v-if="article.title">
      <NuxtLink class="article-link" :to="article.internalUrl">{{ article.title }}</NuxtLink>
    </h2>
    <p v-if="article.description">{{ article.description }}...</p>
    <ArticleCardDetails :article="article" />
    <ArticleCardControls :article="article" />
  </article>
</template>

<style lang="scss" scoped>
.article-card {
  position: relative;
  border: 1px solid var(--black);
  padding: 1rem;
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
    bottom: 0;
  }
}
.article-link:hover {
  text-decoration: underline;
}
.card-title {
  font-size: clamp(1.25rem, 2vw, 1.5em);
  margin-block: 0 0.5em;
}
</style>
