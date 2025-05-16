<script setup lang="ts">

defineProps({
 small: {
  type: Boolean,
  default: false
 },
 text: {
  type: String,
  required: true
 }
})
</script>

<template>
    <button
        type="submit"
        class="px-5 py-1.5 rounded-full bg-[#EFF3F4] text-black font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
        {{ text }}
    </button>
</template>