<template>
  <div class="fixed bottom-0 h-14 bg-black grid grid-cols-5 rounded-t-xl w-full">
    <RouterLink
      class="flex justify-center items-center"
      to="/"
      ><HomeIcon class="h-6 w-6 text-white"
    /></RouterLink>
    <RouterLink
      class="flex justify-center items-center"
      to="/transactions"
      ><ChartBarIcon class="h-6 w-6 text-white"
    /></RouterLink>
    <RouterLink
      class="flex justify-center items-center"
      to="/"
      ><div class="w-8 h-8 bg-white rounded-full flex justify-center items-center">
        <PlusIcon class="h-6 w-6 text-black" /></div
    ></RouterLink>
    <RouterLink
      class="flex justify-center items-center"
      to="/"
      ><BellIcon class="h-6 w-6 text-white"
    /></RouterLink>
    <RouterLink
      class="flex justify-center items-center"
      to="/"
      ><UserIcon class="h-6 w-6 text-white"
    /></RouterLink>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/24/outline";
import { ChartBarIcon } from "@heroicons/vue/24/outline";
import { PlusIcon } from "@heroicons/vue/24/outline";
import { BellIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/24/outline";
</script>
