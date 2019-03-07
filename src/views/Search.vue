<template>
  <div class="home-page">
    <SearchHeader :title="title" />
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchHeader from '@/components/layout/TextHeader.vue';
import Content from '@/components/search/Index.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    SearchHeader,
    Content,
    Footer,
  },
})
export default class Search extends Vue {
  get title() {
    return '搜索: ' + this.$store.state.searchKeywords;
  }
  public beforeMount() {
    if (!this.$route.query.keywords) {
      this.$router.replace('/');
    }
  }
  public created() {
    const keywords = this.$route.query.keywords;
    this.$store.dispatch('initSearchPage', keywords);
  }
}
</script>
