        
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
    <div class="listContainer" v-if="todoList && todoList.length !== 0">
        <ul :key="i" v-for="(value, i) in todoList">
                <TodoItem @toggleTask="handleCheckChange" @deleteTask="handleDeleteTask" :task="value" />
        </ul>
    </div>
    <div class="listContainer" v-else>
        Todo list is empty !
    </div>
</template>

<style>
.listContainer{
    margin: 12px
}
</style>