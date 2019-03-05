<template>
  <div id="header">
    <ul class="clearfix">
      <li class="tc pull-left header-left">
        <span class="back" @click="back">返回</span>
      </li>
      <li class="pull-left header-center tc">
        <span class="key">{{ title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() title!: string;
  private back() {
    this.$router.back();
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
  width: 50px;
  height: 42px;
}
.header-center{
  width: calc(100% - 100px);
  height: 42px;
}
.header-right{
  width: 50px;
  height: 42px;
}
.back,.key{
  display: block;
  height: 42px;
  font-size: 12px;
  line-height: 42px;
  color: #57b8e6;
  cursor: pointer;
}
.key{
  overflow: hidden;
  color: #777;
  font-size: 14px;
}
</style>
