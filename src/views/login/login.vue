<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPanel from "./cpn/login-panel.vue";

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  background: url("../../assets/img/login-bg.svg") no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
