<script setup lang="ts">
const menuItems = [
  { label: 'Página Inicial', icon: 'ic:baseline-home', active: true },
  { label: 'Explorar', icon: 'ic:baseline-search' },
  { label: 'Notificações', icon: 'ic:outline-notifications' },
  { label: 'Mensagens', icon: 'ic:outline-mail' },
  { label: 'Grok', icon: 'mdi:leaf' },
  { label: 'Itens salvos', icon: 'ic:outline-bookmark' },
  { label: 'Empregos', icon: 'ic:outline-business-center' },
  { label: 'Comunidades', icon: 'ic:outline-people' },
  { label: 'Premium', icon: 'ic:baseline-star' },
  { label: 'Organizações Ve...', icon: 'ic:baseline-flash-on' },
  { label: 'Perfil', icon: 'ic:outline-person' },
  { label: 'Mais', icon: 'ic:outline-more-horiz' }
]
</script>

<template>
  <nav class="flex flex-col h-screen w-64 bg-black text-white py-6 px-2 fixed left-0 top-0 border-r border-neutral-800">
    <div class="mb-8 flex items-center px-4">
      <Icon name="ic:baseline-home" class="text-twitter-blue text-3xl mr-2" />
      <span class="font-bold text-xl">Página Inicial</span>
    </div>
    <ul class="flex-1 flex flex-col gap-2">
      <li v-for="(item, i) in menuItems" :key="i">
        <button
          class="flex items-center w-full gap-4 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-neutral-900 focus:outline-none"
          :class="item.active ? 'bg-neutral-900 font-bold text-twitter-blue' : ''"
          tabindex="0"
        >
          <Icon :name="item.icon" class="text-2xl" />
          <span class="truncate">{{ item.label }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.text-twitter-blue {
  color: #1da1f2;
}
@media (max-width: 1024px) {
  nav {
    width: 72px;
    min-width: 72px;
    padding-left: 0;
    padding-right: 0;
  }
  span {
    display: none;
  }
}
</style>