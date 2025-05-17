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
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center p-4 text-white"
      >
        <div
          class="bg-black w-full max-w-5xl h-full md:h-[90vh] overflow-y-auto rounded-xl p-6 relative"
        >
          <button
            @click="close"
            class="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            ✕
          </button>
          <div>
            <p class="">{{ tweet?.content }}</p>
          </div>
  
          <!-- <PostContent :postId="postId" />
          <CommentsList :postId="postId" />
          <CommentForm :postId="postId" /> -->
        </div>
      </div>
    </teleport>
</template>
  