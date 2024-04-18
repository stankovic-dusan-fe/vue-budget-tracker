<template>
  <BaseForm @send-transaction="addTransaction"> </BaseForm>
</template>

<script setup>
import BaseForm from "@/components/ui/BaseForm.vue";

import { useTransactionStore } from "@/stores/storeTransactions.js";

const storeTransactions = useTransactionStore();

function addTransaction(transaction) {
  storeTransactions.addTransaction(transaction, "income");
  storeTransactions.totalIncome += transaction.amount;
  storeTransactions.totalBalance += transaction.amount;
}
</script>
