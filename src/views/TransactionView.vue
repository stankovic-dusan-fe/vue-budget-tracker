<template>
  <PageLayout>
    <template v-slot:header>
      <div class="w-full h-[330px] bg-white p-8 rounded-b-xl drop-shadow-lg">
        <BaseBackBtn btnTitle="Transaction" />
        <div class="flex h-full justify-center items-center w-full">
          <TransationsChart />
        </div>
      </div>
    </template>
    <template v-slot:content>
      <h3>All Transactions</h3>
      <div
        class="w-full h-auto"
        v-for="transaction in storeTransactions.transactions"
      >
        <TransactionCard
          :key="transaction.id"
          :type="transaction.type"
          :notes="transaction.notes"
          :amount="transaction.amount"
          :date="transaction.date"
          :category="transaction.category"
        />
      </div>
    </template>
  </PageLayout>
</template>

<script setup>
import BaseBackBtn from "@/components/ui/BaseBackBtn.vue";

import PageLayout from "@/components/layout/PageLayout.vue";
import TransactionCard from "@/components/TransactionCard.vue";
import TransationsChart from "@/components/TransactionsChart.vue";

import { useTransactionStore } from "@/stores/storeTransactions.js";

const storeTransactions = useTransactionStore();
</script>
