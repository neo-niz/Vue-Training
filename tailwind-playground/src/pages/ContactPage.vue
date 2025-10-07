<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  // placeholder action
  alert(`Thanks, ${name.value}! We'll get back to you soon.`)
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="min-h-[60vh] flex items-center justify-center">
    <div class="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow p-6 md:p-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-300">Contact</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        Send a quick message
      </p>

      <form @submit.prevent="submitForm" class="mt-6 space-y-5">
        <!-- Name -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
          <input
            id="name" v-model="name" type="text" required
            class="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                   px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Your name"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
          <input
            id="email" v-model="email" type="email" required
            class="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                   px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="you@example.com"
          />
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
          <textarea
            id="message" v-model="message" rows="5" required
            class="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100
                   px-3 py-2 outline-none focus:ring-2 focus:ring-rose-300"
            placeholder="Write your message…"
          ></textarea>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full rounded-xl px-5 py-3 bg-rose-500 hover:bg-rose-600
                 text-white font-semibold shadow transition"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped></style>
