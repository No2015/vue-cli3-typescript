<template>
  <div id="header">
    <ul class="flex-box align-top">
      <li class="header-left">
        <span class="icon-back back" @click="back"></span>
      </li>
      <li class="flex-item-6 tc">
        <span class="key">{{ title }}</span>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
  private back() {
    this.$router.back();
  }
}
</script>

<style lang="less" scoped>
#header{
  height: 42px;
  width: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  z-index: 2;
  top: 0;
  background-color: #f3f3f3;
}
.header-left{
  height: 42px;
}
.header-center{
  width: calc(100% - 100px);
  height: 42px;
}
.header-right{
  height: 42px;
}
.back,.key{
  display: inline-block;
  height: 42px;
  width: 42px;
  font-size: 12px;
  line-height: 42px;
  color: #57b8e6;
  cursor: pointer;
}
.key{
  overflow: hidden;
  color: #777;
  font-size: 14px;
  width: 100%;
}
</style>
