<template>
  <div class="main">
    <el-container>
      <el-aside :width="collapse ? '60px' : '210px'">
        <nav-menu :collapse="collapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @change-collapse="changeCollapse"></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "@/components/nav-menu/index";
import NavHeader from "@/components/nav-header";

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    let collapse = ref(false);
    const changeCollapse = (bool: boolean) => {
      collapse.value = bool;
    };
    return {
      collapse,
      changeCollapse
    };
  }
});
</script>

<style scoped lang="scss">
.main {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      transition: width 0.5s ease;
    }
    .el-header {
      height: 48px !important;
      display: flex;
      align-items: center;
    }
    .el-main {
      background-color: #f0f2f5;
    }
  }
}
</style>
