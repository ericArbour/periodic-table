<template>
  <td colspan="3" rowspan="3" :style="style">
    <div class="atomic-number">
      {{ number }}
    </div>
    <div class="content-wrapper">
      <h1 class="symbol">{{ symbol }}</h1>
      <p>{{ name }}</p>
    </div>
    <div class="atomic-mass">{{ mass }}</div>
  </td>
</template>

<script>
import chroma from "chroma-js";

export default {
  name: "SelectedElement",
  props: {
    selectedElement: {
      type: Object
    }
  },
  computed: {
    number() {
      return this.selectedElement
        ? this.selectedElement.number
        : "Atomic Number";
    },
    symbol() {
      return this.selectedElement ? this.selectedElement.symbol : "Symbol";
    },
    name() {
      return this.selectedElement ? this.selectedElement.name : "Name";
    },
    mass() {
      return this.selectedElement
        ? this.selectedElement.atomic_mass
        : "Atomic Mass";
    },
    style() {
      const { cpkHexColor } = this.selectedElement || {};
      const backgroundColor = cpkHexColor ? chroma(cpkHexColor).hex() : "#fff";
      const [red, green, blue] = chroma(backgroundColor).rgb();
      // determine backround intensity to decide if font color should be white or black. Formula per:
      // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
      const intensity = red * 0.299 + green * 0.587 + blue * 0.114;
      const color = intensity > 186 ? "#000" : "#fff";

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
  border: 1px solid #fff;
  position: relative;
  font-size: 3vmin;
}
.atomic-number {
  position: absolute;
  right: 0.3vmin;
  top: 0.3vmin;
}
.content-wrapper {
  margin: 0 0.5vmin 0 0.5vmin;
}
.atomic-mass {
  position: absolute;
  left: 0.3vmin;
  bottom: 0.3vmin;
}
td h1 {
  margin: 0;
}
td p {
  margin: 0;
}
.symbol {
  font-size: 5vmin;
}
</style>
