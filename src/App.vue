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
</script>
