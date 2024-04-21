<template>
  <BaseNavBarBtn
    v-for="({ icon, route }, i) in navItems"
    :key="i"
    :icon="icon"
    :to="route"
  />
</template>

<script setup>
import BaseNavBarBtn from "@/components/ui/BaseNavBarBtn.vue";

const navItems = [
  { icon: "Home", route: "/" },
  { icon: "Chart", route: "/transactions" },
  { icon: "Plus", route: "/addrecord" },
  { icon: "Notif", route: "/changelogs" },
  { icon: "User", route: "/user" },
];
</script>
