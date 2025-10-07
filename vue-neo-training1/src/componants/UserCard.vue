<script setup>
    
    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true
        }
    })

    import { onMounted, onUnmounted, onUpdated } from 'vue';

    onMounted(()=>{
      console.log('Mounted')
    })
    onUpdated(()=>{
      console.log("Updated")
    })
    onUnmounted(()=>{
      console.log("Destroyed")
    })
</script>
<template>
    <div>
        <p>
            {{ props.name }} - {{ props.age }} years old
        </p>
    </div>
</template>

<style></style>