<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  console.log('fetching page', route.path)
  return queryCollection('content').path(route.path).first()
})

// definePageMeta({
//   path: `${process.env.NUXT_APP_BASE_URL || ''}/${route}`,
// })
useSeoMeta({
  title: `${page?.value?.title} | Site Aggregator`,
  ogTitle: `${page?.value?.title} | Site Aggregator`,
  description: page?.value?.description,
  ogDescription: page?.value?.description,
  ogImage: `${'~images/sa-logo.png'}`,
})
</script>
<template>
    <div>
      <!-- This page correctly has only one single root element -->
      <ContentRenderer v-if="page" :value="page" />
    </div>
</template>