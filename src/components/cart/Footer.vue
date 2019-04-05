<template>
  <div id="footer">
    <ul class="flex-box">
      <li class="left tl">
        <span class="padl10" @click="addAll">
          <em :class="(checkAll ? 'icon-checked ': '') + 'icon-check'"></em><em class="icon-check-txt">全选</em>
        </span>
      </li>
      <li v-show="!showDelete" class="flex-item-2 left tr">
        <span class="padr10">总额：<em>{{ amount }}</em></span>
      </li>
      <li v-show="!showDelete">
        <span class="buy tc" @click="trade">结算</span>
      </li>
      <li v-show="showDelete" class="flex-item-3 left tr">
        <span class="padr10">
          <em class="bjs-btn bjs-btn-default" @click="deleteAll">清空</em>
          <em class="bjs-btn bjs-btn-default marl10" @click="deleteChecked">删除</em>
        </span>
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
    const list = this.$store.state.cart.list;
    const data: any[] = [];
    for (const item of list) {
      if (item.add) {
        data.push({
          id: item.id,
          num: item.num,
        });
      }
    }
    console.log('trade: ', this.$store.state.cart.amount, data);
  }
  private addAll() {
    const list = this.$store.state.cart.list;
    this.checkAll = !this.checkAll;
    for (const item of list) {
      item.add = this.checkAll;
    }
    if (list.length === 0) {
      this.checkAll = !1;
    }
    this.$store.commit('setCartList', list);
  }
  private deleteAll() {
    const list = this.$store.state.cart.list;
    const arr: number[] = [];
    for (const item of list) {
      arr.push(item.id);
    }
    this.update(arr);
    this.$store.commit('setCartList', []);
  }
  private deleteChecked() {
    const list = this.$store.state.cart.list;
    const arr: number[] = [];
    const lists = list.filter((item) => {
      if (item.add) {
        arr.push(item.id);
      }
      return !item.add;
    });
    if (arr.length === 0) {
      return !1;
    }
    this.update(arr);
    this.$store.commit('setCartList', lists);
  }
  get showDelete() {
    return this.$store.state.cart.manageState;
  }
  get amount() {
    const list = this.$store.state.cart.list;
    this.checkAll = !1;
    let amount = 0;
    let state = list.length > 0 ? !0 : !1;
    for (const item of list) {
      if (item.add) {
        amount += item.price * item.num;
      }
      if (!item.add) {
        state = !1;
      }
    }
    if (state) {
      this.checkAll = !0;
    }
    this.$store.commit('setCartAmount', amount);
    return amount.toFixed(2);
  }
  private update(arr: number[]) {
    console.log('delete arr: ', arr);
    // update to cart ...
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
    padding-top: 10px;
    padding-bottom: 10px;
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
