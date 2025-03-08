<script setup lang="ts">
</script>

<template>
  <main>
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