        
<script setup>
import TodoItem from './TodoItem.vue'
defineProps(['todoList'])
const emit = defineEmits(['deleteTask','toogleTask'])
function handleDeleteTask(id) {
    emit('deleteTask', id)
}
function handleCheckChange(id){
    emit('toogleTask', id)
}
</script>
<template>
    <div class="listContainer" v-if="todoList && todoList.length !== 0">
        <ul>
            <div :key="i" v-for="(value, i) in todoList">
                <TodoItem @toogleTask="handleCheckChange" @deleteTask="handleDeleteTask" :task="value" />
            </div>
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