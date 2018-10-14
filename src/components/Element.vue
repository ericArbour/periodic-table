<template>
  <div class="card">
    <div class="content">
      {{ element.number }}
      {{ element.symbol }}
      {{ element.name }}
      {{ element.atomic_mass }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Element",
  props: {
    element: Object
  }
};
</script>
