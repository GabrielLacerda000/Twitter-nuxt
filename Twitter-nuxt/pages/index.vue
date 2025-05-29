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

const tweetStore = useTweetStore()
const tweets = computed(() => tweetStore.tweets)
</script>

<template>
    <div class="flex flex-col items-center flex-1 ml-64">
      <div class="w-full max-w-2xl px-4">
        <TweetCreate />
      </div>
      <div class="w-full max-w-2xl px-4">
        <Tweets :tweets="tweets" />
      </div>
    </div>
</template>