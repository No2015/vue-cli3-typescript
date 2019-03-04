<template>
  <div id="app">
      <router-view/>
      <Loading :loading="$store.state.pageLoad" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/layout/Loading.vue';

@Component({
  components: {
    Loading,
  },
})
export default class App extends Vue {}
</script>