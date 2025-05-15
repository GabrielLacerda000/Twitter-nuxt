import { fetchUser } from "./fetchUser"

export type LoginForm = {
    email: string
    password: string
}

export default async function login(form: LoginForm) {

    const response = await usePost('/login', { body: form })

   await fetchUser()

   return response
  }