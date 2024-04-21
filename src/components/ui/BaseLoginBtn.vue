<template>
  <button class="flex justify-center items-center text-sm text-white border-2 bg-[#1B1C1D] border-none rounded-xl p-4 mt-4">
    <slot name="btnIcon"></slot>
    {{ btnTitle }}
  </button>
</template>

<script setup>
const props = defineProps({ btnTitle: String });
</script>
