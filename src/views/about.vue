<template>
    <div class="container mx-auto lg:p-36 p-3 lg:my-20 my-44 grid place-items-center text-center gap-20 overflow-hidden">
        <h1 id="title">About Us</h1>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis explicabo voluptates eius aliquid inventore laborum reiciendis soluta maiores sed repudiandae doloribus dicta molestias animi nesciunt, neque quisquam eaque. Explicabo, sint?</h1>
        <h1 id="title">Our Amazing Team</h1>
        <div class="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 place-items-stretch gap-9">
            <div v-for="team in teams" :key="team.id" class="flex flex-col gap-3 items-center p-9 bg-white shadow-md">
                <!-- <img :src="team.profile" alt="profile" class="w-44 h-44 rounded-full shadow-md drop-shadow-md object-cover"> -->
                <h1 id="title" class="h-20">{{ team.role }}</h1>
                <h1>{{ team.name }}</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'

    const teams = ref([
        {
            id: 1,
            name: 'Braya Cheat',
            role: 'Frontend Developer',
            profile: '/Profile/frontend.jpg'
        },
        {
            id: 2,
            name: 'Braya Cheat',
            role: 'Backend Developer',
            profile: '/Profile/backend.jpg'
        },
        {
            id: 3,
            name: 'Braya Cheat',
            role: 'Team Lead',
            profile: '/Profile/lead.jpg'
        },
        {
            id: 4,
            name: 'Braya Cheat',
            role: 'Project Manager',
            profile: '/Profile/manager.jpg'
        }
    ])
</script>

<style lang="scss" scoped>

</style>