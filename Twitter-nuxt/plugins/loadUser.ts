export default defineNuxtPlugin( async nuxtApp => {
    const auth = useAuthStore()

    console.log('teste ola')

    if(!auth.isLoggedIn) {
        try {
            await auth.fetchUser()
            navigateTo('/')
        } catch (e) {
            navigateTo('/login')
        }
    }
})