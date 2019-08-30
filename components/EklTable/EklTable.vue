<template>
  <table>
    <tr>
      <th v-for="(label, index) in header" :key="index">{{ label }}</th>
    </tr>
    <EklTableRow v-for="(values, index) in items" :key="index" :values="values" />
  </table>
</template>

<script>
import EklTableRow from "@eklogvinov/ekl-table-row/EklTableRow";
export default {
  name: "EklTable",
  props: {
    header: {
      type: Array
    },
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    EklTableRow
  }
};
</script>
<style>
th {
  text-align: left;
  padding: 8px;
  font-size: 13px;
  color: #8d8d92;
}
</style>