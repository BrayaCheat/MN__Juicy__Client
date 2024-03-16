<template>
  <div class="container mx-auto lg:px-36 p-3 my-20 flex flex-col gap-20">
    <h1 id="title">ទឹកផ្លែឈើប្រចាំហាង</h1>
    <div
      class="grid xl:grid-cols-2 grid-cols-1 place-items-center gap-6 bg-white p-3 rounded shadow-md"
    >
      <swiper
        :effect="'cube'"
        :grabCursor="true"
        :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.6,
        }"
        :autoplay="{
          delay: 5000
        }"
        :loop="true"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="juice in juices__flyer" :key="juice.id">
          <img
            data-aos="fade-in"
            data-aos-duration="1500"
            :src="juice.image"
            alt=""
            class="rounded shadow-md drop-shadow-sm object-cover w-full h-full"
          />
        </swiper-slide>
      </swiper>
      <div class="flex flex-col items-start my-9 gap-9 p-3 w-full">
        <h1 id="title" data-aos="fade-in" data-aos-duration="1500">
          Pomegrenate Juice - $3.0
        </h1>
        <p
          class="font-normal text-xl"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
        គ្រាប់ផ្លែទទឹមមានអត្ថប្រយោជន៍ជួយសុខភាពជាច្រើនដូចជាកាត់បន្ថយការរលាកជួយដល់សុខភាពបេះដូងនិងជំនួយក្នុងការរំលាយអាហារ
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import {ref} from 'vue'

const juices__flyer = ref([
  {
    id: 1,
    image: '/Main__Flyer/main3__juice.jpg'
  },
  {
    id: 2,
    image: '/Main__Flyer/main2__juice.jpg'
  },
  {
    id: 3,
    image: '/Main__Flyer/main__juice.jpg'
  },
  {
    id: 4,
    image: '/Main__Flyer/main4__juice.jpg'
  }
])

const modules = [EffectCube, Pagination, Autoplay];
</script>

<style scoped>
img {
  background-color: #f5f5f5;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
