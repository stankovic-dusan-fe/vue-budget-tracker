<template>
  <div class="p-8">
    <div class="flex items-center gap-2">
      <RouterLink to="/"><ArrowLeftIcon class="h-6 w-6 text-[#1B1C1D]" /></RouterLink>
      <h3>Add Record</h3>
    </div>
    <div class="w-full h-[40px] grid grid-cols-2 bg-[#F3F3F3] rounded-lg my-5">
      <button class="text-sm">Income</button>
      <button class="text-sm bg-[#1B1C1D] text-white rounded-lg">Expenses</button>
    </div>
    <!-- <KeepAlive>
      <component :is="activeComponent" />
    </KeepAlive> -->
    <BaseForm />
  </div>
</template>

<script setup>
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

import BaseForm from "@/components/ui/BaseForm.vue";
</script>
