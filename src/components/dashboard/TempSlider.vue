<template>
  <td colspan="5">
    <h4>Temperature</h4>
    {{ temperature }}
    <input 
      type="number"
      min="0"
      max="6000"
      :value="temperature"
      onkeyup="if(this.value > 6000) this.value = 6000; if(!this.value) this.value = 0;"
      @input="setTemperature"
    />
    <div class="slide-container">
      <input 
        type="range"
        min="0"
        max="6000"
        :value="temperature"
        @input="setTemperature"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"
        class="slider"
      />
    </div>
  </td>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TempSlider",
  computed: {
    ...mapGetters(["temperature", "isTempActive"])
  },
  methods: {
    ...mapActions(["setTemperature", "setIsTempActive"]),
    onMouseDown() {
      this.setIsTempActive(true);
    },
    onMouseUp() {
      this.setIsTempActive(false);
    }
  }
};
</script>

<style scoped>
td {
  color: #000;
  background-color: #fff;
}
input {
  width: 300px;
}
</style>
