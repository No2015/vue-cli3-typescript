<template>
  <div class="goods">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    // HelloWorld,
  },
})
export default class Goods extends Vue {
  public beforeMount() {
    if (!this.$route.query.gid) {
      this.$router.back();
    }
  }
  public created() {
    const gid = this.$route.query.gid;
    //this.$store.dispatch('initSearchPage', gid);
  }
}
</script>
