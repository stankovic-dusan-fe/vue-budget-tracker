<template>
  <PageLayout>
    <template v-slot:header>
      <div class="bg-[#1B1C1D] p-8 rounded-b-xl">
        <div class="flex flex-col gap-4">
          <div class="w-full flex justify-start items-center gap-4">
            <img
              class="rounded-full w-[50px]"
              :src="storeAuth.user.avatar"
              alt=""
            />
            <div class="text-white">
              <h3>Name: {{ storeAuth.user.name }}</h3>
              <h4>Email: {{ storeAuth.user.email }}</h4>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <BaseLoginBtn
        btn-title="Sign out"
        @click="storeAuth.googleSignOut()"
      >
        <template v-slot:btnIcon>
          <ArrowUpTrayIcon class="w-6 h-6 mr-2 rotate-90 text-white" />
        </template>
      </BaseLoginBtn>
      <BaseLoginBtn
        btn-title="Clear data"
        @click="console.log('Clear data')"
      >
        <template v-slot:btnIcon>
          <TrashIcon class="w-6 h-6 mr-2 text-white" />
        </template>
      </BaseLoginBtn>
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/layout/PageLayout.vue";
import BaseLoginBtn from "@/components/ui/BaseLoginBtn.vue";

import { ArrowUpTrayIcon, TrashIcon } from "@heroicons/vue/24/outline";

import { useAuthStore } from "@/stores/storeAuth.js";
const storeAuth = useAuthStore();
</script>
