<template>
    <div class="container mx-auto lg:px-36 p-3 lg:my-20 grid md:grid-cols-2 grid-cols-1 place-items-stretch gap-20">
        <div class="md:col-span-2 col-span-1 flex flex-col items-start gap-6">
            <h1 id="title">Why Choose MN Juicy</h1>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error nisi sapiente et ad officia, dolorum qui quo consectetur voluptate mollitia!</h1>
        </div>
        <div v-for="why in why__us" :key="why.id" class="flex flex-col gap-6">
            <img src="" alt="" class="w-full h-44 object-cover shadow-md drop-shadow-md">
            <h1 id="title">{{ why.title }}</h1>
            <h1 class="font-medium">{{ why.article }}</h1>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const why__us = ref([
        {
            id: 1,
            image: '',
            title: 'Nutrition Balance',
            article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
        },
        {
            id: 1,
            image: '',
            title: 'Satisfied Customer',
            article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
        },
        {
            id: 1,
            image: '',
            title: 'Friendly Customer',
            article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
        },
        {
            id: 1,
            image: '',
            title: 'From Natural Fruit',
            article: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit'
        }
    ])
</script>

<style lang="scss" scoped>

</style>