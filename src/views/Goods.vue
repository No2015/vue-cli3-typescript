<template>
  <div class="home-page">
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/goods/Index.vue'; // @ is an alias to /src
import Footer from '@/components/layout/GoodsFooter.vue'; // @ is an alias to /src

@Component({
  components: {
    Content,
    Footer,
  },
})
export default class Goods extends Vue {
  public beforeMount() {
    if (!this.$route.query.gid) {
      this.$router.back();
    }
  }
  public created() {
    const gid = this.$route.query.gid;
    this.$store.dispatch('initGoodsDetail', gid);
  }
  get goodsDetail() {
    return this.$store.state.goodsDetail;
  }
}
</script>
