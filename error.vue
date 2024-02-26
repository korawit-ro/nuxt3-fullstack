<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div>
    <div class="w-full mt-8">
      <el-alert
        class="w-full"
        :title="error?.statusCode + ''"
        type="error"
        center
        :description="error?.message"
        show-icon
      />
    </div>
    <el-row justify="center" class="mt-8">
      <el-button type="info" plain @click="handleError">Back</el-button>
    </el-row>

  </div>
</template>
