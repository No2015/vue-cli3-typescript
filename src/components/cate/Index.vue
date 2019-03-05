<template>
  <div id="content">
    <List />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from './List.vue';

@Component({
  components: {
    List,
  },
})
export default class CateIndex extends Vue {}
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
