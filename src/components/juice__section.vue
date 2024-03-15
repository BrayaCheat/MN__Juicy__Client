<template>
  <div class="container mx-auto lg:px-36 p-3 my-20 flex flex-col gap-20">
    <div class="flex flex-wrap gap-3 justify-between items-center">
      <h1 id="title" class="w-96">ទឹកផ្លែឈើគ្រប់មុខ</h1>
      <router-link
        to="/juice__page"
        class="underline text-primary font-medium text-lg"
        >មើលបន្ថែម >></router-link
      >
    </div>
    <div v-if="juices.length > 0">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :loop="true"
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
        <swiper-slide v-for="juice in juices" :key="juice._id">
          <Juice__card :props="juice" />
        </swiper-slide>
      </swiper>
    </div>

    <!-- loading__section -->
    <div v-else class="flex flex-col items-center gap-3">
      <div role="status">
        <svg aria-hidden="true" class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span class="sr-only">Loading...</span>
    </div>
      <h1 class="text-4xl font-medium animate-pulse">Loading...</h1>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Juice__card from "./[juice]__card.vue";

const modules = [Pagination, Navigation, Autoplay];
const juices = ref([]);

const base__URL = "https://mn-juicy-api.onrender.com/api/limit?limit=6";

onMounted(async () => {
  try {
    await axios
      .get(base__URL)
      .then((response) => {
        (juices.value = response.data.list)
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error.message);
  }
});
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
