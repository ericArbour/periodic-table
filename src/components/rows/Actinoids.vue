<template>
  <tr>
    <th />
    <td colspan="3" />
    <chem-element :element="elements.Actinium"/>
    <chem-element :element="elements.Thorium"/>
    <chem-element :element="elements.Protactinium"/>
    <chem-element :element="elements.Uranium"/>
    <chem-element :element="elements.Neptunium"/>
    <chem-element :element="elements.Plutonium"/>
    <chem-element :element="elements.Americium"/>
    <chem-element :element="elements.Curium"/>
    <chem-element :element="elements.Berkelium"/>
    <chem-element :element="elements.Californium"/>
    <chem-element :element="elements.Einsteinium"/>
    <chem-element :element="elements.Fermium"/>
    <chem-element :element="elements.Mendelevium"/>
    <chem-element :element="elements.Nobelium"/>
    <chem-element :element="elements.Lawrencium"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "Actinoids",
  components: {
    ChemElement
  },
  props: {
    elements: Object
  }
}
</script>
