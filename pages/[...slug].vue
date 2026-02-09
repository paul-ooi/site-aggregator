<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
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
useSeoMeta({
  title: `${page?.value?.title} | Site Aggregator`,
  ogTitle: `${page?.value?.title} | Site Aggregator`,
  description: page?.value?.description,
  ogDescription: page?.value?.description,
  ogImage: `${'~images/sa-logo.png'}`,
});

const prettyDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
<template>
  <SiteNavigation />
  <main class="content">
    <aside v-if="page" class="sidebar">
      <h1 v-if="page.title">{{ page.title }}</h1>
      <p v-if="page.sourcePublishDate">
        <strong>Source published on: </strong>
        <time class="date--published" :datetime="page.sourcePublishDate">{{ prettyDate(page.sourcePublishDate) }}</time>
      </p>
      <p v-if="page.url">
        <strong>Original URL: </strong>
        <a :href="page.url" target="_blank" rel="noopener noreferrer" class="external-link">{{ page.url }}</a>
      </p>
      <p v-if="page.author"><strong>Author: </strong>{{ page.author }}</p>
      <p v-if="page.source">
        <strong>Source: </strong>
        <a :href="page.source" target="_blank" rel="noopener noreferrer" class="external-link">{{ page.source }}</a>
      </p>
      <p v-if="page.organization"><strong>Organization: </strong>{{ page.organization }}</p>
      <p v-if="page.repostedDate">
        <strong>Added: </strong>
        <time class="date--reposted" :datetime="page.repostedDate">{{ prettyDate(page.repostedDate) }}</time>
      </p>
      <p v-if="page.tags"><strong>Tags: </strong>{{ page.tags.join(', ') }}</p>
    </aside>
    <ContentRenderer v-if="page" :value="page" class="summary" />
  </main>
  <Footer />
</template>
<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

main.content {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    'content'
    'sidebar';
  grid-template-columns: 1fr;
  padding-inline: var(--gutter);
}

@media screen and (min-width: $lg) {
  main.content {
    grid-template-areas: '. sidebar content .';
    grid-template-columns: minmax(var(--gutter), 1fr) 1fr 3fr minmax(var(--gutter), 1fr);
    grid-template-rows: minmax(0, auto);
    padding-inline: 0;
  }

  .sidebar {
    grid-row: 1;
  }
}

.sidebar {
  grid-area: sidebar;
  min-width: 0;
}

.sidebar h1 {
  font-size: clamp(1.25rem, 2vw, 1.5em);
  margin-block: 0 0.5em;
}

.summary {
  grid-area: content;
  min-width: 0;
}

.summary :deep(img) {
  max-width: 100%;
  height: auto;
}

.external-link {
  color: var(--primary);
  overflow-wrap: break-word;
}

.external-link::after {
  content: '⇱';
  transform: scaleX(-1);
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
  font-size: 0.8em;
}

.external-link:hover::after {
  font-style: normal;
}

.external-link:hover {
  font-style: oblique;
}

.date--published,
.date--reposted {
  white-space: nowrap;
}
</style>
