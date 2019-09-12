<template>
  <table class="table-header">
    <tr>
      <th
        v-for="column in columns"
        :key="column.name"
        :data-column-name="column.name"
        :width="column.width ? column.width : '100'"
        class="header"
      >
        <span class="content">
          <span class="text" v-text="column.label"></span>
          <span class="content-icon">
            <font-awesome-icon class="icon" icon="sort" />
            <!-- <font-awesome-icon icon="sort-up" />
            <font-awesome-icon icon="sort-down" />-->
          </span>
        </span>
      </th>
    </tr>
  </table>
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
.header {
  padding: 8px;
  text-align: left;
  .content {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    cursor: pointer;
    .text {
      display: inline-block;
      width: 90%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .content-icon {
      display: inline-block;
      width: 10%;
      min-width: 20px;
      vertical-align: baseline;
      .icon {
        display: inline-block;
        width: 100%;
        vertical-align: baseline;
      }
    }
  }
}
tr {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
.header:hover {
  background-color: #edebeb;
}
</style>
