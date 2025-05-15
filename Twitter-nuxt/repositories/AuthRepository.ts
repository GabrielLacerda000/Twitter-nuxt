import type { User } from "~/types/User"

type FormData = {
    email: string,
    password: string,
}

const AuthRepository = {

    async login (form: FormData) {
        await usePost('/login', { body: form })
        this.fetchUser()
    },

    async logout () {
        await usePost('/logout')
        useAuthStore().setUser(null)
    },

    async fetchUser () {
        const user = await useGet('/user')
        useAuthStore().setUser(user.data.value as User)
    }
}

export default AuthRepository