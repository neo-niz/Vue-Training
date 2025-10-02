<script setup>
import { ref } from 'vue';
import TodoHeader from './components/Todo/TodoHeader.vue';
import TodoInput from './components/Todo/TodoInput.vue';
import TodoList from './components/Todo/TodoList.vue';
import TodoCard from './components/Todo/TodoCard.vue';
import { onMounted } from 'vue';
onMounted(()=>{
  console.log("Todo App Loaded...")
})
const todoList = ref([])
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
function handleDeleteTask(id){
  todoList.value = todoList.value.filter((x)=>x.id !==id)
}

function handleToogleTask(id){
  const todo = todoList.value.find(x => x.id === id)
  if (todo) {
    todo.isChecked = !todo.isChecked
  }
}

</script>

<template>
  <div class="main">
    <TodoCard class="center">
      <TodoHeader />
      <TodoInput @addTask="handleAddTask" />
      <TodoList @toogleTask="handleToogleTask" @deleteTask="handleDeleteTask" :todoList="todoList"/>
    </TodoCard>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 12px;
}

.main {
  background-color: #f1f5f9;
  min-height: 100svh;
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
</style>
