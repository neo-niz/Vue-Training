<!-- <script setup>
  import { ref } from 'vue';
  const message = ref("Hello vue!")
  
</script> -->

<script>
export default {
  data() {
    return {
      todo: ["Setup Machine","Install deps","Run Project"],
      // todo: []
    }
  }
}
</script>

<template>
  <div class="center">
    <div v-if="todo.length > 0"> 
      <p :key="i" v-for="(val,i) in todo" >
          {{ val }}
      </p>
    </div>
  
    <div v-else> 
      <p>
        No Tasks yet
      </p>
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
