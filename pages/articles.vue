<script setup lang="ts">
import type { Article } from '~types/article';
import ArticleList from '~/components/ArticleList.vue';

const { data: result } = await useAsyncData('articles', () => {
  return queryCollection('content').all();
});
const articles: Article[] = [];
result.value?.forEach((article) => {
  articles.push(<Article>{
    title: article.title,
    description: article.description,
    externalUrl: article.url,
    internalUrl: article.path,
    source: article.source,
    organization: article.organization,
    repostedDate: article.repostedDate,
    sourcePublishDate: article.sourcePublishDate,
    author: article.author ?? '',
    tags: article.tags ?? [],
    summary: article.summary ?? '',
  });
});

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
    <ArticleList v-if="articles" :articles="articles" />
  </main>
  <Footer />
</template>
<style scoped>
main {
  display: grid;
  grid-template-areas: '. content .';
  grid-template-columns: minmax(var(--gutter), 1fr) 3fr minmax(var(--gutter), 1fr);
  grid-template-rows: minmax(0, auto);
}
</style>
