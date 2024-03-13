<template>
    <router-link
        @click="reloadPage"
        :to="{ name: 'juice__detail', params: { id: juice._id } }"
        
        class="flex flex-col items-center gap-3 bg-white px-3 py-6 shadow-md w-full"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          :src="getJuice(juice.image)"
          alt=""
          class="drop-shadow-2xl rounded w-full h-64 object-cover"
        />
        <h1 class="font-normal text-xl text-zinc-500 uppercase">
          {{ juice.name }}
        </h1>
        <p class="font-medium text-xl text-primary">${{ juice.price }}</p>
      </router-link>
</template>

<script setup>
    import {ref} from 'vue'
    const props = defineProps(['props'])
    const juice = props.props

    const juice__URL = "https://mn-juicy-api.onrender.com/";

const getJuice = (juiceName) => {
  return juice__URL + juiceName;
};

// const reloadPage = () => {
//   setTimeout(() => {
//     location.reload()
//   }, 100);
// }
</script>

<style lang="scss" scoped>

</style>