<template>
  <div class="relative min-h-screen bg-[#CCCCCC]">
    <div class="relative mx-auto flex min-h-screen items-center justify-center bg-white sm:max-w-lg dark:bg-black">
      <div class="relative min-h-screen w-full bg-white pb-14">
        <RouterView />
      </div>
      <div class="h-14 fixed bottom-0 z-10 grid grid-cols-5 bg-[#1B1C1D] rounded-t-xl w-full max-w-lg">
        <BottomNavBar />
      </div>
    </div>
  </div>
</template>

<script setup>
import BottomNavBar from "@/components/layout/BottomNavBar.vue";
</script>
