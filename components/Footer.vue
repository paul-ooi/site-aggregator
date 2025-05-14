<template>
  <footer class="footer">
    <nav>
      <ul>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contribute">Contribute</router-link></li>
        <li><router-link to="/colophon">Colophon</router-link></li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
// No additional logic needed for this simple footer
</script>

<style lang="scss" scoped>
.footer {
  padding: 1rem;
  background-color: #f8f9fa;
  margin-top: auto;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #333;
}

nav a:hover {
  color: #666;
}
</style>
