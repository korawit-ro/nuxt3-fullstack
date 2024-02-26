<template>
  <div>
    <h1 class="text-2xl">AboutHeader</h1>
    <hr />
    <slot />
    <hr />
    <h1 class="text-2xl">AboutFooter</h1>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

</script>

<style></style>
