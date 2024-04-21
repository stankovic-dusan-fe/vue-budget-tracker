import { defineStore } from "pinia";
import { collection, setDoc, doc, onSnapshot } from "firebase/firestore";

import { db } from "@/firebase/index";

export const useTransactionStore = defineStore("transactionStore", {
  state: () => {
    return {
      transactions: [
        {
          id: self.crypto.randomUUID(),
          type: "income",
          notes: "Income",
          amount: 3660,
          date: "Today",
          category: "Salary",
        },
        {
          id: self.crypto.randomUUID(),
          type: "expense",
          notes: "Food",
          amount: 200,
          date: "Yesterday",
          category: "Grocery",
        },
        {
          id: self.crypto.randomUUID(),
          type: "income",
          notes: "Income",
          amount: 500,
          date: "Yesterday",
          category: "Side Income",
        },
        {
          id: self.crypto.randomUUID(),
          type: "expense",
          notes: "Clothes",
          amount: 50,
          date: new Date().toLocaleDateString(),
          category: "Shopping",
        },
        {
          id: self.crypto.randomUUID(),
          type: "expense",
          notes: "Rent",
          amount: 300,
          date: new Date().toLocaleDateString(),
          category: "Car Rental",
        },
      ],
      totalBalance: 3660 + 500 - 200 - 50 - 300,
      totalIncome: 3660 + 500,
      totalExpense: 200 + 50 + 300,
    };
  },
  actions: {
    async getTransactions() {
      onSnapshot(collection(db, "transactions"), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let transaction = {
            id: self.crypto.randomUUID(),
            type: doc.data().type,
            notes: doc.data().notes,
            amount: doc.data().amount,
            date: doc.data().date,
            category: doc.data().category,
          };
          this.transactions.push(transaction);
        });
      });
    },

    // async getTransactions() {
    //   let transactions = [];
    //   const querySnapshot = await getDocs(collection(db, "transactions"));
    //   querySnapshot.forEach((doc) => {
    //     let transaction = {
    //       id: self.crypto.randomUUID(),
    //       type: doc.data().type,
    //       notes: doc.data().notes,
    //       amount: doc.data().amount,
    //       date: doc.data().date,
    //       category: doc.data().category,
    //     };
    //     transactions.unshift(transaction);
    //   });
    //   this.transactions = transactions;
    // },

    async addTransaction(transaction, type) {
      await setDoc(doc(db, "transactions", self.crypto.randomUUID()), {
        type: type,
        notes: transaction.notes,
        amount: transaction.amount,
        date: transaction.date,
        category: transaction.category,
      });
    },
  },
});
