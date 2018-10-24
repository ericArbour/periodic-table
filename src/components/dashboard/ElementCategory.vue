<template>
  <li :class="isActive">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: "ElementCategory",
  props: {
    selectedElement: {
      type: Object
    },
    categories: {
      type: Array,
      required: true
    }
  },
  computed: {
    isActive() {
      const { category } = this.selectedElement || {};
      return {
        active: this.categories.includes(category)
      };
    }
  }
};
</script>

<style scoped>
.active {
  font-weight: bold;
  border: 2px solid black;
}
</style>
