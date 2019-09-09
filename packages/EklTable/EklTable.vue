<template>
  <table>
    <EklTableHeader :values="header" />
    <EklTableRow v-for="(values, index) in items" :key="index" :values="values" />
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import EklTableRow from "@eklogvinov/ekl-table-row/EklTableRow";
import EklTableHeader from "@eklogvinov/ekl-table-header/EklTableHeader";

@Component({
  components: {
    EklTableHeader,
    EklTableRow
  }
})
export default class EklTable extends Vue {
  @Prop({
    type: Array,
    default: () => []
  })
  private header!: [];

  @Prop({
    type: Array,
    default: () => [],
    required: true
  })
  private items!: [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>