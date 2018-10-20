<template>
  <td colspan="3" rowspan="3" :style="backgroundColor">
    <div class="atomic-number">
      {{ number }}
    </div>
    <div class="content-wrapper">
      <h1 class="symbol">{{ symbol }}</h1>
      {{ name }}
      <div>{{ mass }}</div>
    </div>
  </td>
</template>

<script>
import chroma from "chroma-js";

export default {
  name: "SelectedElement",
  props: {
    selectedElement: Object
  },
  computed: {
    number: function() {
      return this.selectedElement
        ? this.selectedElement.number
        : "Atomic Number";
    },
    symbol: function() {
      return this.selectedElement ? this.selectedElement.symbol : "Symbol";
    },
    name: function() {
      return this.selectedElement ? this.selectedElement.name : "Name";
    },
    mass: function() {
      return this.selectedElement
        ? this.selectedElement.atomic_mass
        : "Atomic Mass";
    },
    backgroundColor: function() {
      const { selectedElement } = this;
      const { cpkHexColor } = selectedElement || {};
      const backgroundColor = cpkHexColor ? chroma(cpkHexColor).hex() : "#fff";

      const [h, s, l] = chroma(backgroundColor).hsl();

      const newH = !isNaN(h) && (h + 180 > 360 ? h - 180 : h + 180);

      const color = newH ? chroma.hsl(newH, s, l).hex() : "#000";
      console.log(color);

      return {
        backgroundColor,
        color
      };
    }
  }
};
</script>

<style scoped>
td {
  border: 1px solid black;
  position: relative;
  font-size: 2vmin;
}
.atomic-number {
  position: absolute;
  right: 0.3vmin;
  top: 0.3vmin;
  font-size: 3vmin;
}
.content-wrapper {
  margin: 0 0.5vmin 0 0.5vmin;
}
td h1 {
  margin: 0;
}
.symbol {
  font-size: 5vmin;
}
</style>
