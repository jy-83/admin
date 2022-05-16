<template>
  <div class="login-account">
    <el-form
      :model="form"
      ref="formRef"
      :rules="rules"
      label-width="70px"
      :inline="false"
    >
      <el-form-item label="用户名" prop="name">
        <el-input
          v-model="form.name"
          placeholder="请输入密码"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          placeholder="请输入密码"
          clearable
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus";
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const form = reactive({
      name: "",
      password: ""
    });
    let formRef = ref<InstanceType<typeof ElForm>>();
    const router = useRouter();
    const login = () => {
      formRef.value?.validate((value) => {
        if (value) {
          router.push("/main");
        }
      });
    };
    return {
      form,
      rules,
      formRef,
      login
    };
  }
});
</script>

<style scoped></style>
