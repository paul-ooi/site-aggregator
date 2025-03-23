<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  console.log('fetching page', route.path)
  return queryCollection('content').path(route.path).first()
})
console.log('page', page);
</script>
<template>
    <div>
      <!-- This page correctly has only one single root element -->
      <ContentRenderer v-if="page" :value="page" />
    </div>
</template>