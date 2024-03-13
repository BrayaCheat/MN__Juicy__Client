<template>
  <div>
    <navbar />
    <RouterView />
    <bottom />
  </div>
</template>
<script setup>
import navbar from "@/components/navbar.vue";
import bottom from "@/components/bottom.vue";

import { initFlowbite } from "flowbite";
import { onMounted } from "vue";

onMounted(() => {
  try {
    initFlowbite();
  } catch (error) {
    console.log(error.message);
  }
});
</script>
