<template>
  <tbody class="table-body">
    <tr v-for="row in rows" :key="row.name.first">
      <td
        v-for="column in columns"
        :key="column.name"
        :width="column.width ? column.width : '100'"
        class="cell"
      >
        <span class="content" v-text="val(row, column.field)"></span>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import _ from "lodash";

@Component
export default class EklTableRow extends Vue {
  @Prop({
    type: Array,
    required: true,
    default: () => []
  })
  private columns!: any[];

  @Prop({
    type: Array,
    required: true,
    default: () => []
  })
  private rows!: any[];

  private val(object, attrib) {
    return _.get(object, attrib);
  }
}
</script>

<style scoped lang="scss">
.table-body {
  width: 100%;
  .cell {
    // white-space: nowrap;
    text-align: left;
    //   text-overflow: ellipsis;
    //   overflow: hidden;
    //   // max-width: 1px;
    //   min-width: 0;
    padding: 8px;
    // span {
    //   white-space: nowrap;
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    // }
  }
  // tr {
  //   background-color: white;
  //   border-radius: 4px;
  //   box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  // }
}
</style>
