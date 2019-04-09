<template>
  <div class="home-page">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';
import Content from '@/components/home/Index.vue';
import Footer from '@/components/layout/Footer.vue';
import { Route } from '_vue-router@3.0.2@vue-router';
import MyMixin from '@/global/mixin';

@Component({
  components: {
    Header,
    Content,
    Footer,
  },
})
export default class Home extends Mixins(MyMixin) {
  public created() {
    this.$store.dispatch('initHomePage');
  }
}
</script>
