<template>
  <div id="content">
    <div>{{ userInfo }}</div>
    <CenterOrder />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CenterOrder from './Order.vue';

@Component({
  components: {
    CenterOrder,
  },
})
export default class CenterIndex extends Vue {
  get userInfo() {
    return this.$store.state.userInfo;
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

