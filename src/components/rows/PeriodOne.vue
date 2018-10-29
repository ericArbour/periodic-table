<template>
  <tr>
    <th>1</th>
    <chem-element :element="elements.Hydrogen"/>
    <td colspan="1" />
    <selected-element :selectedElement="selectedElement" />
    <element-categories :selectedElement="selectedElement" />
    <temp-slider />
    <chem-element :element="elements.Helium"/>
  </tr>
</template>

<script>
import { mapGetters } from "vuex";
import ChemElement from "../ChemElement.vue";
import SelectedElement from "../dashboard/SelectedElement.vue";
import ElementCategories from "../dashboard/ElementCategories.vue";
import TempSlider from "../dashboard/TempSlider.vue";

export default {
  name: "PeriodOne",
  components: {
    ChemElement,
    SelectedElement,
    ElementCategories,
    TempSlider
  },
  props: {
    elements: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(["selectedElement"])
  }
};
</script>
