<template>
  <div>
    <ElRow justify="center" v-loading="pending" class="mt-4">
      <el-descriptions :title="data?.data.topic">
        <el-descriptions-item label="id"
          >{{ data?.data._id }}
        </el-descriptions-item>
        <el-descriptions-item label="Description"
          >{{ data?.data.description }}
        </el-descriptions-item>
        <el-descriptions-item label="Description">
          <el-tag size="small">{{ data?.data.createdAt }}</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </ElRow>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const id = route.params.id;
const { data, pending } = await useLazyFetch<any>(`/api/blog/${id}`);
</script>
