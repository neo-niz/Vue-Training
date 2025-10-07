<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 
           max-w-sm sm:max-w-md md:max-w-lg 
           p-6 m-6 shadow-lg rounded-3xl 
           justify-between 
           flex flex-col
           transition-colors duration-500"
           
  >
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover rounded-2xl mb-4"
    />

    <div class="p-4 mt-auto">
      <h2
        class="text-indigo-800 dark:text-indigo-300 
               text-4xl font-bold tracking-wide"
      >
        {{ title }}
      </h2>

      <p class="pt-4 text-gray-800 dark:text-gray-300">
        {{ description }}
      </p>
    </div>

    <div class="p-4 mt-auto">
      <button
        class="p-3 w-28 
               bg-rose-400 hover:bg-rose-500 
               dark:bg-rose-500 dark:hover:bg-rose-400 
               rounded-xl shadow-lg 
               text-white font-bold 
               hover:outline-none focus:ring-2 focus:ring-rose-300 
               disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 
               transition-all duration-300"
      >
        Read more
      </button>
    </div>
  </div>
</template>

<style scoped></style>
