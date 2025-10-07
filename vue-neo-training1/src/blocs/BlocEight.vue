<script setup>
import { reactive } from 'vue';


const form = reactive({
  email: "",
  password: "",
}
)
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
      <form>
        <label>
          Email : <input type="email" v-model="form.email"/>
        </label>

        <label>
          Password : <input type="password" v-model="form.password" />
        </label>
        
      </form>
    </div>
    <div class="box">
      <p v-if="form.email&&true">Email : {{ form.email }}.   </p>
      <p v-if="form.password&&true"> Pass : {{ form.password }}</p>
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
