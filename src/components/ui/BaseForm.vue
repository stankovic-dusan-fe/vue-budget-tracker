<template>
  <div class="bg-white rounded-xl drop-shadow-lg px-6 py-8">
    <form class="h-full flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h4>Amount</h4>
        <input
          v-model="transaction.amount"
          class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl p-4"
          type="number"
          placeholder="Enter Amount"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h4>Category</h4>
        <div class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl py-4 px-3">
          <select
            class="w-full text-[#A0A8B3] text-sm font-normal bg-transparent outline-none"
            v-model="transaction.category"
          >
            <option
              disabled
              selected
              value=""
            >
              Select Category
            </option>
            <option value="Salary">Salary</option>
            <option value="Side">Side Income</option>
            <option value="Investment">Investment Income</option>
            <option value="Rent">Rent</option>
            <option value="Utilities">Utilities</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div
          v-if="transaction.category === 'other'"
          class="flex flex-col gap-2"
        >
          <input
            v-model="transaction.other"
            class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl p-4"
            type="text"
            placeholder="Enter Category"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h4>Date</h4>
        <div class="w-full h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl py-4 px-3">
          <input
            class="w-full bg-transparent outline-none"
            type="date"
            v-model="transaction.date"
            placeholder="Select Date"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h4>Notes</h4>
        <input
          v-model="transaction.notes"
          class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl p-4"
          type="text"
          placeholder="Enter Notes"
        />
      </div>
      <div class="flex flex-col gap-2">
        <!-- <slot></slot> -->
        <button
          @click.prevent="$emit('send-transaction', transaction)"
          class="text-sm text-white border-2 bg-[#1B1C1D] border-[#EEEEEE] rounded-xl p-4"
        >
          Add Record
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const transaction = reactive({
  id: "",
  type: "",
  amount: 0,
  date: "",
  category: "",
  notes: "",
});
</script>
