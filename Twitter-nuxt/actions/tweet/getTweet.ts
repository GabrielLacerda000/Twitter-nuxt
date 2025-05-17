import type { BaseResponse } from "~/types/BaseResponse"
import type { Tweet } from "."

export async function getTweet(id: number): Promise<BaseResponse<Tweet>> {
    const { data: tweet, error } = await useGet<BaseResponse<Tweet>>(`/api/tweet/${id}`)

    if (error.value) {
        console.warn(error.value)
        throw error.value
    }

    if (tweet.value && tweet.value.status === 'success') {
       const tweetStore = useTweetStore()
       tweetStore.setTweet(tweet.value.data) 
       console.log(tweet.value.data)
    }

    return tweet.value as BaseResponse<Tweet>
}