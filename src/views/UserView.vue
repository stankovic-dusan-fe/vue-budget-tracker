<template>
  <PageLayout>
    <template v-slot:content>
      <BaseLoginBtn
        btn-title="Sign out"
        @click="storeAuth.googleSignOut()"
      >
        <template v-slot:btnIcon>
          <ArrowUpTrayIcon class="w-6 h-6 mr-2 rotate-90 text-white" />
        </template>
      </BaseLoginBtn>
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/layout/PageLayout.vue";
import BaseLoginBtn from "@/components/ui/BaseLoginBtn.vue";

import { ArrowUpTrayIcon } from "@heroicons/vue/24/outline";

import { useAuthStore } from "@/stores/storeAuth.js";
const storeAuth = useAuthStore();
</script>
