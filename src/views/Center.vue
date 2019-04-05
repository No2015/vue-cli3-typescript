<template>
  <div class="home-page">
    <Content />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/center/Index.vue';
import Footer from '@/components/layout/Footer.vue';

@Component({
  components: {
    Content,
    Footer,
  },
})
export default class Center extends Vue {
  public created() {
    this.$store.dispatch('initCenterPage');
  }
}
</script>
