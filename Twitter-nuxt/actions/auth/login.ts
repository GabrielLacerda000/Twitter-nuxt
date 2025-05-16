import actions from ".."

export type LoginForm = {
    email: string
    password: string
}

export default async function login(form: LoginForm) {

    await usePost('/login', { body: form })

    await actions.auth.fetchUser()
}