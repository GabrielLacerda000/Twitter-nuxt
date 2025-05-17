<script setup lang="ts">


type User = {
  name: string
  avatar?: string
}

type Tweet = {
  id: number
  content: string
  user_id: string
  created_At: string
  update_at: string
  user?: User
  image?: string
}

defineProps({
  tweets: {
    type: Array as PropType<Tweet[]>,
    required: true
  }
})

const defaultAvatar = '/avatar.png'
</script>

<template>
  <ul>
    <li v-for="tweet in tweets" :key="tweet.id" class="border-b border-neutral-700 p-4 flex gap-3 bg-black hover:bg-neutral-900 transition-colors">
      <!-- Avatar -->
      <div>
        <img
          :src="tweet.user?.avatar || defaultAvatar"
          alt="Avatar"
          class="w-12 h-12 rounded-full object-cover border border-neutral-700"
        />
      </div>
      <div class="flex-1 min-w-0">
        <!-- User name and date -->
        <div class="flex items-center gap-2 mb-1">
          <span class="font-semibold text-white truncate">{{ tweet.user?.name || 'Usuário' }}</span>
          <span class="text-xs text-neutral-400">{{ new Date(tweet.created_At).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) }}</span>
        </div>
        <!-- Tweet content -->
        <div class="text-white text-base break-words mb-2">{{ tweet.content }}</div>
        <!-- Tweet image if exists -->
        <div v-if="tweet.image" class="mt-2">
          <img :src="tweet.image" alt="Imagem do tweet" class="rounded-xl max-h-80 object-cover border border-neutral-700" />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
/* Custom scrollbar for tweet list */
ul::-webkit-scrollbar {
  width: 8px;
}
ul::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 4px;
}
</style>