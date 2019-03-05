<template>
  <div id="content">
    <Banner />
    <Cate />
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Banner from './Banner.vue';
import Cate from './Cate.vue';
import List from './List.vue';

@Component({
  components: {
    Banner,
    Cate,
    List,
  },
})
export default class HomeIndex extends Vue {}
</script>

<style lang="less" scoped>
#content{
  top: 42px;
  bottom: 42px;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
  overflow: auto;
}
</style>
