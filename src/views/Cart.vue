<template>
  <div class="home-page">
    <Header title="购物车" />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/TextHeader.vue';
import Content from '@/components/cart/Index.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    Header,
    Content,
    Footer,
  },
})
export default class Cart extends Vue {
  public created() {
    this.$store.dispatch('initCartPage');
  }
}
</script>
