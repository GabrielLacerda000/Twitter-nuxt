<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue'
import actions from '~/actions'

definePageMeta({
  middleware: ['auth']
})

await actions.tweet.fetch()

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
  <div class="flex flex-row min-h-screen w-full bg-black">
    <Sidebar />
    <div class="flex flex-col items-center flex-1 ml-64">
      <div class="w-full max-w-2xl px-4">
        <TweetCreate />
      </div>
      <div class="w-full max-w-2xl px-4">
        <Tweets :tweets="tweets" />
      </div>
      <button @click="logout" class="p-2 bg-cyan-500 rounded-md hover:bg-cyan-300 hover:text-black transition-all duration-300 mt-4">Logout</button>
    </div>
  </div>
</template>