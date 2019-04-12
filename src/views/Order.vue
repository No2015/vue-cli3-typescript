<template>
  <div class="home-page">
    <Content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from '@/components/order/Index.vue';

@Component({
  components: {
    Content,
  },
})
export default class Order extends Vue {
  public created() {
    const status = this.$route.query.status;
    this.$store.dispatch('initOrderPage', status);
  }
}
</script>
