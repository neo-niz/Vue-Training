<template>
  <!-- Floating dark mode toggle -->
  <button
    class="fixed bottom-20 right-6 z-50 h-12 w-12 rounded-full bg-rose-500 dark:bg-gray-700 text-white shadow-lg shadow-rose-400/30 dark:shadow-black/50 grid place-items-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-500 dark:focus-visible:ring-offset-gray-800"
    @click="handleClick"
  >
    <!-- Sun icon (light mode) -->
    <svg
      v-if="!isDark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-6 w-6 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.54 6.46-1.42-1.42M7.88 7.88 6.46 6.46m10.96 0-1.42 1.42M7.88 16.12 6.46 17.54"
      />
    </svg>

    <!-- Moon icon (dark mode) -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-6 w-6 transition-transform duration-300"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  </button>
</template>

<script setup>
const emit = defineEmits(['toogleDark'])

function handleClick() {
  emit('toggleDark')
}
</script>

<style></style>
