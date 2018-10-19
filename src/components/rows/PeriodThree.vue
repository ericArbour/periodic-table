<template>
  <tr>
    <th>3</th>
    <chem-element :element="elements.Sodium"/>
    <chem-element :element="elements.Magnesium"/>
    <chem-element :element="elements.Aluminium"/>
    <chem-element :element="elements.Silicon"/>
    <chem-element :element="elements.Phosphorus"/>
    <chem-element :element="elements.Sulfur"/>
    <chem-element :element="elements.Chlorine"/>
    <chem-element :element="elements.Argon"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodThree",
  components: {
    ChemElement
  },
  props: {
    elements: Object
  }
};
</script>
