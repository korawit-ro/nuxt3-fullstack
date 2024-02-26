<template>
  <div>
    <p>About Us</p>
    <p>{{ appConfig.title }} {{ appConfig.subTitle }}</p>
    <p>{{ $config.public.apiBase }}</p>
    <NuxtLink to="/">Home Page</NuxtLink>
    <img src="~/assets/nuxt.png" alt="Discover Nuxt 3" />
    <NuxtImg src="/images/nuxt.png" quality="1" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'about-layout',
  middleware: 'auth',
  auth: { guestRedirectTo: '/login' },
});

const appConfig = useAppConfig();
</script>

<style></style>
