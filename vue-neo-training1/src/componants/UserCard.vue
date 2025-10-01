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


</script>
<template>
    <div>
        <p>
            {{ props.name }} - {{ props.age }} years old
        </p>
    </div>
</template>

<style></style>