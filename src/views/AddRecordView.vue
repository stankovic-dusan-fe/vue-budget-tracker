<template>
  <div class="p-8">
    <BaseBackBtn btnTitle="Add Record" />
    <div class="w-full h-[40px] grid grid-cols-2 bg-[#F3F3F3] rounded-lg my-5">
      <button
        @click="selectedComponent = IncomeRecord"
        class="text-sm rounded-lg"
        :class="selectedComponent === IncomeRecord ? 'bg-[#1B1C1D] text-white' : ''"
      >
        Income
      </button>
      <button
        @click="selectedComponent = ExpenseRecord"
        class="text-sm rounded-lg"
        :class="selectedComponent === ExpenseRecord ? 'bg-[#1B1C1D] text-white' : ''"
      >
        Expenses
      </button>
    </div>
    <KeepAlive>
      <component :is="selectedComponent" />
    </KeepAlive>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";

import BaseBackBtn from "@/components/ui/BaseBackBtn.vue";

import IncomeRecord from "@/components/IncomeRecord.vue";
import ExpenseRecord from "@/components/ExpenseRecord.vue";

let selectedComponent = shallowRef(IncomeRecord);
</script>
