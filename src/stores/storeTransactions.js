import { defineStore } from "pinia";
import { collection, onSnapshot, setDoc, doc, deleteDoc } from "firebase/firestore";

import { db } from "@/firebase/index";
import { useAuthStore } from "@/stores/storeAuth";

let transactionsCollectionRef;
let userBalancesDocRef;

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
        let totalIncome = 0;
        let totalExpense = 0;
        let totalBalance = 0;
        querySnapshot.forEach((doc) => {
          let transaction = {
            id: doc.id,
            type: doc.data().type,
            notes: doc.data().notes,
            amount: doc.data().amount,
            date: doc.data().date,
            category: doc.data().category,
          };
          transactions.unshift(transaction);
          if (transaction.type === "income") {
            totalIncome += transaction.amount;
            totalBalance += transaction.amount;
          } else {
            totalExpense += transaction.amount;
            totalBalance -= transaction.amount;
          }
        });
        this.transactions = transactions;
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.totalBalance = totalBalance;
      });
    },

    async addTransaction(transaction, type) {
      const storeAuth = useAuthStore();
      transactionsCollectionRef = collection(db, "users", storeAuth.user.id, "transactions");
      userBalancesDocRef = doc(db, "users", storeAuth.user.id);

      await setDoc(doc(transactionsCollectionRef, self.crypto.randomUUID()), {
        type: type,
        notes: transaction.notes,
        amount: transaction.amount,
        date: transaction.date,
        category: transaction.category,
      });
      // if (type === "income") {
      //   await updateDoc(userBalancesDocRef, {
      //     totalIncome: this.totalIncome + transaction.amount,
      //   });
      // } else {
      //   await updateDoc(userBalancesDocRef, {
      //     totalExpense: this.totalExpense + transaction.amount,
      //   });
      // }
      // await updateDoc(userBalancesDocRef, {
      //   totalBalance: this.totalBalance + transaction.amount,
      // });
    },
  },
});
