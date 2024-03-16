<template>
  <div
    class="container mx-auto lg:p-36 p-3 lg:my-20 my-44 flex flex-col gap-9 overflow-hidden"
  >
    <div class="flex flex-wrap justify-between items-center gap-3">
      <h1 id="title" class="text-black w-96">
        {{ juiceLabel || "ទឹកផ្លែឈើគ្រប់មុខ" }}
      </h1>

      <!-- drop__down__category -->
      <div
        class="relative w-64 border border-zinc-300 text-center py-3 shadow-sm cursor-pointer active:border active:border-primary duration-300"
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
            class="pe-3 py-3 hover:bg-primary hover:text-white duration-300 cursor-pointer"
          >
            {{ list.name }}
          </li>
        </ul>
      </div>
    </div>
    <!-- --- -->

    <div
      v-if="juices__data.length > 0"
      class="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 place-items-stretch gap-9"
    >
      <div class="shadow-md" v-for="juice in juices__data" :key="juice._id">
        <juice__card :props="juice" />
      </div>

      <div
        v-if="showPaginate"
        class="xl:col-span-3 lg:col-span-2 col-span-1 flex items-center justify-center gap-9"
      >
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="px-4 py-2 bg-primary text-white rounded shadow-sm hover:opacity-75 duration-300 cursor-pointer flex items-center gap-3"
        >
          <i class="fa-solid fa-chevron-left"></i>Previous
        </button>
        <span class="text-xl font-medium">{{ page }} / {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="page === totalPages"
          class="px-4 py-2 bg-primary text-white rounded shadow-sm hover:opacity-75 duration-300 cursor-pointer flex items-center gap-3"
        >
          Next<i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>

    <!-- loading__section -->
    <div v-else class="flex flex-col items-center gap-3">
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-primary"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
      <h1 class="text-4xl font-medium animate-pulse">Loading...</h1>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import juice__card from "@/components/[juice]__card.vue";

const showPaginate = ref(true);
const currentPage = ref();
const juiceHolder = ref(null);
const isShowJuice = ref(false);
const juiceLabel = ref(null);
// pagination
let page = 1;
let pageSize = 6;
let totalPages = 1;
let juices__data = ref([]);
// ---
const lists = ref([
  {
    id: 1,
    name: "ស្បែកភ្លឺថ្លា",
    type: "Glowing Skin",
  },
  {
    id: 2,
    name: "បំបាត់មុន",
    type: "Ance Care",
  },
  {
    id: 3,
    name: "សម្រកទម្ងន់",
    type: "Weight Loss",
  },
  {
    id: 4,
    name: "ភេសជ្ជៈពេញនិយម",
    type: "Star",
  },
]);

onMounted(() => {
  fetchdata();
});

const fetchdata = async () => {
  try {
    await axios
      .get(
        `https://mn-juicy-api.onrender.com/api/paginate?page=${page}&pageSize=${pageSize}`
      )
      .then((response) => {
        console.log(response.data);
        totalPages = response.data.totalPages;
        juices__data.value = response.data.items;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
};

const changeCategory = async (type, i, name) => {
  try {
    await axios
      .get("https://mn-juicy-api.onrender.com/api/category/" + type)
      .then((response) => {
        juices__data.value = response.data.list;
        currentPage.value = i;
        juiceLabel.value = name;
        juiceHolder.value = name;
        showPaginate.value = false;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
};

const toggleDropDown = () => {
  isShowJuice.value = !isShowJuice.value;
};

const nextPage = () => {
  if (page < totalPages) {
    page++;
    fetchdata();
  }
};

const prevPage = () => {
  if (page > 1) {
    page--;
    fetchdata();
  }
};
</script>

<style scoped>
.active {
  text-decoration: underline;
  background-color: #8fc951;
  padding: 20px;
  color: white;
}
</style>
