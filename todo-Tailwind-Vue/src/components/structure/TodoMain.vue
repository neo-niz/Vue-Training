<script setup>
import { ref } from 'vue';
import TodoHeader from '../Todo/TodoHeader.vue';
import TodoInput from '../Todo/TodoInput.vue';
import TodoList from '../Todo/TodoList.vue';
import TodoCard from '../Todo/TodoCard.vue';

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
function handleDeleteTask(id) {
    todoList.value = todoList.value.filter((x) => x.id !== id)
}

function handletoggleTask(id) {
    const todo = todoList.value.find(x => x.id === id)
    if (todo) {
        todo.isChecked = !todo.isChecked
    }
}

</script>

<template>
    <div class="flex-1 p-6 m-auto
    w-full max-w-xl  flex flex-col gap-4
    
      ">
        <TodoCard>
            <TodoHeader />
            <TodoInput @addTask="handleAddTask" />
            <TodoList @toggleTask="handletoggleTask" @deleteTask="handleDeleteTask" :todoList="todoList" />
        </TodoCard>
    </div>
</template>

<style scoped></style>
