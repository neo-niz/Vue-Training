<script setup>
import TodoItem from './TodoItem.vue'
defineProps({
    todoList: {
        required: true
    }
})
const emit = defineEmits(['deleteTask', 'toggleTask'])
function handleDeleteTask(id) {
  emit('deleteTask', id)
}
function handleCheckChange(id) {
  emit('toggleTask', id)
}
</script>
<template>
  <div v-if="todoList && todoList.length !== 0" class="p-4">
    <ul v-for="(value, i) in todoList" :key="i">
      <TodoItem :task="value" @toggle-task="handleCheckChange" @delete-task="handleDeleteTask" />
    </ul>
  </div>
  <div v-else class="text-black text-center m-auto p-4 dark:text-gray-300">
    Todo list is empty !
  </div>
</template>

<style></style>
