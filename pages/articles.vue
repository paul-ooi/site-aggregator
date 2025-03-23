<script setup lang="ts">
import type { Article } from '~/types/article'
import ArticleList from '~/components/ArticleList.vue';

const { data: result } = await useAsyncData('articles', () => {
  return queryCollection('content').all()
})

const articles : Article[] = [];
result.value?.values().forEach((article) => {
  articles.push(<Article>{
    title: article.title,
    description: article.description,
    url: article.url,
    source: article.source,
    organitzation: article.organization,
    repostedDate: article.repostedDate,
    sourcePublishDate: article.sourcePublishDate,
    author: article.author ?? '',
    tags: article.tags ?? [],
    summary: article.summary ?? '',
  });
});

</script>
<template>
    <div>
        <ArticleList v-if="articles" :articles="articles" />
    </div>
</template>