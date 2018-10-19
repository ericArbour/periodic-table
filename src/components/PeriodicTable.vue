<template>
  <div class="periodic-table-container">
    <h1>The Periodic Table</h1>
    <table>
      <table-header />
      <tbody>
        <period-one 
          :elements="elements" 
          :selectedElement="selectedElement"
        />
        <period-two :elements="elements" />
        <period-three :elements="elements" />
        <period-four :elements="elements" />
        <period-five :elements="elements" />
        <period-six :elements="elements" />
        <period-seven :elements="elements" />
        <tr><td colspan="19" /></tr>
        <lanthanoids :elements="elements" />
        <actinoids :elements="elements" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import elements from "../data/elements";
import TableHeader from "./TableHeader.vue";
import PeriodOne from "./rows/PeriodOne.vue";
import PeriodTwo from "./rows/PeriodTwo.vue";
import PeriodThree from "./rows/PeriodThree.vue";
import PeriodFour from "./rows/PeriodFour.vue";
import PeriodFive from "./rows/PeriodFive.vue";
import PeriodSix from "./rows/PeriodSix.vue";
import PeriodSeven from "./rows/PeriodSeven.vue";
import Lanthanoids from "./rows/Lanthanoids.vue";
import Actinoids from "./rows/Actinoids.vue";

export default {
  name: "PeriodicTable",
  components: {
    TableHeader,
    PeriodOne,
    PeriodTwo,
    PeriodThree,
    PeriodFour,
    PeriodFive,
    PeriodSix,
    PeriodSeven,
    Lanthanoids,
    Actinoids
  },
  data: function() {
    return {
      elements
    };
  },
  computed: {
    ...mapState(["selectedElement"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.periodic-table-container {
  padding: 0 1% 0 1%;
}
table {
  border-spacing: 0px;
  border-collapse: collapse;
}
</style>
