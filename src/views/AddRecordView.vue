<template>
  <div class="p-8">
    <!-- <div class="flex items-center gap-2">
      <BaseBackBtn />
      <h3>Add Record</h3>
    </div>
    <div class="w-full h-[40px] grid grid-cols-2 bg-[#F3F3F3] rounded-lg my-5">
      <button
        @click="selectedTab = IncomeRecord"
        class="text-sm rounded-lg"
      >
        Income
      </button>
      <button
        @click="selectedTab = ExpenseRecord"
        class="text-sm rounded-lg"
      >
        Expenses
      </button>
    </div> -->

    <component :is="selectedTab" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import BaseBackBtn from "@/components/ui/BaseBackBtn.vue";

import IncomeRecord from "@/components/IncomeRecord.vue";
import ExpenseRecord from "@/components/ExpenseRecord.vue";

let selectedTab = ref(ExpenseRecord);

function setSelectedTab(tab) {
  selectedTab = tab;
}
</script>
