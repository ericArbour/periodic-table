<template>
  <td 
    :class="[elementCategory, isInNotSelectedCategory]"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
  >
    <div class="atomic-number">
      {{ element.number }}
    </div>
    <div class="content-wrapper">
      <h1 class="symbol">{{ element.symbol }}</h1>
      {{ element.name }}
      <!-- <div>{{ element.atomic_mass }}</div> -->
    </div>
  </td>
</template>

<script>
import { mapGetters } from "vuex";

import {
  ALKALI_METALS_CLASS,
  ALKALI_METAL,
  ALKALINE_EARTH_METALS_CLASS,
  ALKALINE_EARTH_METAL,
  LANTHANOIDS_CLASS,
  LANTHANIDE,
  ACTINOIDS_CLASS,
  ACTINIDE,
  TRANSITION_METALS_CLASS,
  TRANSITION_METAL,
  POST_TRANSITION_METALS_CLASS,
  POST_TRANSITION_METAL,
  METALLOIDS_CLASS,
  METALLOID,
  OTHER_NONMETALS_CLASS,
  DIATOMIC_NONMETAL,
  POLYATOMIC_NONMETAL,
  NOBLE_GASES_CLASS,
  NOBLE_GAS
} from "../constants";

export default {
  name: "ChemElement",
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  computed: {
    elementCategory() {
      const { category } = this.element;
      return {
        [ALKALI_METALS_CLASS]: category === ALKALI_METAL,
        [ALKALINE_EARTH_METALS_CLASS]: category === ALKALINE_EARTH_METAL,
        [LANTHANOIDS_CLASS]: category === LANTHANIDE,
        [ACTINOIDS_CLASS]: category === ACTINIDE,
        [TRANSITION_METALS_CLASS]: category === TRANSITION_METAL,
        [POST_TRANSITION_METALS_CLASS]: category === POST_TRANSITION_METAL,
        [METALLOIDS_CLASS]: category === METALLOID,
        [OTHER_NONMETALS_CLASS]: [
          DIATOMIC_NONMETAL,
          POLYATOMIC_NONMETAL
        ].includes(category),
        [NOBLE_GASES_CLASS]: category === NOBLE_GAS
      };
    },
    ...mapGetters(["selectedCategory"]),
    isInNotSelectedCategory() {
      const { category } = this.element;
      return {
        "is-not-in-selected-category":
          this.selectedCategory && !this.selectedCategory.includes(category)
      };
    }
  },
  methods: {
    onMouseOver() {
      this.$store.dispatch("setSelectedElement", this.element);
    },
    onMouseLeave() {
      this.$store.dispatch("setSelectedElement", null);
    }
  }
};
</script>

<style scoped>
td {
  width: 8vmin;
  height: 8vmin;
  font-size: 1.2vmin;
  border: 1px solid #fff;
  position: relative;
  color: #000;
  background-color: #eee;
}
.atomic-number {
  position: absolute;
  right: 0.3vmin;
  top: 0.3vmin;
  font-size: 1.5vmin;
}
.content-wrapper {
  margin: 0 0.5vmin 0 0.5vmin;
}
td h1 {
  margin: 0;
}
.symbol {
  font-size: 3vmin;
}
.is-not-in-selected-category {
  background-color: #bbb !important;
}
</style>
