<template>
  <Dashboard>
    <template #sidebar>
      <SideBar />
    </template>
    <template #content>
      <DashBoardHeading />
      <div v-if="!store.getters.isLoading">
        <StatsDisplay />
      </div>
    </template>
  </Dashboard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomeView",
});
</script>

<script lang="ts" setup>
import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/SideBar";
import DashBoardHeading from "@/components/DashBoardHeading";
import StatsDisplay from "@/components/StatsDisplay";
const store = useStore();

store.dispatch("fetchData");
</script>
