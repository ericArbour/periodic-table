<template>
  <div 
    :class="[isActive, isInNotSelectedCategory]"
    class="category"
    @mouseover="onMouseOver"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

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
    ...mapGetters(["selectedCategory"]),
    isActive() {
      const { category } = this.selectedElement || {};
      return {
        active: this.categories.includes(category)
      };
    },
    isInNotSelectedCategory() {
      return {
        "is-not-in-selected-category":
          this.selectedCategory &&
          !arraysEqual(this.selectedCategory, this.categories)
      };
    }
  },
  methods: {
    ...mapActions(["setSelectedCategory"]),
    onMouseOver() {
      this.setSelectedCategory(this.categories);
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
