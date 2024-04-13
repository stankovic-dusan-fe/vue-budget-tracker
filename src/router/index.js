import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AddTransactionView from "@/views/AddTransactionView.vue";
import TransactionView from "@/views/TransactionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: TransactionView,
    },
  ],
});

export default router;
