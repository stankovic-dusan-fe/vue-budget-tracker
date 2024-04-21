<template>
  <PageLayout>
    <template v-slot:header>
      <div class="bg-[#1B1C1D] p-8 rounded-b-xl">
        <div class="flex flex-col gap-4">
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
            <h1>${{ totalBalance }}</h1>
          </div>
          <div class="grid grid-cols-2 gap-8">
            <div class="py-4 bg-white rounded-lg flex justify-center items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-[#CEEACF] flex justify-center items-center">
                <ArrowUpIcon class="h-4 w-4 text-[#50B554] stroke-2" />
              </div>
              <div class="flex flex-col">
                <p class="text-[#50B554] text-sm font-semibold">Income</p>
                <h3>${{ totalIncome }}</h3>
              </div>
            </div>
            <div class="py-4 bg-white rounded-lg flex justify-center items-center gap-4">
              <div class="w-8 h-8 rounded-full bg-[#F8CCCC] flex justify-center items-center">
                <ArrowDownIcon class="h-4 w-4 text-[#FF0B0B] stroke-2" />
              </div>
              <div class="flex flex-col">
                <p class="text-[#FF0B0B] text-sm font-semibold">Expense</p>
                <h3>${{ totalExpense }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <h3>Recent Transactions</h3>
      <div
        class="w-full h-auto"
        v-for="transaction in transactions"
      >
        <TransactionCard
          :type="transaction.type"
          :notes="transaction.notes"
          :category="transaction.category"
          :amount="transaction.amount"
          :date="transaction.date"
        />
      </div>
    </template>
  </PageLayout>
</template>

<script setup>
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/24/outline";

import PageLayout from "@/components/layout/PageLayout.vue";
import TransactionCard from "@/components/TransactionCard.vue";

import { useTransactionStore } from "@/stores/storeTransactions.js";

const storeTransactions = useTransactionStore();

const totalBalance = storeTransactions.totalBalance.toLocaleString();
const totalIncome = storeTransactions.totalIncome;
const totalExpense = storeTransactions.totalExpense;

const transactions = storeTransactions.transactions;
</script>
