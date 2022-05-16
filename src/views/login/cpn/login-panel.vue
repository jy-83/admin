<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs
      v-model="currentName"
      type="border-card"
      tab-position="top"
      stretch
    >
      <el-tab-pane name="login-account">
        <template #label>
          <div class="login-label">
            <el-icon><user-filled /></el-icon>
            <span class="login-title">用户</span>
          </div>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="login-phone">
        <template #label>
          <div class="login-label">
            <el-icon><iphone /></el-icon>
            <span class="login-title">手机号</span>
          </div>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="login-tip">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" :underline="false" href="" target="_blank"
        >忘记密码</el-link
      >
    </div>
    <el-button class="btn" type="primary" size="default" @click="loginClick"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginPhone from "./login-phone.vue";
import LoginAccount from "./login-account.vue";

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    let currentName = ref("login-account"); //tabs当前选中
    let isKeepPassword = ref(false); //是否记住密码

    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();
    const loginClick = () => {
      accountRef.value?.login();
    };
    return {
      currentName,
      loginClick,
      isKeepPassword,
      accountRef,
      phoneRef
    };
  }
});
</script>

<style scoped lang="scss">
.login-panel {
  h1 {
    text-align: center;
  }
  width: 320px;
  margin-bottom: 150px;
  .login-label {
    display: flex;
    align-items: center;
    .login-title {
      margin-left: 10px;
    }
  }
  .login-tip {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    width: 100%;
  }
}
</style>
