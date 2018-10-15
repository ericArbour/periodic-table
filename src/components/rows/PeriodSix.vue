<template>
  <tr>
    <th>6</th>
    <chem-element :element="elements.Cesium"/>
    <chem-element :element="elements.Barium"/>
    <td />
    <chem-element :element="elements.Hafnium"/>
    <chem-element :element="elements.Tantalum"/>
    <chem-element :element="elements.Tungsten"/>
    <chem-element :element="elements.Rhenium"/>
    <chem-element :element="elements.Osmium"/>
    <chem-element :element="elements.Iridium"/>
    <chem-element :element="elements.Platinum"/>
    <chem-element :element="elements.Gold"/>
    <chem-element :element="elements.Mercury"/>
    <chem-element :element="elements.Thallium"/>
    <chem-element :element="elements.Lead"/>
    <chem-element :element="elements.Bismuth"/>
    <chem-element :element="elements.Polonium"/>
    <chem-element :element="elements.Astatine"/>
    <chem-element :element="elements.Radon"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodSix",
  components: {
    ChemElement
  },
  props: {
    elements: Object
  }
}
</script>
