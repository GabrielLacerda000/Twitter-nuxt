import { defineStore } from 'pinia'
import type { Tweet } from '~/actions/tweet'

export const useTweetStore = defineStore('tweet', () => {
    const tweets = ref<Tweet[]>([])
    const tweet = ref<Tweet>()

   const addTweet = (newTweet: Tweet) => tweets.value.push(newTweet)

   const setTweet = (newTweet: Tweet) => tweet.value = newTweet

   const loadTweets = (ts: Tweet[]) => tweets.value = ts

   const clearTweet = () => tweet.value = undefined

  return {
    tweets,
    tweet,
    addTweet,
    loadTweets,
    setTweet,
    clearTweet
  }

})