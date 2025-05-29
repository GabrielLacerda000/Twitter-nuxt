<script setup lang="ts">

</script>

<template>
  <div class="bg-black text-white font-sans">
    <div class="flex min-h-screen w-full bg-black">
      <Sidebar />
      <slot />
    </div>
    <modalPostModal />
  </div>
</template>