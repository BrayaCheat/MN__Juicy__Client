<template>
  <div
    v-if="juice"
    class="container mx-auto lg:p-36 p-3 my-36 grid md:grid-cols-2 grid-cols-1 md:place-items-stretch place-items-center md:gap-36 gap-9"
  >
    <div>
      <img
        :src="getJuice(juice.image)"
        alt="Juice__Detail"
        class="bg-white rounded shadow-md object-cover"
      />
    </div>
    <div class="flex flex-col md:items-stretch items-center gap-6 w-full">
      <h1 id="title">{{ juice.name }}</h1>
      <div class="star flex items-start border-b border-zinc-300 pb-3">
        <svg
          class="w-6 h-6 text-yellow-300 drop-shadow-sm animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-6 h-6 text-yellow-300 drop-shadow-sm animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-6 h-6 text-yellow-300 drop-shadow-sm animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-6 h-6 text-yellow-300 drop-shadow-sm animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
        <svg
          class="w-6 h-6 text-yellow-300 drop-shadow-sm animate-pulse"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
      </div>

      <h1 id="title">
        Only <span id="title" class="text-primary">${{ juice.price }}</span>
      </h1>
      <h1 class="border-b border-zinc-300 pb-3">{{ juice.description }}</h1>
      <ul class="List">
        <li class="flex items-center">
          <h1 class="w-36 font-medium text-lg">Brand:</h1>
          <span>MN-Juicy</span>
        </li>
        <li class="flex items-center">
          <h1 class="w-36 font-medium text-lg">Capacity:</h1>
          <span>350 ML</span>
        </li>
        <li class="flex items-center">
          <h1 class="w-36 font-medium text-lg">Quantity:</h1>
          <span>1 Bottle</span>
        </li>
      </ul>
      <button
        @click="downloadImage"
        class="bg-primary rounded shadow-md text-md font-medium px-6 py-3 text-white w-fit hover:opacity-75 duration-300"
      >
        View Image
      </button>
    </div>

    <div class="grid md:col-span-2 border-t border-zinc-300 py-20">
      <h1 id="title" class="pb-20">Related Juices</h1>
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
        class="shadow-md"
          v-for="related__Juice in related__Juices"
          :key="related__Juice.id"
        >
          <Juice__card :props="related__Juice" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div v-else>
    <h1 class="text-4xl font-medium animate-pulse">Loading Please Wait...</h1>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import Juice__card from "@/components/[juice]__card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useRoute } from 'vue-router'

const modules = [Pagination, Navigation];

const base__URL = "https://mn-juicy-api.onrender.com/api/product/";
const juice__URL = "https://mn-juicy-api.onrender.com/";
const juice = ref({});
const related__Juices = ref([]);
const route = useRoute()

const getJuice = (juiceName) => {
  return juice__URL + juiceName;
};

onMounted(async () => {
  try {
    await axios
      .get(base__URL + route.params.id)
      .then((response) => {
        juice.value = response.data.list;
        fetchRelatedJuice();
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
});

const fetchRelatedJuice = async () => {
  try {
    await axios
      .get(
        "https://mn-juicy-api.onrender.com/api/product/category/" +
          juice.value.category
      )
      .then((response) => (related__Juices.value = response.data.list))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
};

const downloadImage = () => {
  const link = document.createElement("a");
  link.href = getJuice(juice.value.image);
  link.download = "downloaded-MN-JUICY-IMAGE.jpg";
  link.click();
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  padding: 10px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
