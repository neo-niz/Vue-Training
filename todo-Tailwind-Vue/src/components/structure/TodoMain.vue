<script setup>
import { onMounted, ref, watch } from 'vue'
import TodoHeader from '../Todo/TodoHeader.vue'
import TodoInput from '../Todo/TodoInput.vue'
import TodoList from '../Todo/TodoList.vue'
import TodoCard from '../Todo/TodoCard.vue'

const todoList = ref([])
const STORAGE_KEY = 'todo-list'

onMounted(() => {
  console.log('Todo App Loaded...')
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    todoList.value = JSON.parse(saved)
  }
})

watch(
  todoList,
  (newList) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList))
  },
  { deep: true }
)

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9)
}
function handleAddTask(task) {
  todoList.value.push({
    id: generateId(),
    content: task,
    isChecked: false,
  })
}
function handleDeleteTask(id) {
  todoList.value = todoList.value.filter((x) => x.id !== id)
}

function handletoggleTask(id) {
  const todo = todoList.value.find((x) => x.id === id)
  if (todo) {
    todo.isChecked = !todo.isChecked
  }
}
</script>

<template>
  <div class="m-auto flex w-full max-w-xl flex-1 flex-col gap-4 p-6">
    <TodoCard>
      <TodoHeader />
      <TodoInput @add-task="handleAddTask" />
      <TodoList
        :todo-list="todoList"
        @toggle-task="handletoggleTask"
        @delete-task="handleDeleteTask"
      />
    </TodoCard>
  </div>
</template>

<style scoped></style>
