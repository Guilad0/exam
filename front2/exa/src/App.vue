<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <main >
    <Navbar />
  <RouterView class="routerview"/>
</main>
</template>

<style scoped>

.routerview{
  height: 70vh;
}
</style>
