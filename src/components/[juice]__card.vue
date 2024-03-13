<template>
    <router-link
        :to="{ name: 'juice__detail', params: { id: juice._id } }"
        
        class="flex flex-col items-center gap-3 bg-white px-6 py-9 shadow-md w-full rounded"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        <img
          :src="getJuice(juice.image)"
          alt=""
          class="drop-shadow-2xl rounded w-72 h-72 object-contain"
        />
        <h1 class="font-normal text-xl text-zinc-500 uppercase">
          {{ juice.name }}
        </h1>
        <p class="font-medium text-xl bg-primary px-6 py-2 rounded text-white shadow-md">${{ juice.price }}</p>
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

</script>

<style lang="scss" scoped>

</style>