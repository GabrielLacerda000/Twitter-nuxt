import { defineStore } from 'pinia'
import type { User } from '~/types/User'


export const useAuthStore = defineStore('auth', () => {

  const user = ref<User | null>(null)
  const isLoggedIn = computed(() => !!user.value)

  const setUser = (newUser: User | null) =>  user.value = newUser

  async function logout() {
    await useApi('/sanctum/csrf-cookie')

    await useApi('/logout', { method: 'POST' })

    user.value = null

  }

  return {
    logout,
    setUser,
    user,
    isLoggedIn,
  }

})