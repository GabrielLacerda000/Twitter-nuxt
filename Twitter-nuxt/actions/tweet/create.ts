// import type { Tweet } from "."
import type { Tweet, tweetCreateResponse } from "."

export type CreateForm = {
    content: string
}

export async function create(tweet: CreateForm): Promise<tweetCreateResponse> {
    const { data, error } = await usePost<tweetCreateResponse>('/api/tweet', { body: tweet })

    if (error.value) {
        console.warn(error.value)
        throw error.value
    }

    if (data.value && data.value.status === 'success') {
        useTweetStore().addTweet(data.value.data)
        console.log(data.value)
    }
    return data.value as tweetCreateResponse
}