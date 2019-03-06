<template>
  <div class="goods">
    <Content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/goods/Index.vue'; // @ is an alias to /src

@Component({
  components: {
    Content,
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
