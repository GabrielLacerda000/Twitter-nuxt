<script setup lang="ts">
definePageMeta({
  layout: 'guest',
  middleware: ['guest']
})

const form = ref({
  email: 'test@example.com',
  password: 'password',
})

const handleLogin = async () => {
 await useFetch('http://localhost:8000/sanctum/csrf-cookie', {
    credentials: 'include',
  })
  
  const cookie = useCookie('XSRF-TOKEN')
  
  await useFetch('http://localhost:8000/login', {
    method: 'POST',
    body: form.value,
    credentials: 'include',
    watch: false,
    headers: {
      'X-XSRF-TOKEN': cookie.value ?? '',
    }
  })

  const user = useFetch('http://localhost:8000/api/user', {
    credentials: 'include',
  })

  console.log(user)
}
</script>

<template>
  <div>
    <h1 class="">Login page</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label  for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="form.email" class="mt-1 p-2 border rounded w-full text-black">
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" id="password" v-model="form.password" class="mt-1 p-2 border rounded w-full text-black">
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  </div>
</template>
