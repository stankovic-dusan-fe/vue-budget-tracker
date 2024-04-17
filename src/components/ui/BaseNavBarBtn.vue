<template>
  <RouterLink
    class="flex justify-center items-center first:text-red-500"
    :to="route"
  >
    <div
      v-if="iconComponent === PlusIcon"
      class="w-8 h-8 bg-white rounded-full flex justify-center items-center"
    >
      <iconComponent class="h-6 w-6 text-[#7F8080]" />
    </div>
    <component
      :is="iconComponent"
      v-else
      class="h-6 w-6 text-[#7F8080]"
    />
  </RouterLink>
</template>

<script setup>
import { ref } from "vue";

import { HomeIcon, ChartBarIcon, PlusIcon, BellIcon, UserIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  icon: String,
  route: String,
});

let iconComponent = ref(null);

switch (props.icon) {
  case "Home":
    iconComponent = HomeIcon;
    break;
  case "Chart":
    iconComponent = ChartBarIcon;
    break;
  case "Plus":
    iconComponent = PlusIcon;

    break;
  case "Notif":
    iconComponent = BellIcon;
    break;
  case "User":
    iconComponent = UserIcon;
    break;
}
</script>
