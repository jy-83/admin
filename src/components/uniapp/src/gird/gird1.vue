<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-16 17:48:09
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-17 10:08:16
 * @FilePath: /admin/src/components/uniapp/src/gird/gird1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="gird1 row">
    <div class="col" data-span="6">
      <el-icon><VideoCameraFilled /></el-icon>
      <span class="label">相机</span>
    </div>
    <div class="col" data-span="6">
      <el-icon><TrendCharts /></el-icon>
      <span class="label">趋势图</span>
    </div>
    <div class="col" data-span="6">
      <el-icon><WalletFilled /></el-icon>
      <span class="label">钱包</span>
    </div>
    <div class="col" data-span="6">
      <el-icon><UploadFilled /></el-icon>
      <span class="label">上传</span>
    </div>
    <div class="col" data-span="6">
      <el-icon><Calendar /></el-icon>
      <span class="label">日历</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gird1 {
  margin: $distance-medium $distance;
  background-color: $color-white;
  border-radius: $radius-medium;
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: $distance 0;
    .label {
      margin-top: $distance-medium;
    }
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  .col[data-span="6"] {
    width: 25%;
  }
}
</style>
