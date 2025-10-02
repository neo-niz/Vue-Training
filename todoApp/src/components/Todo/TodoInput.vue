<script setup>
import { ref } from 'vue';
import CoolButton from '../button/CoolButton.vue';
const emit = defineEmits(["addTask"])
const value = ref('')
function handleClick() {
    if (value.value.trim()) {
        emit('addTask', value.value)
        value.value = ''
    }
}
</script>
<template>
    <div >
        <input class="in" v-model="value" placeholder="What needs to be done?" />
        <CoolButton @click="handleClick">add</CoolButton>
    </div>
</template>

<style>

.in {
    margin: 12px;
    padding: 10px 18px;
    border-radius: 8px;
}
</style>