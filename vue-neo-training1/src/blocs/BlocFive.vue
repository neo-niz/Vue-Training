<script setup>
import { reactive, ref } from 'vue';

const name = ref("John")

const form = reactive({
  firstName: "John",
  lastName: "Deo",
})

</script>

<!-- <script>
export default {
  data() {
  return {
    n: 0
    }
  }
}
</script> -->

<template>
  <div class="center">
    <div class="box">
      <input v-model="name" placeholder="Enter Name">
    </div>

    <div v-if="name&&true" class="box">
      <p> Hello, {{ name }}</p>
    </div>



    <div class="box">
      <p> {{ form.firstName }}  {{ form.lastName }}</p>
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
