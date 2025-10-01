<!-- <script setup>
  import { ref } from 'vue';
  const message = ref("Hello vue!")
  
</script> -->

<script>
export default {
  data() {
    return {
      n: 0
    }
  }
}
</script>

<template>
  <div class="center">
    <div class="box">
      You clicked {{ n }} {{ n === 1 ? 'time' : 'times' }}
    </div>

    <div class="box">
      <button @click="n++">
        Add
      </button>

      <button @click="n = 0 ">
        Reset
      </button>
    </div>

  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  align-items: center;
  font-size: large;
}

.box {
  display: flex;
  margin: 10px;
  justify-content: center;
  align-items: center;
}
</style>
