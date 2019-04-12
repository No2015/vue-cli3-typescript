<template>
  <div id="content">
   <pre>{{ orderList }}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class OrderIndex extends Vue {
  get orderList() {
    return this.$store.state.orderList;
  }
}
</script>

<style lang="less" scoped>
#content{
  top: 0;
  bottom: 42px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow: auto;
}
</style>

