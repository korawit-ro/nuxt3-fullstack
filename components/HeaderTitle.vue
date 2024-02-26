<template>
  <div class="m-8">
    <h1 class="red text-5xl text-center">My {{ title }}</h1>
    <el-row justify="center" class="mt-4">
      <img :src="srcImg" width="100" />
    </el-row>
  </div>
</template>

<script lang="ts" setup>
const title: string = 'Nuxt 3.x';
const srcImg = '/images/nuxt.png';
</script>

<style scoped>
.red {
  color: red;
}
</style>
