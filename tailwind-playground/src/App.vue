<script setup>
import BlocTwoCard from './components/blocs/blocTwoCard.vue';
import { ref, watch } from 'vue'

const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
}

watch(isDark, (v) => {
  document.documentElement.classList.toggle('dark', v)
})
</script>

<template>
  <div class="min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100">
    <header class=" bg-rose-400 shadow">
      <div class="hidden md:flex p-4 container items-center">
        <h1 class="text-2xl text-white font-bold ">
          Tailwind playground
        </h1>
        <nav class="pl-8 flex gap-4">
          <a href="#" class="text-white text-xl font-bold hover:underline">Home</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">About</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">Blog</a>
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
          <a href="#" class="text-white text-xl font-bold hover:underline">Blog</a>
          <a href="#" class="text-white text-xl font-bold hover:underline">Contact</a>
        </nav>

      </div>
    </header>

    <main class="flex-1 p-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlocTwoCard image="https://www.simplilearn.com/ice9/free_resources_article_thumb/Node_Js_Backend.jpg"
          title="Mastering Async Patterns in Node.js"
          description="From callbacks to async/await — understand how Node.js handles concurrency, event loops, and promises without getting lost in callback hell." />

        <BlocTwoCard image="https://miro.medium.com/v2/resize%3Afit%3A1024/1%2A3s6sUqMWgg2I-SAKHTG9ew.png"
          title="Building Scalable APIs with Express and TypeScript"
          description="Learn how to design maintainable, type-safe REST APIs in Node.js using Express, TypeScript, and best practices for folder structure." />

        <BlocTwoCard image="https://codingwithjay.com/wp-content/uploads/2023/10/Nodejs-serverside-javascript.png"
          title="Optimizing Node.js Performance for Production"
          description="Profiling, clustering, caching, and monitoring — explore practical strategies to make your Node.js apps fast and reliable in production environments." />

        <BlocTwoCard
          image="https://images.ctfassets.net/41rxnoy9luo5/dwiNCTIZ5gdEXAfoWbpPw/7b21fefd4091168f0172aa605df06d26/image7.jpg?q=100&w=3200"
          title="Event-Driven Architecture in Node.js"
          description="Harness the power of events and message queues to decouple logic, scale horizontally, and build resilient backend systems." />

        <BlocTwoCard
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstrapi-images-aws-s3.s3.us-west-2.amazonaws.com%2FHow_to_use_Streams_in_Node_js_5d057c13d4.png&f=1&nofb=1&ipt=4e110b631237d3e3cbd87c960aa91ac0a7530e53b28996895eee8b5c826708e4"
          title="Demystifying Streams in Node.js"
          description="Streams are one of Node's most powerful features — learn how to process large files efficiently with backpressure and transform pipelines." />


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
    <!-- Floating dark mode toggle -->
    <button @click="toggleDark" class="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full
         bg-rose-500 dark:bg-gray-700 text-white
         shadow-lg shadow-rose-400/30 dark:shadow-black/50
         grid place-items-center
         transition-all duration-300
         hover:scale-105 active:scale-95
         focus:outline-none focus-visible:ring-2
         focus-visible:ring-white/70 focus-visible:ring-offset-2
         focus-visible:ring-offset-rose-500 dark:focus-visible:ring-offset-gray-800">
      <!-- Sun icon (light mode) -->
      <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        class="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path
          d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.54 6.46-1.42-1.42M7.88 7.88 6.46 6.46m10.96 0-1.42 1.42M7.88 16.12 6.46 17.54" />
      </svg>

      <!-- Moon icon (dark mode) -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        class="h-6 w-6 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>


  </div>

</template>

<style scoped></style>
