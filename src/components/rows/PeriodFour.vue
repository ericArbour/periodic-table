<template>
  <tr>
    <th>4</th>
    <chem-element :element="elements.Potassium"/>
    <chem-element :element="elements.Calcium"/>
    <chem-element :element="elements.Scandium"/>
    <chem-element :element="elements.Titanium"/>
    <chem-element :element="elements.Vanadium"/>
    <chem-element :element="elements.Chromium"/>
    <chem-element :element="elements.Manganese"/>
    <chem-element :element="elements.Iron"/>
    <chem-element :element="elements.Cobalt"/>
    <chem-element :element="elements.Nickel"/>
    <chem-element :element="elements.Copper"/>
    <chem-element :element="elements.Zinc"/>
    <chem-element :element="elements.Gallium"/>
    <chem-element :element="elements.Germanium"/>
    <chem-element :element="elements.Arsenic"/>
    <chem-element :element="elements.Selenium"/>
    <chem-element :element="elements.Bromine"/>
    <chem-element :element="elements.Krypton"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";

export default {
  name: "PeriodFour",
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
