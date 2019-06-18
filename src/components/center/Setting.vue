<template>
  <div class="setting">
    <Datepicker />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Datepicker from 'vuejs-datepicker';

@Component({
  components: {
    Datepicker
  },
})
export default class CenterSetting extends Vue {

}
</script>

<style lang="less" scoped>

</style>
