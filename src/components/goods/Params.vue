<template>
  <div id="tab-params">
    <div class="title-head">
      <span>参数</span>
    </div>
    <ul class="flex-box align-top" v-for="(item, index) in params" :key="index">
      <li class="params-name pad5-10">
        <span>{{ item.name }}:</span>
      </li>
      <li class="params-value pad5-10 flex-item-3">
        <span>{{ item.value }}</span>
      </li>
    </ul>
    <div v-show="params.length == 0">
      <p class="no-data tc">暂无数据...</p>
    </div>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Params extends Vue {
  get params() {
    return this.$store.state.goodsDetail.params;
  }
}
</script>

<style lang="less" scoped>
#tab-params{
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
  .params-name{
    color: #999;
    font-size: 12px;
  }
  .params-value{
    color: #333;
    font-size: 12px;
  }
  .pad5-10{
    padding: 8px 10px;
  }
  .no-data{
    color: #999;
  }
}
</style>
