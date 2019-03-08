<template>
  <div id="content">
    <div class="list">
      <div v-for="(item, index) in cart" :key="index" class="clearfix item">
        <div class="pull-left item-left">
          <span class="hand" @click="toUrl(item.id)">
            <img :src="item.img" :alt="item.id">
          </span>
        </div>
        <div class="pull-right item-right">
          <p class="title hand" @click="toUrl(item.id)">{{ item.title }}</p>
          <p class="price">￥{{ item.price }}</p>
          <p class="num">{{ item.num }}</p>
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
    return this.$store.state.cartList;
  }
  private toUrl(gid: string) {
    this.$router.push({ path: 'goods', query: { gid: gid } });
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
  padding: 10px;
  .list{
    padding-bottom: 10px;
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
      }
    }
  }
}
</style>
