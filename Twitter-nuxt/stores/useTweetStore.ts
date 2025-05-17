import { defineStore } from 'pinia'
import type { Tweet } from '~/actions/tweet'

export const useTweetStore = defineStore('tweet', () => {
    const tweets = ref<Tweet[]>([])

   const addTweet = (newTweet: Tweet) => tweets.value.push(newTweet)

   const loadTweets = (ts: Tweet[]) => tweets.value = ts

  return {
    tweets,
    addTweet,
    loadTweets
  }

})