import { createRouter, createWebHistory } from "vue-router";

import AuthView from "@/views/AuthView.vue";
import DashboardView from "@/views/core/DashboardView.vue";
import HomeView from "@/views/HomeView.vue";
import AddRecordView from "@/views/AddRecordView.vue";
import TransactionView from "@/views/TransactionView.vue";
import ChangeLogsView from "@/views/ChangeLogsView.vue";
import UserView from "@/views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "text-[#FFFFFF]",
  linkExactActiveClass: "text-[#FFFFFF]",
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
      children: [
        {
          path: "/home",
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
        {
          path: "/changelogs",
          name: "changeLogs",
          component: ChangeLogsView,
        },
        {
          path: "/user",
          name: "user",
          component: UserView,
        },
      ],
    },
  ],
});

export default router;
