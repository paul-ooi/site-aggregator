<script setup lang="ts">
import type { Article } from '~/types/article';
// Define the prop
const props = defineProps<{
  articles: Article[];
}>();
</script>

<template>
  <div class="article-list">
    <ArticleCard v-for="article in articles" :key="article.title" :article="article" />
  </div>
</template>
<style scoped lang="scss">
@use '~styles/variables' as *;

.article-list {
  grid-area: content;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(1.75rem, 1fr);
  gap: 1rem;
}

@media screen and (min-width: $md) {
  .article-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: $lg) {
  .article-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
