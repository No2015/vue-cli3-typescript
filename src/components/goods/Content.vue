<template>
  <div class="goods-detail">
    <div class="tab">
      <ul :class=" 'flex-box tab-head tc' + (tabTop ? ' tabTop' : '') ">
        <li>
          <span :class="{ active: tabIndex === 0 }" @click="tabChecked(0)">详情</span>
        </li>
        <li>
          <span :class="{ active: tabIndex === 1 }" @click="tabChecked(1)">参数</span>
        </li>
        <li>
          <span :class="{ active: tabIndex === 2 }" @click="tabChecked(2)">评论(<em class="count">{{ count }}</em>)</span>
        </li>
      </ul>
      <div :class=" 'tab-cont' + (tabTop ? ' addHead' : '') " ref="tabCont">
        <Detail v-show="tabIndex == 0" />
        <Params v-show="tabIndex == 1" />
        <Comments v-show="tabIndex == 2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import Detail from './Detail.vue';
import Params from './Params.vue';
import Comments from './Comments.vue';

@Component({
  components: {
    Detail,
    Params,
    Comments,
  }
})
export default class GoodsDetail extends Vue {
  @Prop() scrollTop!: number;
  private tabIndex: number = 0;
  private tabTop: boolean = false;

  private tabChecked(tab: number) {
    this.tabIndex = tab;
  }
  get count() {
    return this.$store.state.goodsDetail.comments.length;
  }

  @Watch('scrollTop')
  private changeTop() {
    let top = this.$refs.tabCont.offsetTop;
    if (!this.tabTop && this.scrollTop > top - 36) {
      this.tabTop = !this.tabTop;
    }else if(this.tabTop && this.scrollTop < top) {
      this.tabTop = !this.tabTop;
    }
  }
}
</script>

<style lang="less" scoped>
.tab-head{
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  color: #666;
  background: #f6f6f6;
  li:first-child span{
      border-left: 0px none;
  }
  span{
    display: block;
    cursor: pointer;
    border-left: 1px solid #e3e3e3;
    &.active{
      color: rgb(233, 127, 127);
    }
  }
  .count{
    color: rgb(233, 127, 127);
    font-size: 12px;
  }
  &.tabTop{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
}
.tab-cont.addHead{
  padding-top: 36px;
}
</style>
