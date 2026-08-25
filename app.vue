<script setup lang="ts">
const config = useRuntimeConfig();
const rssHref = computed(() => {
  const base = (config.public?.baseURL as string) || '/site-aggregator/';
  return `${base.replace(/\/+$/, '')}/rss.xml`;
});

useHead({
  link: [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      title: 'Site Aggregator RSS Feed',
      href: rssHref.value,
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
