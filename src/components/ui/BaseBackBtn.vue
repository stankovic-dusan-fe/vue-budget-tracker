<template>
  <RouterLink
    to="/"
    class="flex items-center gap-2"
    ><ArrowLeftIcon class="h-6 w-6 text-[#1B1C1D]" />
    <h3>{{ btnTitle }}</h3></RouterLink
  >
</template>

<script setup>
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

const props = defineProps({ btnTitle: String });
</script>
