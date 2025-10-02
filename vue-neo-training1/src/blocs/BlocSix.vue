<script setup>
import { computed, reactive } from 'vue';


const form = reactive({
  firstName: "John",
  lastName: "Deo",
})

const fullName = computed(()=>{
    return form.firstName + " "  + form.lastName
} ) 

</script>

<template>
  <div class="center">
    <div class="box">
      <input v-model="form.firstName" placeholder="Enter First Name">
      <input v-model="form.lastName" placeholder="Enter Last Name">
    </div>



    <div class="box">
      <p> Hello {{ fullName }}</p>
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
