import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "vue-budget-tracker-10b1e.firebaseapp.com",
  projectId: "vue-budget-tracker-10b1e",
  storageBucket: "vue-budget-tracker-10b1e.appspot.com",
  messagingSenderId: "889848182252",
  appId: "1:889848182252:web:fcf9e39bb0276c626a7cc9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
