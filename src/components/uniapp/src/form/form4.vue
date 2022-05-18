<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 16:32:47
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 17:02:32
 * @FilePath: /admin/src/components/uniapp/src/form/form4.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="form4">
    <span class="label">是否打开</span>
    <el-switch v-model="value" active-color="#2e82ff" inactive-color="#f8f8f8">
    </el-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let value = ref(true);
    return {
      value
    };
  }
});
</script>

<style scoped lang="scss">
.form4 {
  display: flex;
  align-items: center;
  padding: $distance 0;
  margin: 0 $distance;
  justify-content: space-between;
  border-bottom: 1px solid $color-border;
  .label {
    width: 100px;
    flex-shrink: 0;
  }
}
</style>
