import { defineStore } from 'pinia'
import type { Tweet } from '~/actions/tweet'
import type { User } from '~/types/User'

export const useTweetStore = defineStore('tweet', () => {
    const tweet = ref<Tweet[]>([])

   const addTweet = (newTweet: Tweet) => {
    tweet.value.push(newTweet)
  }

  return {
    tweet,
    addTweet,
  }

})