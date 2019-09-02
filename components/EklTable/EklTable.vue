<template>
  <table>
    <EklTableHeader :values="header" />
    <EklTableRow v-for="(values, index) in items" :key="index" :values="values" />
  </table>
</template>

<script>
import EklTableRow from "@eklogvinov/ekl-table-row/EklTableRow";
import EklTableHeader from "@eklogvinov/ekl-table-header/EklTableHeader";

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
    EklTableRow,
    EklTableHeader,
  }
};
</script>
<style>
</style>