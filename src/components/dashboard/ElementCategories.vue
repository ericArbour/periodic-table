<template>
  <td colspan="7" rowspan="3">
    <h2>Categories</h2>
    <div class="category-container">
      <div class="group-container metals-group">
        <h3>Metals</h3>
        <ul>
          <li 
            :class="alkaliMetalsActive"
            class="category alkali-metals"
          >
            Alkali Metals
          </li>
          <li 
            :class="alkalineEarthMetalsActive"
            class="category alkaline-earth-metals"
          >
            Alkaline Earth Metals
          </li>
          <li
            :class="lanthanoidsActive"
            class="category lanthanoids"
          >
            Lanthanoids
          </li>
          <li
            :class="actinoidsActive"
            class="category actinoids"
          >
            Actinoids
          </li>
          <li
            :class="transitionMetalsActive"
            class="category transition-metals"
          >
            Transition Metals
          </li>
          <li 
            :class="postTransitionMetalsActive"
            class="category post-transition-metals"
          >
            Post-Transition Metals
          </li>
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
          <li class="category other-nonmetals">Other Nonmetals</li>
          <li class="category noble-gases">Noble Gases</li>
        </ul>
      </div>
    </div>
  </td>
</template>

<script>
export default {
  name: "ElementCategories",
  props: {
    selectedElement: {
      type: Object
    }
  },
  computed: {
    alkaliMetalsActive() {
      return {
        active: false
      };
    },
    alkalineEarthMetalsActive() {
      return {
        active: false
      };
    },
    lanthanoidsActive() {
      return {
        active: false
      };
    },
    actinoidsActive() {
      return {
        active: false
      };
    },
    transitionMetalsActive() {
      return {
        active: false
      };
    },
    postTransitionMetalsActive() {
      return {
        active: false
      };
    }
  },
  watch: {
    selectedElement(test) {
      console.log(test);
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
