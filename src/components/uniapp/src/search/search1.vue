<template>
  <div class="search1">
    <el-icon><Search /></el-icon>
    <input type="text" placeholder="搜索" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.search1 {
  margin: $distance-medium $distance;
  background-color: $background;
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  .el-icon {
    margin: 0 $distance-medium;
  }
  input {
    flex: 1;
  }
}
</style>
