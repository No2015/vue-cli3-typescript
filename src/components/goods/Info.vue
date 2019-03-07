<template>
  <div class="goods-info">
    <div class="info">
      <p class="title">{{ info.title }}</p>
      <p class="detail">{{ info.detail }}</p>
      <p class="price">￥{{ info.price }}</p>
      <p class="sale">{{ info.sale }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoodsInfo extends Vue {
  get info() {
    return this.$store.state.goodsDetail.info;
  }
}
</script>

<style lang="less" scoped>
.info{
  padding: 10px 10px 20px;
  .title{
    padding-top: 10px;
    color: #333;
    font-size: 16px;
  }
  .detail{    
    padding-top: 5px;
    font-style: italic;
    color: #999;
  }
  .price{
    color: #ff5a0c;
    padding-top: 10px;
  }
  .sale{
    padding-top: 5px;
    font-size: 12px;
  }
}
</style>
