<script setup>
import BlocTwoCard from './components/blocs/blocTwoCard.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <header class=" bg-rose-400 shadow">
      <div class="hidden md:flex p-4 container items-center">
        <h1 class="text-2xl text-white font-bold ">
          Tailwind playground
        </h1>
        <nav class="pl-8 flex gap-4">
          <a href="#" class="text-white text-xl font-bold hover:underline">Home</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">About</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">Services</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">Contact</a>
        </nav>
        
      </div>

      <div class="flex md:hidden p-2 flex-col items-center">
        <h1 class="text-2xl text-white font-bold ">
          Tailwind playground
        </h1>
        <nav class="pt-4 flex flex-col gap-2 items-center">
          <a href="#" class="text-white text-xl font-bold hover:underline">Home</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">About</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">Services</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">Contact</a>
        </nav>
        
      </div>
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
