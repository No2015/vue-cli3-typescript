<template>
  <div class="hello">
    <h1>{{ msg }}--{{ names }}</h1>
    <input type="text" v-model="txt">
    <p>{{ getTxt }}</p>
    <button @click="add">add</button>
    <button @click="about">to about</button>
    <p>{{ sum }}</p>
    <p>name: <input type="text" v-model="person.name"></p>
    <p>age: <input type="text" v-model.number="person.age" @input="returnAge(person.age)"></p>
    {{ person }}
    <!-- <p>{{ xiaoming }}</p> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

interface Person {
  name: string;
  age: number;
}

// class Student {
//   private nianji: number;
//   private xingming: string;
//   private nianling: number;
//   private xuexiao: string;
//   constructor(nianji: number = 3, xingming: string = '***', nianling: number = 10, xuexiao: string = '**') {
//     this.nianji = nianji;
//     this.xingming = xingming;
//     this.nianling = nianling;
//     this.xuexiao = xuexiao;
//   }
//   private getAge() {
//     return this.nianling;
//   }
// }

@Component
export default class HelloWorld extends Vue {
  // props
  @Prop() private msg!: string;
  @Prop() private names!: string;
  // data
  private txt: string = 'hello world';
  private sum: number = 0;
  private person: Person = {
    name: '陈其文',
    age: 28,
  };
  // private xiaoming: Student = new Student(3, '小明' ,9 ,'三好小学');

  // emit
  @Emit('getAge')
  private returnAge(age: number) {
    return age;
  }

  // computed
  get getTxt() {
    return this.txt;
  }
  // methods
  private add() {
    this.sum++;
    this.person.age++;
    // console.log(`sum : ${this.sum}`)
  }
  private about() {
    this.$router.push('/about');
  }
  // 生命周期
  private created() {
    // console.log(this.xiaoming.getAge(),this.$store.state.open)
  }
  // watch
  @Watch('txt')
  private changeTxt(newTxt: string, oldTxt: string) {
    // console.log(newTxt)
  }
  @Watch('person', {deep: true})
  private changePerson(newPerson: Person, oldPerson: Person) {
    // console.log(newPerson)
  }
  // @Watch('$route',{deep: true, immediate: true })
  // private changeRouter(route: Route){
  //     console.log(route)
  // }
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
