<script setup lang="ts">

defineProps({
 small: {
  type: Boolean,
  default: false
 },
 text: {
  type: String,
  required: true
 },
 disabled: {
  type: Boolean,
  default: false
 }
})
</script>

<template>
    <button
        type="submit"
        :disabled="disabled"
        class="px-5 py-1.5 rounded-full bg-[#EFF3F4] text-black font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-gray-300"
    >
        {{ text }}
    </button>
</template>