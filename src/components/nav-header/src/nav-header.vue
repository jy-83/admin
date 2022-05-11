<template>
  <div class="nav-header">
    <el-icon class="icon" :size="30" @click="changeCollapse">
      <expand v-show="collapse" />
      <fold v-show="!collapse" />
    </el-icon>
    <div class="content">
      <breadcrumb></breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import UserInfo from "./user-info.vue";
import Breadcrumb from "@/base-ui/breadcrumb/src/breadcrumb.vue";

export default defineComponent({
  components: {
    UserInfo,
    Breadcrumb
  },
  emits: ["changeCollapse"],
  setup(props, { emit }) {
    let collapse = ref(false);
    const changeCollapse = () => {
      collapse.value = !collapse.value;
      emit("changeCollapse", collapse.value);
    };
    return {
      collapse,
      changeCollapse
    };
  }
});
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    padding: 0 20px;
  }
  .icon {
    cursor: pointer;
  }
}
</style>
