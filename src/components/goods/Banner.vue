<template>
  <div class="banner">
    <div class="wrap-swiper">
      <swiper v-if="banner.length > 0" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in banner" :key="index">
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  components: {
    swiper,
    swiperSlide,
  },
})
export default class GoodsBanner extends Vue {
  private swiperOption: any = {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
    },
  };
  get banner() {
    return this.$store.state.goodsDetail.banner;
  }
}
</script>

<style lang="less" scoped>
.wrap-swiper{
  img{
    width: 100%;
  }
}
</style>
