<template>
  <div class="home-page">
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/cart/Index.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    Content,
    Footer,
  },
})
export default class Cart extends Vue {
  created() {
    this.$store.dispatch('initCartPage');
  }
}
</script>
