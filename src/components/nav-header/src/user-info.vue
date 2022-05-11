<template>
  <div class="user-info">
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        <el-avatar :size="30" />
        <span class="name">coderwhy</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><switch-button /></el-icon>
            <span>退出登录</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <el-icon><user-filled /></el-icon>
            <span>用户信息</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><tools /></el-icon>
            <span>系统信息</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
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
.user-info {
  .el-dropdown-link {
    display: flex;
    align-items: center;
    .name {
      margin-left: 6px;
    }
  }
}
</style>
