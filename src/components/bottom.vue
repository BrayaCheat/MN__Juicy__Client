<template>
  <footer class="bg-white border-t border-zinc-300 shadow-md pt-9">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >
        <a href="https://www.facebook.com/braya.cheat" target="_blank" class="hover:underline">Developed by <h1 id="title">Braya Cheat</h1></a>
        
      </span>
      <ul
        class="flex flex-wrap gap-9 items-center mt-3 text-2xl font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <li v-for="link in links" :key="link.id" class="hover:text-primary duration-300">
            <a :href="link.path" target="_blank"><i :class="link.icon"></i></a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
  import {ref} from 'vue'

  const links = ref([
    {
      id: 1,
      name: 'TikTok',
      icon: 'fa-brands fa-tiktok',
      path: 'https://www.tiktok.com/@m_skin__'
    },
    {
      id: 2,
      name: 'Facebook',
      icon: 'fa-brands fa-facebook',
      path: 'https://www.facebook.com/malis.kheang'
    },
    {
      id: 3,
      name: 'Instragram',
      icon: 'fa-brands fa-instagram',
      path: 'https://www.instagram.com/ma__lisss/'
    },
    {
      id: 4,
      name: 'Telegram',
      icon: 'fa-brands fa-telegram',
      path: 'https://t.me/Malis_Kheang'
    }

  ])
</script>

<style lang="scss" scoped></style>
