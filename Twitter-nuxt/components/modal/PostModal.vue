<script setup lang="ts">
import { storeToRefs } from 'pinia'
import actions from '~/actions'

// import PostContent from '@/components/PostContent.vue'
// import CommentsList from '@/components/CommentsList.vue'
// import CommentForm from '@/components/CommentForm.vue'

const postModal = usePostModalStore()
const { isOpen, tweetId } = storeToRefs(postModal)
const { close } = postModal
const isLoading = ref(false)

const tweetStore = useTweetStore()

const tweet = computed(() => {
  return tweetStore.tweet
})

watch(
  [isOpen, tweetId],
  async ([open, id]) => {
    if (open && id) {
      isLoading.value = true
      await actions.tweet.getTweet(id)
      isLoading.value = false
    } else {
      tweetStore.clearTweet()
    }
  },
  { immediate: false }
)
</script>

<template>
    <teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="isOpen"
          class="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4 text-white"
        >
          <div
            class="bg-black w-full max-w-5xl h-full md:h-[90vh] overflow-y-auto rounded-xl p-6 relative"
          >
            <button
              @click="close"
              class="absolute top-4 right-4 text-gray-500 bg-gray-400 rounded-full w-10 h-10 hover:text-black hover:bg-gray-500 transition duration-150 ease-in-out"
            >
              ✕
            </button>
            <div class="flex gap-4">
              <!-- Avatar -->
              <div>
                <img
                  :src="tweet?.user?.avatar || '/avatar.png'"
                  alt="Avatar"
                  class="w-16 h-16 rounded-full object-cover border border-neutral-700"
                />
              </div>
              <div class="flex-1 min-w-0">
                <!-- Nome, arroba e data -->
                <div class="flex items-center gap-2 mb-1">
                  <span class="font-semibold text-white text-lg truncate">{{ tweet?.user?.name || 'Usuário' }}</span>
                  <span class="text-neutral-400 text-sm">@{{ tweet?.user?.username || 'usuario' }}</span>
                  <span class="text-xs text-neutral-500">· {{ tweet?.created_At ? new Date(tweet.created_At).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : '' }}</span>
                </div>
                <!-- Conteúdo do tweet -->
                <div class="text-white text-xl break-words mb-3">{{ tweet?.content }}</div>
                <!-- Imagem do tweet -->
                <div v-if="tweet?.image" class="flex justify-center my-4">
                  <img :src="tweet.image" alt="Imagem do tweet" class="rounded-2xl max-h-96 object-contain border border-neutral-700" />
                </div>
                <!-- Ícones de interação (placeholders) -->
                <div class="flex gap-12 mt-6 text-neutral-500">
                  <button class="hover:text-twitter-blue transition">
                    <Icon name="ic:outline-chat-bubble-outline" size="22" />
                  </button>
                  <button class="hover:text-green-500 transition">
                    <Icon name="ic:outline-repeat" size="22" />
                  </button>
                  <button class="hover:text-pink-500 transition">
                    <Icon name="ic:outline-favorite-border" size="22" />
                  </button>
                  <button class="hover:text-twitter-blue transition">
                    <Icon name="ic:outline-bar-chart" size="22" />
                  </button>
                  <button class="hover:text-twitter-blue transition">
                    <Icon name="ic:outline-share" size="22" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </teleport>
</template>
  