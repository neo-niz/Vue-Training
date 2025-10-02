<script setup>
const props = defineProps(['task'])
const emit = defineEmits(['deleteTask','toogleTask'])
function handleDeleteTask() {
    emit('deleteTask', props.task.id)
}
function handleCheckChange(){
    emit('toogleTask', props.task.id)
}
</script>
<template>

    <li class="item">
        <input type="checkbox" :id="props.task.id" @change="handleCheckChange"  :checked="props.task.isChecked" />
        {{ props.task.content }}
        <span @click="handleDeleteTask">
            x
        </span>
    </li>

</template>

<style>
.item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8 12px;
}
</style>