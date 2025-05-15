import type { User } from "~/types/User"


export async function fetchUser() {
    const user = await useApi('/api/user')
    useAuthStore().setUser(user.data.value as User)

    return user
}