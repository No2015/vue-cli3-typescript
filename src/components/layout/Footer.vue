<template>
  <div id="footer">
    <ul class="flex-box tc">
      <li>
        <router-link to="/cart">购物车</router-link>
      </li>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/center">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
#footer{
    height: 42px;
    width: 100%;
    position: absolute;
    left: 0;
    z-index: 2;
    bottom: 0;
    a{
        font-size: 12px;
        display: block;
        height: 42px;
    }
}
</style>
