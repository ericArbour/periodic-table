<template>
  <td @mouseover="onMouseOver">
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
import EventBus from "../utilities/event-bus";

export default {
  name: "ChemElement",
  props: {
    element: Object
  },
  methods: {
    onMouseOver() {
      EventBus.$emit("test", this.$props.element);
    }
  }
};
</script>

<style scoped>
td {
  width: 8vmin;
  height: 8vmin;
  font-size: 1.2vmin;
  border: 1px solid black;
  position: relative;
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
</style>