<script setup>
import BlocTwoCard from './components/blocs/blocTwoCard.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <header class="flex bg-rose-400 justify-between p-3 items-center shadow-lg ">
      <h1 class="text-3xl text-white font-bold">
        Tailwind playground
      </h1>
    </header>

    <main class="flex-1 p-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlocTwoCard />
        <BlocTwoCard />
        <BlocTwoCard />
      </div>

    </main>

    <footer class="bg-black flex justify-between text-gray-200 text-left p-4">
      <p>

        This is a tailwind playground. Made to explore tailwind...
      </p>
      <p>
        @NIZA
      </p>
    </footer>

  </div>

</template>

<style scoped></style>
