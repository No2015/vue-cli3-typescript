<template>
  <div id="tab-comments">
    <div v-for="(item, index) in comments" :key="index" class="item">
      <div class="item-head cearfix">
        <div class="pull-left avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="pull-right user-info">
          <p class="name">{{ item.name }}</p>
          <p class="time">{{ formatTime(item.time) }}</p>
        </div>
      </div>
      <div class="item-cont">
        {{ item.text }}
      </div>
    </div>
    <div v-show="comments.length == 0">
      <p class="no-data tc">暂无数据...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Comments extends Vue {
  private formatTime(time: any) {
    if (isNaN(time)) {
      return time;
    }
    time = time + '';
    if (time.length === 10) {
      time = time + '000';
    }
    const date = new Date(time * 1);
    const year = date.getFullYear();
    const month = this.formatStr(date.getMonth() + 1);
    const day = this.formatStr(date.getDate());
    const hours = this.formatStr(date.getHours());
    const minutes = this.formatStr(date.getMinutes());
    const seconds = this.formatStr(date.getSeconds());
    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }
  private formatStr(num: number) {
    const str = '00' + num;
    return str.substr(str.length - 2, 2);
  }
  get comments() {
    return this.$store.state.goodsDetail.comments;
  }
}
</script>

<style lang="less" scoped>
#tab-comments{
  padding: 10px 0;
  .item{
    padding: 0 10px 10px;
    .item-head{
      height: 42px;
      overflow: hidden;
      padding-bottom: 5px;
      .avatar{
        width: 32px;
        height: 32px;
        padding: 5px;
        img{
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      .user-info{
        height: 42px;
        width: calc(100% - 52px);
        overflow: hidden;
        .name{
          padding-top: 5px;
          height: 21px;
          line-height: 21px;
          color: #333;
          overflow: hidden;
        }
        .time{
          color: #999;
          font-size: 12px;
          height: 12px;
          line-height: 12px;
        }
      }
    }
    .item-cont{
      font-size: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f3f3f3;
    }
  }
  .no-data{
    color: #999;
  }
}
</style>
