<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})

const logout = () => {
  const auth = useAuthStore()
  auth.logout()
  navigateTo('/login')
}
</script>

<template>
  <div>
    olá home

    <button @click="logout" class="p-2 bg-cyan-500 rounded-md hover:bg-cyan-300 hover:text-black transition-all duration-300">Logout</button>
  </div>
</template>
