<script setup lang="ts">
import type { Article } from '~types/article';

defineProps<{
  article: Article;
}>();

// const { favorites, toggleFavorite, readLater } = useFavorites()
// const { user } = useUser()
</script>

<template>
  <div class="card-controls">
    <!-- <button @click="toggleFavorite(article)">Heart</button> -->
    <!-- <button @click="readLater(article)">Bookmark</button> -->
  </div>
</template>

<style lang="scss"></style>
