<script setup>
import { ref } from 'vue'
import CoolButton from '../button/CoolButton.vue'
const emit = defineEmits(['addTask'])
const value = ref('')
function handleClick() {
  if (value.value.trim()) {
    emit('addTask', value.value)
    value.value = ''
  }
}
</script>
<template>
  <div class="flex flex-row justify-between p-4">
    <input
      v-model="value"
      class="flex-1 rounded-2xl border-1 border-black p-2 text-black dark:text-gray-300"
      placeholder="What needs to be done?"
    />
    <CoolButton class="ml-4" @click="handleClick">Add</CoolButton>
  </div>
</template>

<style></style>
