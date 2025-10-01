<script setup>
    
</script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>


<style>
.card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 16px 20px;
  max-width: 300px;
  margin: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
</style>