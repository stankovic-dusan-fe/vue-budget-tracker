<template>
  <div class="w-full bg-[#1B1C1D] p-8 rounded-b-xl">
    <div class="w-full h-full flex flex-col gap-6">
      <div class="w-full flex justify-start items-center gap-4">
        <img
          class="rounded-full w-[50px]"
          src="https://randomuser.me/api/portraits/men/85.jpg"
          alt=""
        />
        <div class="text-white">
          <h3>Hello Dusan</h3>
          <p class="text-xs">Welcome Back!</p>
        </div>
      </div>
      <div class="w-full text-white">
        <p>Balance</p>
        <h1>$14,564</h1>
      </div>
      <div class="w-full flex gap-6">
        <div class="w-full h-full py-4 bg-white rounded-lg flex justify-center items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-[#CEEACF] flex justify-center items-center">
            <ArrowUpIcon class="h-4 w-4 text-[#50B554]" />
          </div>
          <div class="flex flex-col">
            <p class="text-[#50B554] text-sm font-semibold">Income</p>
            <h3>$2653</h3>
          </div>
        </div>
        <div class="w-full h-full py-4 bg-white rounded-lg flex justify-center items-center gap-3">
          <div class="w-8 h-8 rounded-full bg-[#F8CCCC] flex justify-center items-center">
            <ArrowDownIcon class="h-4 w-4 text-[#FF0B0B]" />
          </div>
          <div class="flex flex-col">
            <p class="text-[#FF0B0B] text-sm font-semibold">Expense</p>
            <h3>$2653</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-full flex flex-col p-8 gap-4">
    <h3>Recent Transactions</h3>
    <div
      class="w-full h-auto"
      v-for="i in 7"
    >
      <TransactionCard />
    </div>
  </div>
</template>

<script setup>
import { ArrowUpIcon } from "@heroicons/vue/24/outline";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";

import TransactionCard from "@/components/TransactionCard.vue";
</script>
