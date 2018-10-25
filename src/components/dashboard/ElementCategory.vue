<template>
  <div 
    :class="isActive"
    class="category"
    @mouseover="onMouseOver"
  >
    <slot></slot>
  </div>
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
  },
  methods: {
    onMouseOver() {
      this.$store.dispatch("setSelectedCategory", this.categories);
    }
  }
};
</script>

<style scoped>
.category {
  border: 1px solid #000;
  margin: 2px;
  padding: 2px;
}
.active {
  outline: 1px solid #222;
}
</style>
