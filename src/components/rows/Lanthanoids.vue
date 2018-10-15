<template>
  <tr>
    <th />
    <td colspan="3" />
    <chem-element :element="elements.Lanthanum"/>
    <chem-element :element="elements.Cerium"/>
    <chem-element :element="elements.Praseodymium"/>
    <chem-element :element="elements.Neodymium"/>
    <chem-element :element="elements.Promethium"/>
    <chem-element :element="elements.Samarium"/>
    <chem-element :element="elements.Europium"/>
    <chem-element :element="elements.Gadolinium"/>
    <chem-element :element="elements.Terbium"/>
    <chem-element :element="elements.Dysprosium"/>
    <chem-element :element="elements.Holmium"/>
    <chem-element :element="elements.Erbium"/>
    <chem-element :element="elements.Thulium"/>
    <chem-element :element="elements.Ytterbium"/>
    <chem-element :element="elements.Lutetium"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "Lanthanoids",
  components: {
    ChemElement
  },
  props: {
    elements: Object
  }
}
</script>
