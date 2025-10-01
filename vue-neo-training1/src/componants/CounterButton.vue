<script setup>
import { defineEmits } from 'vue';
defineEmits(["increment"])    

</script>
<template>
    <div>
        <button @click="$emit('increment')" >Increment</button>
    </div>
</template>

<style></style>