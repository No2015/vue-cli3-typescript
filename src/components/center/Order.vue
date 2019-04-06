<template>
  <div class="order">
    <ul class="flex-box tc">
      <li>
        <p class="icon-s0 icon-status" @click="toOrder(0)">
          <span>未支付</span>
          <span v-if="order.s0 > 0" class="order-num">{{ order.s0 }}</span>
        </p>
      </li>
      <li>
        <p class="icon-s1 icon-status" @click="toOrder(1)">
          <span>已支付</span>
          <span v-if="order.s1 > 0" class="order-num">{{ order.s1 }}</span>
        </p>
      </li>
      <li>
        <p class="icon-s2 icon-status" @click="toOrder(2)">
          <span>已完成</span>
          <span v-if="order.s2 > 0" class="order-num">{{ order.s2 }}</span>
        </p>
      </li>
      <li>
        <p class="icon-s3 icon-status" @click="toOrder(3)">
          <span>已取消</span>
          <span v-if="order.s3 > 0" class="order-num">{{ order.s3 }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CenterOrder extends Vue {
  private toOrder(status: number) {
    console.log('order status: ', status);
  }
  get order() {
    return this.$store.state.center.order;
  }
}
</script>

<style lang="less" scoped>
.order{
  background: #fff;
  border-radius: 10px;
  margin: 10px 15px 0;
  border: 1px solid #f2f4f6;
  li{
    padding: 15px 0;
  }
  .icon-status{
      padding-top: 40px;
      position: relative;
      display: block;
      background-repeat: no-repeat;
      background-position: center top;
      background-size: auto 32px;
  }
  .order-num{
    position: absolute;
    left: 50%;
    margin-left: 10px;
    top: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    border-radius: 50%;
    color: #fff;
    background: #ff5a0c;
    opacity: .8;
  }
}
</style>


