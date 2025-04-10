<template>
  <nav class="site-navigation">
    <ul class="nav-links">
      <li>
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li>
        <router-link to="/articles" class="nav-link">Articles</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
// No additional logic needed for basic navigation
</script>

<style scoped>
.site-navigation {
  padding: 1rem;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-end: 1rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--primary);
  font-weight: 500;
}

.nav-link:hover,
.nav-link:focus {
  color: var(--tertiary);
  text-decoration: underline;
}
</style>