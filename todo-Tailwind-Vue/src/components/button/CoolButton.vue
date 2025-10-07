<template>
  <button class="p-2 w-20 
               bg-rose-400 hover:bg-rose-500 
               dark:bg-rose-500 dark:hover:bg-rose-400 
               rounded-xl shadow-lg 
               text-white font-bold 
               hover:cursor-auto
               focus:ring-2 focus:ring-rose-300 
               disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50 
               transition-all duration-300">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style></style>