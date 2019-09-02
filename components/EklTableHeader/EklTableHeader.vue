<template>
  <tr>
    <th v-for="(label, index) in values" :key="index">{{ label }}</th>
  </tr>
</template>

<script>
export default {
  name: "EklTableHeader",
  props: {
    values: {
      type: Array,
      required: true
    }
  }
};
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