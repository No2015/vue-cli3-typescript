<template>
  <div id="header">
    <ul class="clearfix">
      <li class="tc pull-left header-left">
        <img :src="avatar" alt="" @click="toUser" class="avatar">
      </li>
      <li class="pull-right header-right"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() public avatar!: string;

  private toUser() {
    this.$router.push({ name: 'center'});
  }
}
</script>

<style lang="less" scoped>
#header{
  height: 42px;
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 2;
  top: 0;
  background-color: #f3f3f3;
}
.header-left{
  width: 42px;
  height: 42px;
}
.header-right{
  width: calc(100% - 42px);
  height: 42px;
}
.avatar{
  width: 32px;
  height: 32px;
  margin-top: 5px;
  border-radius: 50%;
}
</style>
