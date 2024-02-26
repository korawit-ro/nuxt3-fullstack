<template>
  <div>
    <ElRow justify="center" v-loading="pending">
      <ElCard class="m-4" v-for="item in data?.data" :key="item._id" style="width: 20rem">
        <div>
          <NuxtLink :to="`/blog/${item._id}`">{{ item.topic }}</NuxtLink>
        </div>
        <div>
          {{ item.description }}
        </div>
        <ElDivider />
        <div>
          created at: {{ item.createdAt }}
        </div>
      </ElCard>
    </ElRow>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })
const { data, pending } = await useLazyFetch<any>(
  "/api/blog"
);
</script>


