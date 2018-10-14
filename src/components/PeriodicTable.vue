<template>
  <div>
    <h1>The Periodic Table</h1>
    <div class="ui cards">
      <Element 
        v-for="element in elements"
        :key="element.name"
        :element="element"
      />
    </div>
  </div>
</template>

<script>
import elements from "../data/elements";
import Element from "./Element.vue";

console.log(elements);

export default {
  name: "PeriodicTable",
  components: {
    Element
  },
  data: function() {
    return {
      elements
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
