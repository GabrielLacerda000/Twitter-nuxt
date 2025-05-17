import type { User } from "~/types/User";
import { create } from "./create";
import { fetch } from "./fetch";
import { getTweet } from "./getTweet";

export type Tweet = {
    id: number
    content: string
    user_id: string
    created_At: string
    update_at: string
    user?: User
    image?: string
}

export type tweetCreateResponse = {
    status: string
    message: string
    data: Tweet
}

export default {
    create,
    fetch,
    getTweet
}