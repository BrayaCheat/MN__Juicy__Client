<template>
  <div
    class="container mx-auto lg:p-36 p-3 my-20 flex flex-col gap-20"
  >
    <div class="flex items-center gap-6">
      <h1 id="title">Popular Juices</h1>
    </div>
    <div v-if="starJuices.length > 0" class="grid lg:grid-cols-3 grid-cols-1 place-items-stretch gap-9">
      <div v-for="star in starJuices" :key="star._id">
        <juice__card :props="star" />
      </div>
    </div>
    <div v-else>
      <h1 class="text-4xl font-medium animate-pulse">Loading Please Wait...</h1>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import juice__card from "@/components/[juice]__card.vue";

const base__URL = "https://mn-juicy-api.onrender.com/api/category/Star Juice";
const starJuices = ref([]);

onMounted(async () => {
  try {
    await axios
      .get(base__URL)
      .then((response) => (starJuices.value = response.data.list))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
});
</script>

<style lang="scss" scoped></style>
