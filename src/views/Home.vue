<template>
  <div class="home-page">
    <Header :avatar="$store.state.userInfo.avatar" />
    <Content :cate="$store.state.homeCate" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/layout/Header.vue';
import Content from '@/components/home/Index.vue';
import Footer from '@/components/layout/Footer.vue';

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
}
</script>
