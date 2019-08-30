<template>
  <table>
    <EklTableRow v-for="(values, index) in items" :key="index" :values="values" />
  </table>
</template>

<script>
import EklTableRow from "@eklogvinov/ekl-table-row/EklTableRow";
export default {
  name: "EklTable",
  props: {
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
