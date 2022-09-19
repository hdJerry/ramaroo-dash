<template>
  <div>
    <canvas ref="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Chart from "chart.js";
import { useStore } from "vuex";

export default defineComponent({
  name: "ChartLine",
});
</script>

<script lang="ts" setup>
const chart = ref(null);

const store = useStore();

onMounted(() => {
  const ctx = chart.value;
  new Chart(ctx, store.getters.data);
});
</script>
