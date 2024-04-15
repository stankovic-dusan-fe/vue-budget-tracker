<template>
  <div class="bg-white drop-shadow-lg rounded-md flex px-5 py-2">
    <div class="w-full flex items-center gap-4">
      <div class="w-8 h-8 rounded-full bg-[#CEEACF] flex justify-center items-center hidden">
        <ArrowUpIcon class="h-4 w-4 text-[#50B554] stroke-2" />
      </div>
      <div class="w-8 h-8 rounded-full bg-[#F8CCCC] flex justify-center items-center">
        <ArrowDownIcon class="h-4 w-4 text-[#FF0B0B] stroke-2" />
      </div>
      <div class="flex flex-col justify-center">
        <h4 class="text-nowrap">Library Subscritpion</h4>
        <span>Food</span>
      </div>
    </div>
    <div class="w-full h-14 flex justify-end">
      <div class="flex flex-col justify-center items-center">
        <h4>-$2653</h4>
        <span>3/31/2024</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";
</script>
