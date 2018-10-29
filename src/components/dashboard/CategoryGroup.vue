<template>
  <div :class="[isACategorySelected]">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CategoryGroup",
  computed: {
    ...mapGetters(["selectedCategory"]),
    isACategorySelected() {
      return {
        "is-a-category-selected": !!this.selectedCategory
      };
    }
  }
};
</script>

<style scoped>
.metals-group {
  background-color: #eef1ff;
}
.nonmetals-group {
  background-color: #f2ffe7;
}
.is-a-category-selected {
  background-color: #eee;
}
</style>
