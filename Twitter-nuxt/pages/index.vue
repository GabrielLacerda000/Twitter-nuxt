<script setup lang="ts">
import actions from '~/actions'
import type { CreateForm } from '~/actions/tweet/create'

definePageMeta({
  middleware: ['auth']
})

const logout = async () => {
  await actions.auth.logout()
  navigateTo('/login')
}

const tweetStore = useTweetStore()

const tweets = computed(() => {
  return tweetStore.tweets
})

</script>

<template>
  <div class="flex flex-col items-center w-full">
    <div class="w-full max-w-2xl px-4">
      <TweetCreate />
    </div>
    <div class="w-full max-w-2xl px-4">
      <ul>
        <li v-for="tweet in tweets" :key="tweet.id">
          {{ tweet.content }}
        </li>
      </ul>
    </div>
    <button @click="logout" class="p-2 bg-cyan-500 rounded-md hover:bg-cyan-300 hover:text-black transition-all duration-300 mt-4">Logout</button>
  </div>
</template>
