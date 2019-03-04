<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>num: {{ num }}</p>
    <HelloWorld msg="SSH 测试" names="cqw" @getAge="getAge" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private num: number = 0;
  // emit
  private getAge(num: number = 0) {
    this.num = num;
  }
}
</script>
