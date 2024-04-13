<template>
  <div class="bg-[#CCCCCC] min-h-screen">
    <div class="sm:max-w-lg bg-white mx-auto flex flex-col items-center min-h-screen relative">
      <RouterView />
      <BottomNavBar />
    </div>
  </div>
</template>

<script setup>
import BottomNavBar from "./components/BottomNavBar.vue";
</script>
