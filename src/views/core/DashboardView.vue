<template>
  <div class="w-full h-auto">
    <div class="relative min-h-screen w-full bg-white pb-14">
      <RouterView />
    </div>
    <div class="h-14 fixed bottom-0 z-10 grid grid-cols-5 bg-[#1B1C1D] rounded-t-xl w-full max-w-lg">
      <BottomNavBar />
    </div>
  </div>
</template>

<script setup>
import BottomNavBar from "../../components/layout/BottomNavBar.vue";
</script>
