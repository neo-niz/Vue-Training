<script setup>
import {  ref, watch } from 'vue';


const search=  ref()

watch(search,()=>{
  console.log("Searching for ... " + search.value)
})

</script>

<template>
  <div class="center">
    <div class="box">
      <input v-model="search" placeholder="Search">
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
