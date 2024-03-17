<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <h1 mt-2 text-4xl lg:text-5xl line-clamp-2>The About Page!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>
