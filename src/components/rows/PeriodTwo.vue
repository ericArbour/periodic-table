<template>
  <tr>
    <th>2</th>
    <chem-element :element="elements.Lithium"/>
    <chem-element :element="elements.Beryllium"/>
    <chem-element :element="elements.Boron"/>
    <chem-element :element="elements.Carbon"/>
    <chem-element :element="elements.Nitrogen"/>
    <chem-element :element="elements.Oxygen"/>
    <chem-element :element="elements.Fluorine"/>
    <chem-element :element="elements.Neon"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodTwo",
  components: {
    ChemElement
  },
  props: {
    elements: {
      type: Object,
      required: true
    }
  }
};
</script>
