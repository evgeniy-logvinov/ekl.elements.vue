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
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSort,
  faSortDown,
  faSortUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

library.add(faSort, faSortDown, faSortUp);

@Component({
  components: {
    FontAwesomeIcon,
  }
})
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
    padding-right: 20px;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 1px;
    .icon {
      position: absolute;
      top: 25%;
      right: 10px;
      cursor: pointer;
    }
  }

  tr {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
  }
}
</style>
