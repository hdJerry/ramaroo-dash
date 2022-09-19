<template>
  <div class="flex flex-no-wrap bg-gray-200 px-5 py-3">
    <slot name="sidebar" />
    <div class="container mx-auto md:w-4/5 w-11/12 flex flex-col gap-3">
      <slot name="content">
        <div
          class="w-full h-full rounded border-dashed border-2 border-gray-300"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DashBoard",
});
</script>
