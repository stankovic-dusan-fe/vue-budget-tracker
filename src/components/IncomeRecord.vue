<template>
  <BaseForm @send-transaction="addTransaction"> </BaseForm>
</template>

<script setup>
import BaseForm from "@/components/ui/BaseForm.vue";

import { useTransactionStore } from "@/stores/storeTransactions.js";

const storeTransactions = useTransactionStore();

function addTransaction(transaction) {
  console.log(1);
  storeTransactions.addTransaction(transaction, "income");
}
</script>
