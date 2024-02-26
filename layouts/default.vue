<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <client-only>
          <app-header></app-header>
        </client-only>
      </el-header>
      <el-row justify="center">
        <el-col :lg="18">
          <slot />
        </el-col>
      </el-row>
      <el-footer>
        <app-footer></app-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
