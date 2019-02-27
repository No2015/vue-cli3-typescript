<template>
  <div class="hello">
    <h1>{{ msg }}--{{ names }}</h1>
    <input type="text" v-model="txt">
    <p>{{ getTxt }}</p>
    <button @click="add">add</button>
    <p>{{ sum }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  //props
  @Prop() private msg!: string
  @Prop() private names!: string
  //data
  private txt: string = '1'
  private sum: number = 0
  //computed
  get getTxt(){
    return this.txt
  }
  //methods
  private add(){
    this.sum++
    console.log(`sum : ${this.sum}`)
  }
  //生命周期
  created(){
    console.log('created')
  }
  //watch
  @Watch('txt') 
  changeTxt(newTxt: string, oldTxt: string){
    console.log(`change txt: ${oldTxt} to ${newTxt}`)
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
input {
  width: 240px;
  height: 32px;
  line-height: 32px;
}
</style>
