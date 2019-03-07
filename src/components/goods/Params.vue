<template>
  <div id="tab-params">
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
  padding: 10px 0;
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
