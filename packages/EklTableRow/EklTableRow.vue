<template>
  <tr>
    <td v-for="(value, index) in values" :key="index">{{ value }}</td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EklTableRow extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private values!: string[];
}
</script>

<style scoped>
tr {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
td {
  padding: 8px;
}
</style>
