<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <div
    class="bg-white dark:bg-gray-800 
           max-w-sm sm:max-w-md md:max-w-lg 
           p-6 m-6 shadow-lg rounded-3xl 
           flex flex-col justify-between
           transition-colors duration-500"
  >
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover rounded-2xl mb-4"
    />

    <article class="p-4 flex-1 prose prose-sm dark:prose-invert">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </article>

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
