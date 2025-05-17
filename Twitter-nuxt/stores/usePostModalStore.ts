import { defineStore } from 'pinia'

export const usePostModalStore = defineStore('postModal', () => {

  const isOpen = ref(false)
  const tweetId = ref<number | null>(null)

  const open = (id: number) => {
    isOpen.value = true
    tweetId.value = id
  }

  const close = () => {
    isOpen.value = false
    tweetId.value = null
  }

  return {
    isOpen,
    tweetId,
    open,
    close,
  }

})