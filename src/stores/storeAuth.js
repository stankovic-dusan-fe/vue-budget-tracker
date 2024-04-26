import { defineStore } from "pinia";
import { auth } from "@/firebase/index";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import { useTransactionStore } from "@/stores/storeTransactions.js";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      const storeTransactions = useTransactionStore();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.name = user.displayName;
          this.user.email = user.email;
          this.user.avatar = user.photoURL;
          this.router.push("/home");
          storeTransactions.init();
        } else {
          this.user = {};
          this.router.replace("/auth");
        }
      });
    },
    googleSignIn() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {})
        .catch((error) => {});
    },
    googleSignOut() {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
