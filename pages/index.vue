<script setup lang="ts">
useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '~images/sa-logo.ico',
    },
  ],
});
</script>

<template>
  <SiteNavigation />
  <main>
    <h1>Site Aggregator</h1>
    <img src="/images/sa-logo.png" alt="Site Aggregator Logo" class="site-logo" />
    <!-- <aside v-if="favorites.length">
      <h2>Your Favorites</h2>
      <ArticleCard 
        v-for="favorite in favorites" 
        :key="favorite.id" 
        :article="favorite" 
      />
    </aside> -->
  </main>
  <Footer />
</template>

<style scoped>
.site-logo {
  /* grid-area: content; */
  max-width: 200px;
  height: auto;
  margin-bottom: 1rem;
}
h1 {
  /* grid-area: sidebar; */
}

main {
  display: grid;
  grid-template-areas: '. content .';
  grid-template-columns: minmax(var(--gutter), 1fr) 3fr minmax(var(--gutter), 1fr);
  grid-template-rows: minmax(0,auto);
  justify-items: center;

  * {
    grid-column: 2/-2;
  }
}
</style>
