<template>
  <td>
    <div>
      <div>{{ element.atomic_mass }}</div>
      <div>{{ element.number }}</div>
      <h1>{{ element.symbol }}</h1>
      {{ element.name }}
    </div>
  </td>
</template>

<script>
export default {
  name: "ChemElement",
  props: {
    element: Object
  }
};
</script>

<style scoped>
</style>
