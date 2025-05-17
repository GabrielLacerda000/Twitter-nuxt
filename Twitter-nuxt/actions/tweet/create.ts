import type { BaseResponse } from "~/types/BaseResponse"
import type { Tweet, tweetCreateResponse } from "."

export type CreateForm = {
    content: string
}

export async function create(tweet: CreateForm): Promise<BaseResponse<Tweet>> {
    const { data, error } = await usePost<BaseResponse<Tweet>>('/api/tweet', { body: tweet })

    if (error.value) {
        console.warn(error.value)
        throw error.value
    }

    if (data.value && data.value.status === 'success') {
        useTweetStore().addTweet(data.value.data)
    }
    return data.value as BaseResponse<Tweet>
}