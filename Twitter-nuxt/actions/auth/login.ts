export type LoginForm = {
    email: string
    password: string
}

export default async function login(form: LoginForm) {
    await useApi('/sanctum/csrf-cookie')

    const response = await usePost('/login', { body: form })

//    await fetchUser()

   return response
  }