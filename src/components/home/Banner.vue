<template>
  <div class="banner">
    <div class="wrap-swiper">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <swiper-slide v-for="(item, index) in banner" :key="index">
          <span @click="toUrl(item.url)">
            <img :src="item.img" alt="">
          </span>
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
export default class HomeBanner extends Vue {
  private swiperOption: any = {
    loop: true,
    //effect: 'fade'
  };
  private callback() {
    console.log('run')
  }
  private toUrl(url: string) {
    this.$router.push(url);
  }
  get banner() {
    return this.$store.state.homeBanner;
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
