<template>
  <div id="header">
    <ul class="flex-box align-top">
      <li class="header-left">
        <span class="icon-back back" @click="back"></span>
      </li>
      <li class="flex-item-6 tc">
        <span class="key">{{ title }}</span>
      </li>
      <li>
        <span class="manage tc" @click="manage">{{ managetxt }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
  private managetxt:string = '管理';
  private manageState:boolean = false;
  private manage() {
    if (this.manageState) {
      this.manageState = false;
      this.managetxt = '管理'
    } else {
      this.manageState = true;
      this.managetxt = '取消'
    }    
  }
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
.back,.key,.manage{
  display: inline-block;
  height: 42px;
  width: 42px;
  font-size: 14px;
  color: #777;
  line-height: 42px;
  cursor: pointer;
}
.key{
  overflow: hidden;
  width: 100%;
}
</style>
