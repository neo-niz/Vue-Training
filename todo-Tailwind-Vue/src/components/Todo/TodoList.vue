        
<script setup>
import TodoItem from './TodoItem.vue'
defineProps(['todoList'])
const emit = defineEmits(['deleteTask','toggleTask'])
function handleDeleteTask(id) {
    emit('deleteTask', id)
}
function handleCheckChange(id){
    emit('toggleTask', id)
}
</script>
<template>
    <div class="p-4" v-if="todoList && todoList.length !== 0">
        <ul :key="i" v-for="(value, i) in todoList">
                <TodoItem @toggleTask="handleCheckChange" @deleteTask="handleDeleteTask" :task="value" />
        </ul>
    </div>
    <div class="text-black text-center m-auto p-4 dark:text-gray-300 " v-else>
        Todo list is empty !
    </div>
</template>

<style>

</style>