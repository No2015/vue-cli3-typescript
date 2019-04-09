<template>
  <div id="app">
      <keep-alive>
        <transition name="fade">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>
      <transition name="fade">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
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
export default class App extends Vue {
  public beforeMount() {
    this.$store.dispatch('initUserInfo');
  }
}
</script>

<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
