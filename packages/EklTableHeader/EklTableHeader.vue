<template>
  <thead class="table-header">
    <tr>
      <th
        v-for="column in columns"
        :key="column.name"
        :data-column-name="column.name"
        :width="column.width ? column.width : '100'"
        class="header"
      >
        <span class="text" v-text="column.label"></span>
        <font-awesome-icon class="icon" icon="sort" />
      </th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EklTableHeader extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: () => []
  })
  private columns!: string[];
}
</script>

<style scoped lang="scss">
.table-header {
  width: 100%;
  .header {
    padding: 8px;
    text-align: left;
  }
}
</style>
