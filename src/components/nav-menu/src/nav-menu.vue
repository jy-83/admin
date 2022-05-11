<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="" />
      <span class="title" v-show="!collapse">Vue3+TS</span>
    </div>
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :default-active="active"
      router
      :unique-opened="true"
      :collapse="collapse"
    >
      <template v-for="item in menu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="child in item.children" :key="child.id">
              <el-menu-item :index="child.url">{{ child.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const menu = computed(() => store.state.login.menu);
    const router = useRouter();
    let active = router.currentRoute.value.path;
    return {
      menu,
      active
    };
  }
});
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: $color-001529;
  .logo {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 12px 10px 8px;
    box-sizing: border-box;
    img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      color: #fff;
    }
  }
  .el-menu {
    height: calc(100% - 48px);
    border-right: none;
  }
  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}
</style>
