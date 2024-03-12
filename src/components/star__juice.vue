<template>
    <div class="container mx-auto lg:p-36 p-3 lg:my-20 grid lg:grid-cols-3 gap-20">
        <div class="lg:col-span-3 col-span-1 flex items-center gap-6">
            <h1 id="title">Popular Juices</h1>
        </div>
        <div v-for="star in starJuices" :key="star._id" class="shadow-md">
            <juice__card :props="star"/>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue'
import juice__card from '@/components/[juice]__card.vue'

const base__URL = "https://mn-juicy-api.onrender.com/api/product/category/Star";
const starJuices = ref([])

onMounted(async() => {
    try {
        await axios.get(base__URL)
        .then((response) => starJuices.value = response.data.list)
        .catch((error) => console.log(error))
    } catch (error) {
        console.log(error.message)
    }
})
</script>

<style lang="scss" scoped>

</style>