    <script setup>
import { ref } from 'vue';
import CounterButton from './componants/CounterButton.vue';
import UserCard from './componants/UserCard.vue';

const age = ref(0)
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
    <div class="box">
      <UserCard name="John" :age="age" />
    </div>

    <div class="box">
      <CounterButton @increment="() => age ++" />
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
