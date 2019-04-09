import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class MyMixin extends Vue {
  public activated() {
    const scrollTop = this.$route.meta.scrollTop;
    const $content = document.querySelector('#content');
    if (scrollTop && $content) {
      $content.scrollTop = scrollTop;
    }
  }
}
