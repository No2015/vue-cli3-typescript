<template>
  <div id="footer">
    <ul class="flex-box">
      <li>
        <ul class="flex-box left">
          <li>
            <span @click="fav" class="icon-shoucang"></span>
          </li>
          <li>
            <span @click="cart" class="icon-gouwuche"></span>
          </li>
        </ul>
      </li>
      <li class="flex-item-2">
        <span class="buy tc" @click="buy">购买</span>
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
  private buy() {
    console.log('buy: ', this.gid);
  }
  private fav() {
    console.log('fav: ', this.gid);
  }
  private cart() {
    console.log('cart: ', this.gid);
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
    line-height: 22px;
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
}
</style>
