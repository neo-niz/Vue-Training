<!-- <script setup>
  import { ref } from 'vue';
  const message = ref("Hello vue!")
  
</script> -->

<script>
export default {
  data() {
    return {
      message: "Hello vue!",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKRmGWc6mGNqQ9_9bP0tU1RoI-q58S7qILQ&s"
    }
  }
}
</script>

<template>
  <div class="center">
    <div>
      <h1>
        {{ message }}
      </h1>

    </div>
    <div>
      <img :src="imageUrl" :alt="title">

    </div>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
}
</style>
