<template>
  <div class="form5">
    <div class="title">我是名称</div>
    <div class="inputWrap">
      <input type="text" placeholder="请输入内容" />
    </div>
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
.form5 {
  .title {
    font-size: $font-lg;
    font-weight: 500;
    color: $color-title;
    padding: $distance 0;
    margin: 0 $distance;
  }
  .inputWrap {
    padding: $distance 0;
    margin: 0 $distance;
    border-bottom: 1px solid $color-border;
  }
}
</style>
