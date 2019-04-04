<template>
  <div id="footer">
    <ul class="flex-box">
      <li class="left tl">
        <span class="padl10" @click="addAll">
          <em :class="(checkAll ? 'icon-checked ': '') + 'icon-check'"></em><em class="icon-check-txt">全选</em>
        </span>
      </li>
      <li class="flex-item-2 left tr">
        <span class="padr10">总额：<em>{{ amount }}</em></span>
      </li>
      <li>
        <span class="buy tc" @click="trade">结算</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoodsFooter extends Vue {
  private gid: string | string[] = '';
  private checkAll: boolean = !1;
  public created() {
    // this.gid = this.$route.query.gid;
  }
  private trade() {
    console.log('trade: ', this.$store.state.cart.amount);
  }
  private addAll() {
    const list = this.$store.state.cart.list;
    this.checkAll = !this.checkAll;
    for (const item of list) {
      item.add = this.checkAll;
    }
    this.$store.commit('setCartList', list);
  }
  get amount() {
    const list = this.$store.state.cart.list;
    let amount = 0;
    let state = !0;
    for (const item of list) {
      if (item.add) {
        amount += item.price * item.num;
      }
      if (!item.add) {
        state = !1;
      }
    }
    this.$store.commit('setCartAmount', amount);
    if (amount === 0) {
      this.checkAll = !1;
    }
    if (state) {
      this.checkAll = !0;
    }
    return amount.toFixed(2);
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
  .padl10{
    padding-left: 10px;
  }
  .padr10{
    padding-right: 10px;
  }
  .icon-check-txt{
    font-size: 14px;
    display: inline-block;
    line-height: 23px;
    vertical-align: top;
    padding-left: 3px;
  }
  .icon-check{
    display: inline-block;
    height: 21px;
    width: 21px;
  }
}
</style>
