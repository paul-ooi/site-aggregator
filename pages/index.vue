<script setup lang="ts">
</script>

<template>
  <main>
    <img src="/sa-logo.png" alt="Site Aggregator Logo" class="logo" />
    <h1>Site Aggregator</h1>
    <section>
      <h2>Latest Articles</h2>
      <ArticleList />
    </section>
    <!-- <aside v-if="favorites.length">
      <h2>Your Favorites</h2>
      <ArticleCard 
        v-for="favorite in favorites" 
        :key="favorite.id" 
        :article="favorite" 
      />
    </aside> -->
  </main>
</template>

<style scoped>
.logo {
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
}
</style>