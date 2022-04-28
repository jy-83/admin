<template>
  <div>{{ $store.state.user }}</div>
  <el-button>按钮</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
