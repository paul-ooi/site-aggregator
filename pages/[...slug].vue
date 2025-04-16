<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
useHead({
  link:[
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '~images/sa-logo.ico'
    }
  ]
});
useSeoMeta({
  title: `${page?.value?.title} | Site Aggregator`,
  ogTitle: `${page?.value?.title} | Site Aggregator`,
  description: page?.value?.description,
  ogDescription: page?.value?.description,
  ogImage: `${'~images/sa-logo.png'}`,
})
</script>
<template>
  <SiteNavigation />
  <main>
      <ContentRenderer v-if="page" :value="page" />
  </main>
  <Footer />
</template>