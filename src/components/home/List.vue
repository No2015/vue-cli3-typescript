<template>
  <div class="list">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Item from './Item.vue';

@Component({
  components: {
    Item,
  },
})
export default class HomeList extends Vue {

}
</script>
