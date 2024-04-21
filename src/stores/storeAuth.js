import { defineStore } from "pinia";
import { auth } from "@/firebase/index";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("User looged in:", user);
          this.user.id = user.uid;
          this.user.name = user.displayName;
          this.user.email = user.email;
          console.log(this.user);
          this.router.push("/");
        } else {
          this.user = {};
          console.log("User logged out :", user);
          this.router.replace("/auth");
        }
      });
    },
    googleSignIn() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("User successfuly signed in");
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    googleSignOut() {
      signOut(auth)
        .then(() => {
          console.log("User signed out");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
