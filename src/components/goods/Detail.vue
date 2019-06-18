<template>
  <div id="detail">
    <div class="title-head">
      <span>详情</span>
    </div>
    <div class="detail-img">
      <img v-for="(item, index) in imgs" :key="index" :src="$store.state.baseUrl + item" alt="">
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
.title-head{
  height: 16px;
  font-size: 14px;
  line-height: 18px;
  padding: 10px;
  span{
    display: block;
    height: 16px;
    border-left: 2px solid #ff5a0c;
    padding-left: 5px;
  }
}
.detail-img{
  img{
    width: 100%;
  }
}
</style>
