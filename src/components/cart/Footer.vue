<template>
  <div id="footer">
    <ul class="flex-box">
      <li>
        <div class="left tc">
          <span>总额：<em>{{ amount }}</em></span>
        </div>
      </li>
      <li>
        <span class="buy tc" @click="trade">去支付</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoodsFooter extends Vue {
  private gid: string | string[] = '';
  public created() {
    this.gid = this.$route.query.gid;
  }
  private trade() {
    console.log('trade: ', this.gid);
  }
  get amount() {
    let amount = this.$store.state.cart.amount;
    amount = amount.toFixed(2);
    return amount;
  }
}
</script>

<style lang="less" scoped>
#footer{
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  height: 42px;
  span{
    height: 22px;
    line-height: 24px;
    font-size: 16px;
    padding: 10px 0;
    cursor: pointer;
    display: block;
    &.icon-gouwuche{
      border-left: 1px solid #f3f3f3;
    }
  }
  .buy{
    background-color: #ff5a0c;
    color: #fff;
  }
  .left{
    span{
      height: 21px;
      border-top: 1px solid #f3f3f3;
    }
  }
}
</style>
