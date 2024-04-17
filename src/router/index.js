import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AddRecordView from "@/views/AddRecordView.vue";
import TransactionView from "@/views/TransactionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: "first:text-blue-500",
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
    {
      path: "/addrecord",
      name: "addRecord",
      component: AddRecordView,
    },
  ],
});

export default router;
