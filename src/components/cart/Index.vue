<template>
  <div id="content">
    <div class="list">
      <div v-for="(cate, index) in cart" :key="index" class="cate clearfix">
        <div class="item-title">
          <ul class="cate-head flex-box">
            <li class="check-left">
              <span :class="'icon-check'" @click="checkCate(cate)"></span>
            </li>
            <li class="check-right">
              <span class="cate-title">{{ cate[0].ctitle }}</span>
            </li>
          </ul>
        </div>
        <div v-for="(item, index) in cate" :key="index" class="item">
          <div class="solt"></div>
          <ul class="flex-box">
            <li class="check-left">
              <span :class="'icon-check'" @click="checkIndex(item, index)"></span>
            </li>
            <li class="check-right">
              <div class="solt"></div>
              <ul class="flex-box">
                <li class="item-left">
                  <span class="hand" @click="toUrl(item.id)">
                    <img :src="item.img" :alt="item.id">
                  </span>
                </li>
                <li class="item-right">
                  <p class="title hand" @click="toUrl(item.id)">{{ item.title }}</p>
                  <p class="price">￥{{ item.price }}</p>
                  <p class="num">{{ item.num }}</p>
                </li>
              </ul>
              <div class="solt"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CartIndex extends Vue {
  get cart() {
    const list = this.$store.state.cartList;
    let cart = {};
    for(let i = 0; i < list.length; i++) {
      let cate = list[i].cate;
      if (cart[cate]) {
        cart[cate].push(list[i]);
      }else{
        cart[cate] = [];
        cart[cate].push(list[i]);
      }
    }
    return cart;
  }
  private toUrl(gid: string) {
    this.$router.push({ path: 'goods', query: { gid } });
  }
  private checkCate(cate: any) {
    console.log(cate);
  }
  private checkIndex(item: any, index: number) {
    console.log(item, index);
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
  .list{
    padding: 10px;
    .cate{
      padding-bottom: 10px;
      .cate-head{
        padding: 10px 0;
        .cate-title{
          display: inline-block;
          border-left: 2px solid #ff5a0c;
          padding-left: 5px;
          height: 18px;
          line-height: 20px;
          font-size: 16px;
          color: #333;
        }
      }
      .item{
        padding: 10px 0;
        border-bottom: 1px solid #f3f3f3;
        .item-left{
          width: 80px;
          height: 80px;
          img{
            width: 80px;
            height: 80px;
          }
        }
        .item-right{
          width: calc(100% - 90px);
          height: 80px;
          padding-left: 10px;
          .title{
            word-wrap: break-word;
          }
        }
      }
      .check-left{
        width: 30px;
      }
      .check-right{
        width: calc(100% - 30px);
      }
    }
    .icon-check{
      height: 20px;
      display: block;
      width: 20px;
      cursor: pointer;
    }
  }
}
</style>
