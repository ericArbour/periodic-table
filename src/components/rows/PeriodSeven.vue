<template>
  <tr>
    <th>7</th>
    <chem-element :element="elements.Francium"/>
    <chem-element :element="elements.Radium"/>
    <td />
    <chem-element :element="elements.Rutherfordium"/>
    <chem-element :element="elements.Dubnium"/>
    <chem-element :element="elements.Seaborgium"/>
    <chem-element :element="elements.Bohrium"/>
    <chem-element :element="elements.Hassium"/>
    <chem-element :element="elements.Meitnerium"/>
    <chem-element :element="elements.Darmstadtium"/>
    <chem-element :element="elements.Roentgenium"/>
    <chem-element :element="elements.Copernicium"/>
    <chem-element :element="elements.Nihonium"/>
    <chem-element :element="elements.Flerovium"/>
    <chem-element :element="elements.Moscovium"/>
    <chem-element :element="elements.Livermorium"/>
    <chem-element :element="elements.Tennessine"/>
    <chem-element :element="elements.Oganesson"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodSeven",
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
