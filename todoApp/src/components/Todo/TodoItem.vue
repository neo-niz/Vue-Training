<script setup>
const props = defineProps(['task'])
const emit = defineEmits(['deleteTask','toggleTask'])
function handleDeleteTask() {
    emit('deleteTask', props.task.id)
}
function handleCheckChange(){
    emit('toggleTask', props.task.id)
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
    padding: 8px 12px;
}
</style>