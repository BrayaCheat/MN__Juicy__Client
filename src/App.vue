<template>
  <div>
    <navbar />
    <RouterView />
    <bottom />
  </div>
</template>
<script setup>
import navbar from "@/components/navbar.vue";
import bottom from "@/components/bottom.vue";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import { onMounted } from "vue";

onMounted(async () => {
  try {
    await axios
      .get("https://mn-juicy-api.onrender.com/api/product")
      .then((response) => {
        if(!response){
          console.log('Loading...')
        }else{
          console.log(response.data)
        }
      });
  } catch (error) {
    console.log(error.message);
  }
});
</script>
