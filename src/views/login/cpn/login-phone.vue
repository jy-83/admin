<template>
  <div class="login-phone">
    <el-form :model="form" :rules="rules" label-width="70px" :inline="false">
      <el-form-item label="手机号" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <el-input
          v-model="form.password"
          placeholder="请输入验证码"
          clearable
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const form = reactive({
      user: "",
      password: ""
    });
    return {
      form,
      rules
    };
  }
});
</script>

<style scoped></style>
