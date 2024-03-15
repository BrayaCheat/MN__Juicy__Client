<template>
  <div
    class="container mx-auto lg:p-36 p-3 lg:my-20 my-44 flex flex-col gap-9 overflow-hidden"
  >
    <div class="flex flex-wrap justify-between items-center gap-3">
      <h1 id="title" class=" text-black w-96">{{ juiceLabel || "ទឹកផ្លែឈើគ្រប់មុខ"  }}</h1>

      <!-- drop__down__category -->
      <div
        class="relative w-64 border border-zinc-300 text-center py-3 shadow-sm cursor-pointer active:border active:border-primary"
        @click="toggleDropDown"
      >
        <h1>{{ juiceHolder || "ជ្រើសរើសប្រភេទទឹកផ្លែឈើ" }}</h1>
        <ul
          v-if="isShowJuice"
          class="absolute top-14 z-30 grid gap-3 bg-white w-full shadow-md border"
        >
          <li
            @click="changeCategory(list.type, index, list.name)"
            v-for="list in lists"
            :key="list.id"
            class="pe-3 py-3 hover:bg-gray-100 hover:text-primary duration-300 cursor-pointer"
          >
            {{ list.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- --- -->
    <div
      v-if="juices.length > 0"
      class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-stretch gap-9"
    >
      <div class="shadow-md" v-for="juice in juices" :key="juice._id">
        <juice__card :props="juice" />
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

const currentPage = ref();
const juiceHolder = ref(null);
const isShowJuice = ref(false);
const juiceLabel = ref(null)

const base__URL = "https://mn-juicy-api.onrender.com/api/product";
const juices = ref([]);
const lists = ref([
  {
    id: 1,
    name: "ស្បែកភ្លឺថ្លា",
    type: "Glowing Skin",
  },
  {
    id: 2,
    name: "បំបាត់មុន",
    type: "Acne Care",
  },
  {
    id: 3,
    name: "សម្រកទម្ងន់",
    type: "Weight Loss",
  },
  {
    id: 4,
    name: "បេសជ្ជៈពេញនិយម",
    type: "Star Juice",
  },
]);

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

const changeCategory = async (type, i, name) => {
  try {
    await axios
      .get("https://mn-juicy-api.onrender.com/api/category/" + type)
      .then((response) => {
        juices.value = response.data.list;
        currentPage.value = i;
        juiceLabel.value = name
        juiceHolder.value = name
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
};

const toggleDropDown = () => {
  isShowJuice.value = !isShowJuice.value
}
</script>

<style scoped>
.active {
  text-decoration: underline;
  background-color: #8fc951;
  padding: 20px;
  color: white;
}
</style>
