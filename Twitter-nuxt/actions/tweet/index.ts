import { create } from "./create";

export type Tweet = {
    id: number
    content: string
    userId: string
    created_At: string
    update_at: string
}

export default {
    create,
}