<template>
  <div ref="value">
    <el-input />
    <el-button @click="change">点击</el-button>
    <LoginHome></LoginHome>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginHome from "@/components/tab/LoginHome.vue";
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
  },
  components: { LoginHome }
});
</script>

<style scoped></style>
