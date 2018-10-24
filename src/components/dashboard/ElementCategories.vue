<template>
  <td colspan="7" rowspan="3">
    <h2>Categories</h2>
    <div class="category-container">
      <div class="group-container metals-group">
        <h3>Metals</h3>
        <ul>
          <element-category 
            :categories="alkaliMetal"
            :selectedElement="selectedElement"
            class="category alkali-metals"
          >
            Alkali Metals
          </element-category>
          <element-category 
            :categories="alkalineEarthMetal"
            :selectedElement="selectedElement"
            class="category alkaline-earth-metals"
          >
            Alkaline Earth Metals
          </element-category>
          <element-category 
            :categories="lanthanide"
            :selectedElement="selectedElement" 
            class="category lanthanoids"
          >
            Lanthanoids
          </element-category>
          <element-category 
            :categories="actinide"
            :selectedElement="selectedElement"
            class="category actinoids"
          >
            Actinoids
          </element-category>
          <element-category 
            :categories="transitionMetal"
            :selectedElement="selectedElement" 
            class="category transition-metals"
          >
            Transition Metals
          </element-category>
          <element-category 
            :categories="postTransitionMetal"
            :selectedElement="selectedElement" 
            class="category post-transition-metals"
          >
            Post-Transition Metals
          </element-category>
        </ul>
      </div>
      <div class="group-container metalloids-group metalloids">
        <h3>M</h3>
        <h3>e</h3>
        <h3>t</h3>
        <h3>a</h3>
        <h3>l</h3>
        <h3>l</h3>
        <h3>o</h3>
        <h3>i</h3>
        <h3>d</h3>
        <h3>s</h3>
      </div>
      <div class="group-container nonmetals-group">
        <h3>Nonmetals</h3>
        <ul>
          <element-category 
            :categories="otherNonmetal"
            :selectedElement="selectedElement" 
            class="category other-nonmetals"
          >
            Other Nonmetals
          </element-category>
          <element-category 
            :categories="nobleGas"
            :selectedElement="selectedElement" 
            class="category noble-gases"
          >
            Noble Gases
          </element-category>
        </ul>
      </div>
    </div>
  </td>
</template>

<script>
import ElementCategory from "./ElementCategory";
import {
  ALKALI_METAL,
  ALKALINE_EARTH_METAL,
  LANTHANIDE,
  ACTINIDE,
  TRANSITION_METAL,
  POST_TRANSITION_METAL,
  METALLOID,
  DIATOMIC_NONMETAL,
  POLYATOMIC_NONMETAL,
  NOBLE_GAS
} from "../../constants";

export default {
  name: "ElementCategories",
  components: {
    ElementCategory
  },
  data: function() {
    return {
      alkaliMetal: [ALKALI_METAL],
      alkalineEarthMetal: [ALKALINE_EARTH_METAL],
      lanthanide: [LANTHANIDE],
      actinide: [ACTINIDE],
      transitionMetal: [TRANSITION_METAL],
      postTransitionMetal: [POST_TRANSITION_METAL],
      metalloid: [METALLOID],
      otherNonmetal: [DIATOMIC_NONMETAL, POLYATOMIC_NONMETAL],
      nobleGas: [NOBLE_GAS]
    };
  },
  props: {
    selectedElement: {
      type: Object
    }
  }
};
</script>

<style scoped>
td {
  border: 1px solid #fff;
  position: relative;
  color: #000;
  background-color: #fff;
  text-align: center;
  font-size: 1.3vmin;
}
td h3 {
  margin: 0;
}
td h2 {
  margin: 0;
}
td ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.category-container {
  display: flex;
}
.group-container {
  border: 1px solid #000;
  margin: 2px;
  padding: 2px;
}
.category {
  border: 1px solid #000;
  margin: 2px;
  padding: 2px;
}
.metals-group {
  background-color: #eef1ff;
}
.nonmetals-group {
  background-color: #f2ffe7;
}
</style>
