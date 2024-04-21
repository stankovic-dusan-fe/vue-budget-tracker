<template>
  <div class="bg-white drop-shadow-lg rounded-md flex px-5 py-2">
    <div class="w-full flex items-center gap-4">
      <div
        v-if="type === 'income'"
        class="w-8 h-8 rounded-full bg-[#CEEACF] flex justify-center items-center"
      >
        <ArrowUpIcon class="h-4 w-4 text-[#50B554] stroke-2" />
      </div>
      <div
        v-else
        class="w-8 h-8 rounded-full bg-[#F8CCCC] flex justify-center items-center"
      >
        <ArrowDownIcon class="h-4 w-4 text-[#FF0B0B] stroke-2" />
      </div>
      <div class="flex flex-col justify-center">
        <h4 class="text-nowrap">{{ notes }}</h4>
        <span>{{ category }}</span>
      </div>
    </div>
    <div class="w-full h-14 flex justify-end">
      <div class="flex flex-col justify-center items-end">
        <h4>${{ type === "income" ? amount : `-${amount}` }}</h4>
        <span>{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  type: String,
  amount: Number,
  date: String,
  category: String,
  notes: String,
});
</script>
