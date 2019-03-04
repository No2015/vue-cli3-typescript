<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="wrap-swiper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/logo.png" alt=""></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { Route } from 'vue-router';

@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class About extends Vue {
  private swiperOption: object = {};
  private callback() {
    console.log('callback');
  }
  private beforeRouteEnter(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteEnter');
    next();
  }
  private beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteUpdate');
    next();
  }
  private beforeRouteLeave(to: Route, from: Route, next: () => void): void {
    console.log('beforeRouteLeave');
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.wrap-swiper,.swiper-container {
  height: 200px;
}
</style>
