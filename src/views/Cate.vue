<template>
  <div class="home-page">
    <TextHeader :title="title" />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TextHeader from '@/components/layout/TextHeader.vue';
import Content from '@/components/cate/Index.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    TextHeader,
    Content,
    Footer,
  },
})
export default class Cate extends Vue {
  public beforeMount() {
    if (!this.$route.query.cid) {
      this.$router.replace('/');
    }
  }
  public created() {
    const cid = this.$route.query.cid;
    this.$store.dispatch('initCatePage', cid);
  }
  get title() {
    return this.$store.state.cateTitle;
  }
}
</script>
