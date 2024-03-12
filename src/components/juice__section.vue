<template>
  <div class="container mx-auto lg:px-36 p-3 my-20 flex flex-col gap-20">
    <div class="flex justify-between items-center">
      <h1 id="title">Our Juices</h1>
      <router-link
        to="/juice__page"
        class="underline text-primary font-medium text-lg"
        >See more >></router-link
      >
    </div>
    <div v-if="juices.length > 0" class="grid place-items-center gap-9">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :loop="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
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
        <swiper-slide v-for="juice in juices" :key="juice._id" class="shadow-md">
          <Juice__card :props="juice" />
        </swiper-slide>
      </swiper>
    </div>

    <div v-else>
      <h1 class="text-4xl font-medium animate-pulse">Loading Please Wait...</h1>
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
      .then((response) => (juices.value = response.data.list))
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
