<template>
  <PageLayout>
    <template v-slot:content>
      <h2 class="font-bold">Vue Budget Tracker</h2>
      <h4>Track and analyze your income and expense today.</h4>
      <p>Introducing our user-friendly app designed to effortlessly track your financial transactions. Simply log in, input your income and expenses, and watch as our intuitive interface calculates and displays your spending and earnings. Gain valuable insights into your financial habits with tools for categorization and analysis, all in one convenient platform.</p>
      <BaseLoginBtn
        btn-title="Sign in with Google"
        @click="storeAuth.googleSignIn()"
      >
        <template v-slot:btnIcon>
          <img
            class="w-6 h-6 mr-4"
            src="../assets/images/google-icon-logo.svg"
          />
        </template>
      </BaseLoginBtn>
      <img
        src="../assets/images/mockup.png"
        alt=""
      />
    </template>
  </PageLayout>
</template>

<script setup>
import PageLayout from "@/components/layout/PageLayout.vue";
import BaseLoginBtn from "@/components/ui/BaseLoginBtn.vue";

import { useAuthStore } from "@/stores/storeAuth.js";
const storeAuth = useAuthStore();
</script>
