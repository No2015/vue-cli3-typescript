<template>
  <div id="content">
    <div class="home">
      <div class="cate-head">
        <span>热销分类</span>
      </div>
      <div class="cate clearfix">
        <div class="cate-item pull-left tc" v-for="(item, index) in cate" :key="index" @click="toCate(item.id)">
          <img :src="item.img" :alt="item.title">
          <p class="price">￥{{ item.price }}</p>
          <p class="title">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <List :list="$store.state.homeList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import List from './List.vue';

@Component({
  components: {
    List,
  },
})
export default class HomeIndex extends Vue {
  @Prop() cate!: Array<any>;

  private toCate(id: number) {
    console.log(id);
  }
}
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
.cate-head{
  height: 20px;
  font-size: 18px;
  line-height: 20px;
  padding: 20px 10px 10px;
  span{
    display: block;
    height: 20px;
    border-left: 2px solid #ff5a0c;
    padding-left: 5px;
  }
}
.cate{
  padding: 10px 0;
  border-bottom: 1px solid #f6f6f6;
  .cate-item{
    width: 25%;
    padding: 10px 0;
    img{
      width: 50%;
    }
    .price{
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      color: rgb(163, 69, 69);
    }
    .title{
      font-size: 14px;
      height: 24px;
      line-height: 24px;
      color: #666;
    }
  }
}
</style>
