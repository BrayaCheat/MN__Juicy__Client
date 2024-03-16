<template>
  <div
    class="container mx-auto lg:p-36 p-3 lg:my-16 my-44 grid xl:grid-cols-2 place-items-center md:text-left text-center lg:gap-0 gap-10"
  >
    <div
    data-aos="slide-right" data-aos-duration="1500"
      class="Title flex flex-col md:items-start items-center gap-6 lg:text-7xl text-6xl font-semibold text-black"
    >
      <h1>Make Your Sweet Days.</h1>
      <h1 class="text-2xl font-normal">យកឈ្នះបញ្ហាស្បែកនិងសម្រស់ពីការទទួលទានទឹកបន្លែផ្លែឈើដែលទទួលបានអត្ថប្រយោជន៍ដ៏មិនគួរឲ្យជឿ និង សម្រស់ស្អាតចែករំលែកដោយ MN Juicy. </h1>
      <router-link to="/juice__page"
        class="text-xl text-white font-medium bg-primary hover:opacity-75 duration-300 px-6 py-3 rounded shadow-md flex items-center gap-6"
      >
        Menu
        <i class="fa-solid fa-angles-right"></i>
      </router-link>
    </div>
    <div data-aos="slide-left" data-aos-duration="1500">
      <img
        src="/Main__Flyer/Main__Flyer.png"
        alt="main__logo"
        class="rounded-full drop-shadow-2xl object-contain w-full animate-[wiggle_3s_ease-in-out_infinite]"
      />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
#title {
  font-family: "Satisfy", cursive;
}
</style>
