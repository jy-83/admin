<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in bread" :key="item.name">
        <el-breadcrumb-item v-if="item.url" :to="{ path: item.url }">{{
          item.name
        }}</el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, reactive } from "vue";
import { useRoute } from "vue-router";
import { pathMapToBreadcrumb } from "@/utils/map-menus";
import { IBread } from "../type/type";
import { menu } from "@/components/nav-menu/src/config";

export default defineComponent({
  setup() {
    const router = useRoute();
    let bread = reactive<IBread[]>([]);
    watch(
      () => router.path,
      (newRoute) => {
        bread.splice(0, bread.length, ...pathMapToBreadcrumb(menu, newRoute));
      },
      {
        immediate: true
      }
    );
    return {
      bread
    };
  }
});
</script>

<style scoped></style>
