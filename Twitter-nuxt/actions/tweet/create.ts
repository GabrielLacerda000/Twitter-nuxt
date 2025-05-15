import type { Tweet } from "."

export type CreateForm = {
    content: string
}

export async function create(tweet: CreateForm) {
    const res = await usePost('/tweet', { body: tweet })

    useTweetStore().addTweet(res.data.value as Tweet)
}