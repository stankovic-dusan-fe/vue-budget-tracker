<template>
  <PageLayout>
    <template v-slot:header>
      <div class="w-full min-h-[330px] bg-white p-8 rounded-b-xl drop-shadow-lg">
        <div class="flex items-center gap-2 mb-5">
          <BaseBackBtn />
          <h3>Transactions</h3>
        </div>
        <div class="flex justify-center items-center">
          <img
            class="w-[90%]"
            src="https://apexcharts.com/wp-content/uploads/2018/05/area-chart-spline.svg"
            alt=""
          />
        </div>
      </div>
    </template>
    <template v-slot:content>
      <h3>All Transactions</h3>
      <div
        class="w-full h-auto"
        v-for="i in 10"
      >
        <TransactionCard />
      </div>
    </template>
  </PageLayout>
</template>

<script setup>
import BaseBackBtn from "@/components/ui/BaseBackBtn.vue";

import PageLayout from "@/components/layout/PageLayout.vue";
import TransactionCard from "@/components/TransactionCard.vue";
</script>
