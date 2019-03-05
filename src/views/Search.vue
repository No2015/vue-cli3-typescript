<template>
  <div class="home-page">
    <div class="no-res tc">搜索--{{ keywords }}--无结果... <span class="btn" @click="back">返回</span></div>
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/search/Index.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    Content,
    Footer,
  },
})
export default class Cart extends Vue {
  private keywords: string |string[] = '';
  public created() {
    this.$store.dispatch('initSearchPage');
    this.keywords = this.$route.query.keywords;
  }
  private back() {
    this.$router.back();
  }
}
</script>

<style lang="less" scoped>
.no-res{
  padding: 15px;
  font-size: 14px;
  color: #999;
}
.btn{
  color: rgb(82, 146, 132);
}
</style>
