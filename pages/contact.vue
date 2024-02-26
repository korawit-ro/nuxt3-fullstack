<template>
  <div>
    <h3>{{ title }}</h3>
    <HeaderTitle />
    <NuxtLink to="/">Home Page</NuxtLink>
    <hr />
    <el-space spacer="|">
      <el-button type="primary" @click="changeData">Click me</el-button>
      <el-button type="info" @click="backToHome">Back</el-button>
    </el-space>
    <hr />
    <p v-if="user">{{ user.name }} {{ user.salary }}</p>
    <p v-if="info">{{ info.company }} {{ info.address }}</p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })
type User = {
  name: string;
  salary: number;
};
const title = ref<string>("Contact Page");
const user = ref<User>({
  name: "John",
  salary: 30000,
});

const info = reactive({
  company: 'CCT',
  address: 'Bangkok'
});

function changeData() {
  title.value = "Contact Page 2";

  user.value.name = 'ABC';

  info.company = 'Google'
  info.address = 'ZZZ';
}

function backToHome() {
  navigateTo("/");
}
</script>

<style></style>
