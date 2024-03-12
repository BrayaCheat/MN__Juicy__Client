<template>
    <div class="max-w-full overflow-hidden">
        <hero__section/>
        <juice__section/>
        <star__juice/>
        <main__juice/>
        <why__choose__us/>   
        <div class="relative">
            
        </div> 
    </div>
</template>

<script setup>
    import hero__section from '@/components/hero__section.vue';
    import juice__section from '@/components/juice__section.vue';
    import main__juice from '@/components/main__juice.vue';
    import why__choose__us from '@/components/why__choose__us.vue';
    import star__juice from '@/components/star__juice.vue'

    import { initFlowbite } from "flowbite";
import { onMounted } from 'vue';

    onMounted(() => {
        try {
            initFlowbite()
        } catch (error) {
            console.log(error.message)
        }
    })
</script>

<style lang="scss" scoped>

</style>