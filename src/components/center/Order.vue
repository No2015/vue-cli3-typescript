<template>
  <div class="order">
    <ul class="flex-box">
      <li>
        <span class="icon-weizhifu"></span>
        <span>未支付</span>
        <span>{{ order.s0 }}</span>
      </li>
      <li>
        <span class="icon-yizhifu"></span>
        <span>已支付</span>
        <span>{{ order.s1 }}</span>
      </li>
      <li>
        <span class="icon-yiwancheng"></span>
        <span>已完成</span>
        <span>{{ order.s2 }}</span>
      </li>
      <li>
        <span class="icon-yiquxiao"></span>
        <span>已取消</span>
        <span>{{ order.s3 }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CenterOrder extends Vue {
  get order() {
    return this.$store.state.center.order;
  }
}
</script>

