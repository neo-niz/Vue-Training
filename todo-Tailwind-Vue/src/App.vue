<script setup>
import { onMounted, ref, watch } from 'vue'
import HeaderMain from './components/structure/HeaderMain.vue'
import FooterMain from './components/structure/FooterMain.vue'
import ModeButton from './components/structure/ModeButton.vue'
import TodoMain from './components/structure/TodoMain.vue'
const isDark = ref(false)

onMounted(() => {
  console.log('Todo App Loaded...')
})

function toggleDark() {
  isDark.value = !isDark.value
}

watch(isDark, (v) => {
  document.documentElement.classList.toggle('dark', v)
})
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
    <HeaderMain />

    <TodoMain /> <FooterMain />

    <ModeButton @toggle-dark="toggleDark" />
  </div>
</template>

<style scoped></style>
