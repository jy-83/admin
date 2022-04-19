<template>
  <div ref="value">
    <el-input />
    <el-button @click="change">点击</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let value = ref(null);
    const change = () => {
      console.log(value.value);
    };
    return {
      value,
      change
    };
  }
});
</script>

<style scoped></style>
