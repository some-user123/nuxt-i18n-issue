<template>
  Login
  <button @click="nav">Button</button>
</template>

<script setup lang="ts">
const nav = async () => {
  console.log('navigating to page2');
  const ret = await navigateTo({ path: '/page2', query: { q: 'foo' } });
  console.log('done', ret);
};
</script>
