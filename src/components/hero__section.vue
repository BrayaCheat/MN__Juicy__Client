<template>
  <div
    class="container mx-auto lg:p-36 p-3 lg:my-16 my-44 grid xl:grid-cols-2 place-items-center md:text-left text-center lg:gap-0 gap-10"
  >
    <div
    data-aos="slide-right" data-aos-duration="1500"
      class="Title flex flex-col md:items-start items-center gap-6 lg:text-7xl text-6xl font-semibold text-black"
    >
      <h1>Make Your Sweet Days.</h1>
      <h1 class="text-xl">Welcome to our MN Juicy store, where a refreshing and health-conscious experience awaits you! At our juice store, we pride ourselves on crafting delicious beverages that not only tantalize your taste buds but also nourish your body with wholesome goodness.</h1>
      <router-link to="/juice__page"
        class="text-xl text-white font-medium bg-primary hover:opacity-75 duration-300 px-6 py-3 rounded shadow-md flex items-center gap-6"
      >
        Menu
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
    </div>
    <div data-aos="slide-left" data-aos-duration="1500">
      <img
        src="/Logo/Main__banner.png"
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
