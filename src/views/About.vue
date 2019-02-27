<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="wrap-swiper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class About extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.wrap-swiper,.swiper-container {
  height: 200px;
}
</style>
