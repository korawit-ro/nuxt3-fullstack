<template>
  <ElRow justify="center">
    <ElCol :lg="18">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
      >
        <el-menu-item index="0">
          <img style="width: 100px" src="/images/nuxt.png" alt="Element logo" />
        </el-menu-item>
        <div class="flex-grow" />
        <NuxtLink to="/">
          <el-menu-item index="1"> Home </el-menu-item>
        </NuxtLink>
        <NuxtLink to="about">
          <el-menu-item index="2"> About Us </el-menu-item>
        </NuxtLink>
        <NuxtLink to="contact">
          <el-menu-item index="3"> Contact Us </el-menu-item>
        </NuxtLink>
        <NuxtLink to="product">
          <el-menu-item index="4"> Product </el-menu-item>
        </NuxtLink>
        <NuxtLink to="blog">
          <el-menu-item index="5"> Blog </el-menu-item>
        </NuxtLink>
        <el-sub-menu index="6">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </ElCol>
  </ElRow>
</template>

<script lang="ts" setup>
const route = useRoute();
const activeIndex = ref('1');

watch(() => route.path, routeCheck);

function routeCheck() {
  if (route.path === '/') {
    activeIndex.value = '1';
  } else if (route.path === '/about') {
    activeIndex.value = '2';
  } else if (route.path === '/contact') {
    activeIndex.value = '3';
  } else if (route.path === '/product') {
    activeIndex.value = '4';
  } else if (route.path.indexOf('/blog') !== -1) {
    activeIndex.value = '5';
  }
}

routeCheck();
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
