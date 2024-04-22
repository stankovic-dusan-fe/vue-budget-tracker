import { defineStore } from "pinia";
import { collection, onSnapshot, setDoc, doc } from "firebase/firestore";

import { db } from "@/firebase/index";
import { useAuthStore } from "@/stores/storeAuth";

let transactionsCollectionRef;

export const useTransactionStore = defineStore("transactionStore", {
  state: () => {
    return {
      transactions: [],
      totalBalance: 0,
      totalIncome: 0,
      totalExpense: 0,
    };
  },
  actions: {
    init() {
      const storeAuth = useAuthStore();
      transactionsCollectionRef = collection(db, "users", storeAuth.user.id, "transactions");
      this.getTransactions();
    },
    async getTransactions() {
      onSnapshot(transactionsCollectionRef, (querySnapshot) => {
        let transactions = [];
        querySnapshot.forEach((doc) => {
          let transaction = {
            id: doc.id,
            type: doc.data().type,
            notes: doc.data().notes,
            amount: doc.data().amount,
            date: doc.data().date,
            category: doc.data().category,
          };
          transactions.push(transaction);
        });
        this.transactions = transactions;
      });
    },

    async addTransaction(transaction, type) {
      const storeAuth = useAuthStore();
      transactionsCollectionRef = collection(db, "users", storeAuth.user.id, "transactions");

      await setDoc(doc(transactionsCollectionRef, self.crypto.randomUUID()), {
        type: type,
        notes: transaction.notes,
        amount: transaction.amount,
        date: transaction.date,
        category: transaction.category,
      });
    },
  },
});
