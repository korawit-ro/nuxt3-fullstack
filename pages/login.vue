<template>
  <el-row justify="center" class="mt-8">
    <el-button type="primary" @click="login">Login</el-button>
  </el-row>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'guest-only',
  auth: { authenticatedRedirectTo: '/' },
});

const { signIn } = useAuth();
const router = useRouter();
async function login() {
  const result = await signIn('credentials', {
    redirect: false,
    email: '',
    password: '',
  });
  if (result?.ok) {
    router.replace('/');
  } else {
    console.log('ERRRRRR');
  }
}
</script>

<style></style>
