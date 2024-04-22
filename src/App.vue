<template>
  <div class="relative min-h-screen bg-[#CCCCCC]">
    <div class="relative mx-auto flex flex-col min-h-screen items-center justify-center bg-white sm:max-w-lg">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { useAuthStore } from "./stores/storeAuth";

const storeAuth = useAuthStore();

onMounted(() => {
  console.log(1);
  storeAuth.init();
});
</script>
