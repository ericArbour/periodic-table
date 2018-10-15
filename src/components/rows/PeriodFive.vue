<template>
  <tr>
    <th>5</th>
    <chem-element :element="elements.Rubidium"/>
    <chem-element :element="elements.Strontium"/>
    <chem-element :element="elements.Yttrium"/>
    <chem-element :element="elements.Zirconium"/>
    <chem-element :element="elements.Niobium"/>
    <chem-element :element="elements.Molybdenum"/>
    <chem-element :element="elements.Technetium"/>
    <chem-element :element="elements.Ruthenium"/>
    <chem-element :element="elements.Rhodium"/>
    <chem-element :element="elements.Palladium"/>
    <chem-element :element="elements.Silver"/>
    <chem-element :element="elements.Cadmium"/>
    <chem-element :element="elements.Indium"/>
    <chem-element :element="elements.Tin"/>
    <chem-element :element="elements.Antimony"/>
    <chem-element :element="elements.Tellurium"/>
    <chem-element :element="elements.Iodine"/>
    <chem-element :element="elements.Xenon"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodFive",
  components: {
    ChemElement
  },
  props: {
    elements: Object
  }
}
</script>
