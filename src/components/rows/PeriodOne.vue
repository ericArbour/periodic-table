<template>
  <tr>
    <th>1</th>
    <chem-element :element="elements.Hydrogen"/>
    <td colspan="1" />
    <selected-element :selectedElement="selectedElement" />
    <td colspan="7" rowspan="3" />
    <td colspan="5" />
    <chem-element :element="elements.Helium"/>
  </tr>
</template>

<script>
import ChemElement from "../ChemElement.vue";
import SelectedElement from "../dashboard/SelectedElement.vue";

export default {
  name: "PeriodOne",
  components: {
    ChemElement,
    SelectedElement
  },
  props: {
    elements: Object,
    selectedElement: Object
  }
};
</script>
