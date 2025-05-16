<script setup lang="ts">
import { ref } from 'vue'

const tweet = ref('')
const maxLength = 280

const handleInput = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  if (target.value.length > maxLength) {
    tweet.value = target.value.slice(0, maxLength)
  } else {
    tweet.value = target.value
  }
}

const submitTweet = () => {
  // Lógica para postar tweet
}
</script>

<template>
  <form @submit.prevent="submitTweet" class="w-full flex p-3 border-b border-neutral-700 bg-black">
    <!-- Avatar -->
    <div class="mr-3 flex-shrink-0">
      <img src="/avatar.png" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
      <!-- <Icon name="uil:user" style="color: white" /> -->
    </div>
    
    <div class="flex-1 flex flex-col">
      <textarea
        v-model="tweet"
        @input="handleInput"
        :maxlength="maxLength"
        rows="2"
        placeholder="O que está acontecendo?"
        class="bg-transparent resize-none text-lg text-white placeholder-neutral-400 outline-none w-full min-h-[48px]"
        aria-label="O que está acontecendo?"
      />
      <div class="flex items-center justify-between mt-3">
        <div class="flex gap-2 text-twitter-blue">
            <Icon name="ic:outline-image" style="color: white" />
            <Icon name="ic:outline-gif-box" heigth="50"  style="color: white" />
            <Icon name="ic:outline-format-list-bulleted" style="color: white" />
            <Icon name="ic:outline-emoji-emotions" style="color: white" />
            <Icon name="ic:baseline-edit-calendar" style="color: white" />
            <Icon name="ic:baseline-lcoation-on" style="color: white" />
            
        </div>
        <button
          type="submit"
          :disabled="!tweet.trim()"
          class="ml-2 px-5 py-1.5 rounded-full bg-twitter-blue text-white font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Postar
        </button>
      </div>
    </div>
  </form>
</template>

<style scoped>
.bg-twitter-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(29 155 240 / var(--tw-bg-opacity));
}
.text-twitter-blue {
  --tw-text-opacity: 1;
  color: rgb(29 155 240 / var(--tw-text-opacity));
}
</style>