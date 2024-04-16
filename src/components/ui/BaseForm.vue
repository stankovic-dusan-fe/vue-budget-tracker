<template>
  <div class="bg-white rounded-xl drop-shadow-lg px-6 py-8">
    <form class="h-full flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <h4>Amount</h4>
        <input
          class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl p-4"
          type="text"
          placeholder="Enter Amount"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h4>Category</h4>
        <div class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl py-4 px-3">
          <select
            class="w-full text-[#A0A8B3] text-sm font-normal bg-transparent outline-none"
            type="text"
            placeholder="Select Category"
          >
            <option
              disabled
              selected
            >
              Select Category
            </option>
            <option value="volvo">Food</option>
            <option value="saab">Book</option>
            <option value="opel">Subscritpion</option>
            <option value="audi">Grocery</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h4>Date</h4>
        <div class="w-full h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl py-4 px-3">
          <input
            class="w-full bg-transparent outline-none"
            type="date"
            placeholder="Select Date"
          />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h4>Notes</h4>
        <input
          class="h-full text-sm bg-transparent border-2 border-[#EEEEEE] rounded-xl p-4"
          type="text"
          placeholder="Enter Notes"
        />
      </div>
      <div class="flex flex-col gap-2">
        <button class="text-sm text-white border-2 bg-[#1B1C1D] border-[#EEEEEE] rounded-xl p-4">Add Record</button>
      </div>
    </form>
  </div>
</template>
