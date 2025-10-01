<script setup>
import { ref } from 'vue';
// import CounterButton from './componants/CounterButton.vue';
// import UserCard from './componants/UserCard.vue';
// import CardItem from './componants/CardItem.vue';
// const age = ref(0)
const isActive = ref(false)
</script>

<!-- <script>
export default {bß
  data() {
  return {
    n: 0
    }
  }
}
</script> -->

<template>
  <div class="center">

    <button @click="() => isActive = !isActive" :class="{active: isActive}" >Click me</button>

    <!-- <div class="box">
      <UserCard name="John" :age="age" />
    </div>

    <div class="box">
      <CounterButton @increment="() => age ++" />
    </div>


    <CardItem>
      <h2>Title</h2>
      <p>Some description</p>
    </CardItem> -->

  </div>
</template>

<style scoped>
.active{

  background-color: green;
}

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
