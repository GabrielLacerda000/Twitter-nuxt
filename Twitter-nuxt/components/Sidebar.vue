<script setup lang="ts">
import MenuBtn from '@/components/buttons/MenuBtn.vue'

const menuItems = [
  { label: 'Página Inicial', icon: 'ic:baseline-home', active: true, route: '/'},
  { label: 'Explorar', icon: 'ic:baseline-search', active: false, route: '/'},
  { label: 'Notificações', icon: 'ic:outline-notifications', active: false, route: '/'},
  { label: 'Mensagens', icon: 'ic:outline-mail', active: false, route: '/'  },
  { label: 'Grok', icon: 'mdi:leaf', active: false, route: '/'  },
  { label: 'Itens salvos', icon: 'ic:outline-bookmark', active: false, route: '/'},
  { label: 'Empregos', icon: 'ic:outline-business-center' , active: false, route: '/'},
  { label: 'Comunidades', icon: 'ic:outline-people', active: false, route: '/'  },
  { label: 'Premium', icon: 'ic:baseline-star', active: false, route: '/'},
  { label: 'Organizações Ve...', icon: 'ic:baseline-flash-on', active: false, route: '/'},
  { label: 'Perfil', icon: 'ic:outline-person', active: false, route: '/'},
  { label: 'Mais', icon: 'ic:outline-more-horiz' , active: false, route: '/'}
]
</script>

<template>
  <nav class="flex flex-col h-screen w-64 bg-black text-white py-6 px-2 fixed left-0 top-0 border-r border-neutral-800">
    <div class="mb-8 flex items-center px-4">
      <Icon name="ic:baseline-home" class="text-[#1da1f2] text-3xl mr-2" />
      <span class="font-bold text-xl">Página Inicial</span>
    </div>
    <ul class="flex-1 flex flex-col gap-2">
      <li v-for="(item, i) in menuItems" :key="i">
        <MenuBtn :icon="item.icon" :label="item.label" :active="item.active ?? false" :route="item.route"/>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

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