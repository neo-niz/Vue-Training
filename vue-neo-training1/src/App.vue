<!-- <script setup>
  import { ref } from 'vue';
  const message = ref("Hello vue!")
  
</script> -->

<script>
export default{
  data(){
    return {
      message: "Hello vue!"
    }
  }
}
</script>

<template>
  <p>
    {{ message }}
  </p>
</template>

<style scoped></style>
