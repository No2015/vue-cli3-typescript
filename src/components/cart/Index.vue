<template>
  <div id="content">
    <div class="list">
      <div v-for="(cate, index) in cart" :key="index" class="cate clearfix">
        <div class="item-title">
          <ul class="cate-head flex-box">
            <li class="check-left">
              <span :class="(checkAllCate(cate) ? 'icon-checked ': '') + 'icon-check'" @click="checkCate(cate)"></span>
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
              <span :class="(item.add ? 'icon-checked ': '') + 'icon-check'" @click="checkIndex(item.id)"></span>
            </li>
            <li class="check-right">
              <div class="solt"></div>
              <ul class="flex-box">
                <li class="item-left">
                  <span class="hand" @click="toUrl(item.id)">
                    <img :src="$store.state.baseUrl+item.img" :alt="item.id">
                  </span>
                </li>
                <li class="item-right">
                  <p class="title hand" @click="toUrl(item.id)">{{ item.title }}</p>
                  <p class="price">￥{{ item.price }}</p>
                  <ul class="flex-box num-box">
                    <li>
                      <span class="bjs-btn btn-subtract bjs-btn-full tc font5" @click="item.num = item.num > 1 ? (update(item.num - 1, item.id),item.num - 1) : item.num">-</span>
                    </li>
                    <li class="flex-item-3 marl10"><input class="bjs-btn bjs-btn-full tc num" type="text" v-model="item.num" @blur="item.num = item.num * 1 < 1 ? 1 : item.num * 1; update(item.num, item.id)" @input="item.num = (item.num + '').replace(/[^\d]*/g,'')"></li>
                    <li class="marl10">
                      <span class="bjs-btn btn-add bjs-btn-full tc font5" @click="item.num = item.num < 10000 ? (update(item.num + 1, item.id),item.num + 1) : item.num">+</span>
                    </li>
                  </ul>
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
    const list = this.$store.state.cart.list;
    const cart = {};
    for (const item of list) {
      const cate = item.cate;
      if (cart[cate]) {
        cart[cate].push(item);
      } else {
        cart[cate] = [];
        cart[cate].push(item);
      }
    }
    return cart;
  }
  private toUrl(gid: string) {
    this.$router.push({ path: 'goods', query: { gid } });
  }
  private checkCate(cate: any) {
    const list = this.$store.state.cart.list;
    const add = !this.checkAllCate(cate);
    for (const item of list) {
      for (const items of cate) {
        if (item.id === items.id) {
          item.add = add;
        }
      }
    }
  }
  private checkIndex(id: number) {
    const list = this.$store.state.cart.list;
    for (const item of list) {
      if (item.id === id) {
        item.add = !item.add;
      }
    }
    this.$store.commit('setCartList', list);
  }
  private checkAllCate(cate: any) {
    let state = !0;
    for (const items of cate) {
      if (!items.add) {
        state = !1;
      }
    }
    return state;
  }
  private update(num: number, id: number) {
    this.$store.dispatch('updateCartPage', {update: {id, num}});
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
          width: 90px;
          height: 90px;
          img{
            width: 90px;
            height: 90px;
          }
        }
        .item-right{
          width: calc(100% - 100px);
          height: 90px;
          padding-left: 10px;
          .title{
            word-wrap: break-word;
            height: 38px;
            overflow: hidden;
          }
          .price{
            padding-top: 5px;
          }
          .num-box{
            padding-top: 3px;
            width: 60%;
            .num{
              box-shadow: none;
            }
            .num,
            .btn-subtract,
            .btn-add{
              color: #666;
              border: 1px solid #ddd;
            }
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
