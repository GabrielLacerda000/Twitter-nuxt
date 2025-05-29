<script setup lang="ts">

import actions from '~/actions'

definePageMeta({
  middleware: ['auth']
})

await actions.tweet.fetch()

const logout = async () => {
  await actions.auth.logout()
  navigateTo('/login')
}

const userStore = useAuthStore()

const defaultAvatar = '/avatar.png'
</script>

<template>
  <div class="flex justify-center mx-auto">
      <div class="w-full max-w-2xl flex flex-col gap-3 px-4">
        <div class="flex flex-row w-full items-center justify-center gap-3">
          <Icon class="w-6 h-6 text-gray-400" name="ic:twotone-arrow-back" />
          <NuxtLink>{{ userStore.user?.name }}</NuxtLink>
        </div>
        <div>
          <img
            :src="userStore.user?.avatar || defaultAvatar"
            alt="Avatar"
            class="w-12 h-12 rounded-full object-cover border border-neutral-700"
          />
      </div>
        <h2>{{ userStore.user?.name }}</h2>
        <h2 class="text-gray-400">@{{ userStore.user?.username }}</h2>
        <p>Description</p>
      </div>
  </div>
</template>