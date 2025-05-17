import type { BaseResponse } from "~/types/BaseResponse"
import type { Tweet } from "."

export async function fetch(): Promise<BaseResponse<Tweet[]>> {
    const { data: tweets, error } = await useGet<BaseResponse<Tweet[]>>('/api/tweets')

    if (error.value) {
        console.warn(error.value)
        throw error.value
    }

    if (tweets.value && tweets.value.status === 'success') {
        tweets.value.data.forEach(tweet => useTweetStore().addTweet(tweet))
    }
    return tweets.value as BaseResponse<Tweet[]>
}