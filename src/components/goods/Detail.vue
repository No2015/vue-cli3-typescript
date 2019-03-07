<template>
  <div id="tab-detail">
    <div class="detail-img">
      <img v-for="(item, index) in imgs" :key="index" :src="item" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Detail extends Vue {
  get imgs() {
    return this.$store.state.goodsDetail.imgs;
  }
}
</script>

<style lang="less" scoped>
.detail-img{
  padding: 10px 0;
  img{
    width: 100%;
  }
}
</style>
