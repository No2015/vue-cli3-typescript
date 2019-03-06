<template>
  <div class="product">
    <div class="list-head">
      <span>商品推荐</span>
    </div>
    <div class="list clearfix">
      <div class="list-item pull-left tc" v-for="(item, index) in list" :key="index" @click="toProduct(item.id)">
        <img :src="item.img" :alt="item.title">
        <p class="price">￥{{ item.price }}</p>
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HomeList extends Vue {
  get list() {
    return this.$store.state.homeList;
  }

  private toProduct(id: string) {
    this.$router.push({ path: 'goods', query: { gid: id }});
  }
}
</script>

<style lang="less" scoped>
.list-head{
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
.list{
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
  .list-item{
    width: 50%;
    padding: 10px;
    /*border: 1px solid #f9f9f9;*/
    box-sizing: border-box;
    img{
      width: 100%;
    }
    .price{
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      color: rgb(163, 69, 69);
    }
    .title{
      font-size: 12px;
      height: 36px;
      overflow: hidden;
      line-height: 18px;
      color: #777;
    }
  }
}
</style>
