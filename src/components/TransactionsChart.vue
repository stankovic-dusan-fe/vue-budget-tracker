<template>
  <apexchart
    width="400"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script setup>
import { reactive } from "vue";

import { useTransactionStore } from "@/stores/storeTransactions.js";

const storeTransactions = useTransactionStore();

const transactionData = {
  amount: [],
  date: [],
};

const chartOptions = reactive({
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: !false,
    },
  },
  tooltip: {
    enabled: !false,
  },
  xaxis: {
    categories: transactionData.date,
    labels: {
      show: !true,
    },
  },
  yaxis: {
    show: !true,
  },
  legend: {
    show: true,
  },
  colors: ["#000000"],
  stroke: {
    curve: "smooth",
  },
});
const series = reactive([
  {
    name: "Amount",
    data: transactionData.amount,
  },
]);

function getTransactionsData() {
  storeTransactions.transactions.forEach((transaction) => {
    transactionData.date.push(transaction.date);
    if (transaction.type === "expense") {
      transactionData.amount.push(transaction.amount * -1);
    } else {
      transactionData.amount.push(transaction.amount);
    }
  });
  // console.log(transactionData.amount, transactionData.date);
}

getTransactionsData();
</script>
