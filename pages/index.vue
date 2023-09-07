<template><div>Should redirect</div></template>

<script setup>
await useAsyncData(async () => {
  return myFetch('foo');
});
</script>
