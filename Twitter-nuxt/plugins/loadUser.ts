import actions from "~/actions"

export default defineNuxtPlugin( async nuxtApp => {
    const auth = useAuthStore()

    if(!auth.isLoggedIn) {
        try {
            await actions.auth.fetchUser()
            navigateTo('/')
        } catch (e) {
            navigateTo('/login')
        }
    }
})