<script setup>
import { onMounted, ref, watch } from 'vue'
import HeaderMain from './components/structure/HeaderMain.vue'
import FooterMain from './components/structure/FooterMain.vue'
import ModeButton from './components/structure/ModeButton.vue'
import todoMain from './components/structure/todoMain.vue'

const isDark = ref(false)
const todoList = ref([])
const STORAGE_KEY= "todo-list"

onMounted(() => {
  console.log("Todo App Loaded...")
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    todoList.value = JSON.parse(saved)
  }
})

watch(todoList, (newList) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
}, { deep: true })

function toggleDark() {
  isDark.value = !isDark.value
}


watch(isDark, (v) => {
  document.documentElement.classList.toggle('dark', v)
})
</script>

<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100">
    
    <HeaderMain />
    
    <todoMain />
  
    <FooterMain />

    <ModeButton @toggleDark="toggleDark"/>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
