<template>
  <div class="container mx-auto lg:p-36 p-3 lg:my-20 my-44 flex flex-col gap-20">
    <div class="flex justify-between items-center">
      <h1 id="title">All Juices</h1>
    </div>
    <nav>
      <ul class="flex items-center gap-9">
        <li v-for="(list, index) in lists" :key="list.id"
        class="cursor-pointer hover:underline text-lg font-medium text-primary"
        :class="{active: currentPage === index}"
        @click="changeCategory(list.name, index)"
        >
          <h1>{{ list.name }}</h1>
        </li>
      </ul>
    </nav>
    <div
      v-if="juices.length > 0"
      class="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 place-items-center gap-9"
    >
      <router-link
      class="shadow-md"
        :to="{ name: 'juice__detail', params: { id: juice._id } }"
        v-for="juice in juices"
        :key="juice._id"
      >
        <juice__card :props="juice" />
      </router-link>
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

const currentPage = ref()

const base__URL = "https://mn-juicy-api.onrender.com/api/product";
const juices = ref([]);
const lists = ref([
  {
    id: 1,
    name: 'Glowing Skin'
  },
  {
    id: 2,
    name: 'Acne Care'
  },
  {
    id: 3,
    name: 'Weight Loss'
  },
  {
    id: 4,
    name: 'Star'
  }
])

onMounted(async () => {
  try {
    await axios
      .get(base__URL)
      .then((response) => (juices.value = response.data.list))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
});

const changeCategory = async (name,i) => {
  try {
    await axios.get("https://mn-juicy-api.onrender.com/api/product/category/" + name)
    .then((response) => {
      juices.value = response.data.list
      currentPage.value = i
    })
    .catch((error) => console.log(error))
  } catch (error) {
    console.log(error.message)
  }
}
</script>

<style scoped>
  .active{
    text-decoration: underline;
  }
</style>
