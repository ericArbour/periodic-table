<template>
  <tr>
    <th>1</th>
    <chem-element :element="elements.Hydrogen"/>
    <td colspan="16" />
    <chem-element :element="elements.Helium"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodOne",
  components: {
    ChemElement
  },
  props: {
    elements: Object
  }
}
</script>
