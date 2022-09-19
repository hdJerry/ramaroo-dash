<template>
  <div class="rounded-md shadow-sm bg-white py-3 min-h-[553px]">
    <Chart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatsDisplay",
});
</script>

<script lang="ts" setup>
import Chart from "@/components/Chart";
</script>
