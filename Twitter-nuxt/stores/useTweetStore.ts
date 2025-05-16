import { defineStore } from 'pinia'
import type { Tweet } from '~/actions/tweet'
import type { User } from '~/types/User'

export const useTweetStore = defineStore('tweet', () => {
    const tweets = ref<Tweet[]>([])

   const addTweet = (newTweet: Tweet) => {
    tweets.value.push(newTweet)
  }

  return {
    tweets,
    addTweet,
  }

})