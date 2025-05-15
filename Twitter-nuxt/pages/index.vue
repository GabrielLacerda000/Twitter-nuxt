<script setup lang="ts">
import actions from '~/actions'
import type { CreateForm } from '~/actions/tweet/create'

definePageMeta({
  middleware: ['auth']
})

const logout = async () => {
  await actions.auth.logout()
  navigateTo('/login')
}

const form = ref<CreateForm>({
    content: ''
})

const tweetStore = useTweetStore()

const tweets = computed(() => {
  return tweetStore.tweets
})

const tweetando = async () => {
  const res = await actions.tweet.create(form.value)
}
</script>

<template>
  <div>
    <form @submit.prevent="tweetando">
      <div class="mb-4">
        <label  for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="form.content" class="mt-1 p-2 border rounded w-full text-black">
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Tweet</button>
    </form>

    <div>
      <ul>
        <li v-for="tweet in tweets" :key="tweet.id">
          {{ tweet.content }}
        </li>
      </ul>
    </div>

    <button @click="logout" class="p-2 bg-cyan-500 rounded-md hover:bg-cyan-300 hover:text-black transition-all duration-300">Logout</button>
  </div>
</template>
