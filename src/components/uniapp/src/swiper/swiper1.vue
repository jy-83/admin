<!--
 * @Author: jiangyi 189363638@qq.com
 * @Date: 2022-05-12 15:46:41
 * @LastEditors: jiangyi 189363638@qq.com
 * @LastEditTime: 2022-05-16 15:48:53
 * @FilePath: /admin/src/components/uniapp/src/swiper/swiper1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="swiper1">
    <swiper :autoplay="true">
      <swiper-slide v-for="(item, index) in swiperConfig" :key="index">
        <img :src="item.url" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "@/../node_modules/swiper/swiper.min.css";

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    //swiper图片配置
    const swiperConfig = [
      {
        url: require("@/assets/uniapp/swiper/swiper1.webp")
      },
      {
        url: require("@/assets/uniapp/swiper/swiper2.webp")
      }
    ];
    //swiper配置
    const swiperOption = {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      }
    };
    return {
      swiperOption,
      swiperConfig
    };
  }
});
</script>

<style scoped lang="scss">
.swiper1 {
  position: relative;
  img {
    width: 100%;
  }
}
</style>
