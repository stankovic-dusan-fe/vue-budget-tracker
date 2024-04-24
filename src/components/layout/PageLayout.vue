<template>
  <div class="max-h-[330px] w-full flex flex-col justify-center">
    <slot name="header"></slot>
  </div>
  <div class="w-full h-full flex flex-col p-8 gap-4">
    <slot name="content"></slot>
  </div>
</template>
