<template>
  <div class="home-page">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';
import Content from '@/components/home/Index.vue';
import Footer from '@/components/layout/Footer.vue';
import { Route } from '_vue-router@3.0.2@vue-router';

@Component({
  components: {
    Header,
    Content,
    Footer,
  },
})
export default class Home extends Vue {
  public created() {
    this.$store.dispatch('initHomePage');
  }
  public activated() {
    const scrollTop = this.$route.meta.scrollTop;
    const $content = document.querySelector('#content');
    if (scrollTop && $content) {
      $content.scrollTop = scrollTop;
    }
  }
  public beforeRouteLeave(to: Route, from: Route, next: () => void) {
    const $content = document.querySelector('#content');
    const scrollTop = $content ? $content.scrollTop : 0;
    this.$route.meta.scrollTop = scrollTop;
    next();
  }
}
</script>
