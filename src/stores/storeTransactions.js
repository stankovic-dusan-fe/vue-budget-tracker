import { defineStore } from "pinia";

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
    addTransaction(transaction, type) {
      const newTransaction = {
        id: self.crypto.randomUUID(),
        type: type,
        notes: transaction.notes,
        amount: transaction.amount,
        date: transaction.date,
        category: transaction.category,
      };
      this.transactions.push(newTransaction);
    },
  },
});
