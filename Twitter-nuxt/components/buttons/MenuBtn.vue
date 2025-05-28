<script setup lang="ts">

defineProps({
  icon: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  route: {
    type: String,
    required: false
  }
})
</script>

<template>
  <NuxtLink
    :to="route"
    class="flex items-center w-full gap-4 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-neutral-900 focus:outline-none cursor-pointer"
    :class="active ? 'bg-neutral-900 font-bold text-twitter-blue' : ''"
    tabindex="0"
  >
    <Icon :name="icon" class="text-2xl" />
    <span class="truncate">{{ label }}</span>
  </NuxtLink>
</template>

<style scoped>
.text-twitter-blue {
  color: #1da1f2;
}
@media (max-width: 1024px) {
  span {
    display: none;
  }
}
</style>