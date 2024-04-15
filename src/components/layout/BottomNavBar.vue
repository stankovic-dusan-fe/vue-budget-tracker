<template>
  <RouterLink
    class="flex justify-center items-center"
    to="/"
    ><HomeIcon class="h-6 w-6 text-[#7F8080]"
  /></RouterLink>
  <RouterLink
    class="flex justify-center items-center"
    to="/transactions"
    ><ChartBarIcon class="h-6 w-6 text-[#7F8080]"
  /></RouterLink>
  <RouterLink
    class="flex justify-center items-center"
    to="/addrecord"
    ><div class="w-8 h-8 bg-white rounded-full flex justify-center items-center">
      <PlusIcon class="h-6 w-6 text-[#1B1C1D]" /></div
  ></RouterLink>
  <RouterLink
    class="flex justify-center items-center"
    to="/"
    ><BellIcon class="h-6 w-6 text-[#7F8080]"
  /></RouterLink>
  <RouterLink
    class="flex justify-center items-center"
    to="/"
    ><UserIcon class="h-6 w-6 text-[#7F8080]"
  /></RouterLink>
</template>

<script setup>
import { ref } from "vue";

import { HomeIcon, ChartBarIcon, PlusIcon, BellIcon, UserIcon } from "@heroicons/vue/24/outline";
</script>
