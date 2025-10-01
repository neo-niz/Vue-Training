<!-- <script setup>
  import { ref } from 'vue';
  const message = ref("Hello vue!")
  
</script> -->

<script>
export default{
  data(){
    return {
      title: "Hello vue!"
    }
  }
}
</script>

<template>
  <h1 class="center">
    {{ title }}
  </h1>
</template>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
