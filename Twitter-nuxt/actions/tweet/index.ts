import { create } from "./create";
import { fetch } from "./fetch";

export type Tweet = {
    id: number
    content: string
    user_id: string
    created_At: string
    update_at: string
}

export type tweetCreateResponse = {
    status: string
    message: string
    data: Tweet
}

export default {
    create,
    fetch
}