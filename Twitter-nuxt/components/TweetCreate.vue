<script setup lang="ts">
import { ref } from 'vue'

const tweet = ref('')
const editing = ref(false)


const submitTweet = () => {
  // Lógica para postar tweet
}
</script>

<template>
  <form @submit.prevent="submitTweet" class="w-full flex p-3 border-b border-neutral-700 bg-black">
    <!-- Avatar -->
    <div class="mr-3 flex-shrink-0">
      <img src="/avatar.png" alt="Avatar" class="w-10 h-10 rounded-full object-cover" />
    </div>
    
    <div class="flex-1 flex flex-col">
      <textarea
        v-model="tweet"
        @keydown="editing = true"
        rows="2"
        cols="50"
        placeholder="What's happening?"
        class="bg-transparent text-lg text-white text-xl placeholder-neutral-500 outline-none resize-none w-full"
      />
      <div class="flex items-center justify-between mt-3" :class="{'border-t-3 border-lines pt-4' : editing}">
        <div class="flex gap-2 text-twitter-blue">
            <Icon name="ic:outline-image" style="color: white" />
            <Icon name="ic:outline-gif-box" heigth="50"  style="color: white" />
            <Icon name="ic:outline-format-list-bulleted" style="color: white" />
            <Icon name="ic:outline-emoji-emotions" style="color: white" />
            <Icon name="ic:baseline-edit-calendar" style="color: white" />
            <Icon name="ic:baseline-lcoation-on" style="color: white" />
        </div>
        <ButtonsBtn text="Post"/>
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