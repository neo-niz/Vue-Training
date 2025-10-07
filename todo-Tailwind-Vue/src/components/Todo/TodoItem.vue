<script setup>
const props = defineProps(['task'])
const emit = defineEmits(['deleteTask', 'toggleTask'])
function handleDeleteTask() {
    emit('deleteTask', props.task.id)
}
function handleCheckChange() {
    emit('toggleTask', props.task.id)
}
</script>
<template>

    <li class="flex flex-row max-w-lg">
        <input class="full-w bg-white" type="checkbox" :id="props.task.id" @change="handleCheckChange"
            :checked="props.task.isChecked" />
        <div class="text-black p-4 flex-1 dark:text-gray-300">
            {{ props.task.content }}
        </div>
        <button @click="handleDeleteTask" type="button" aria-label="Delete"
            class="inline-flex m-auto h-9 w-9 items-center justify-center rounded-full   bg-rose-400 dark:bg-gray-700  text-white shadow-sm transition-colors hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-600/90 disabled:opacity-50 disabled:cursor-not-allowed">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="h-5 w-5">
                <path fill="currentColor"
                    d="M9 3.75A1.75 1.75 0 0 0 7.25 5.5V6H5a.75.75 0 0 0 0 1.5h.79l.9 10.03A3.25 3.25 0 0 0 9.93 20.5h4.14a3.25 3.25 0 0 0 3.24-2.97L18.21 7.5H19a.75.75 0 0 0 0-1.5h-2.25v-.5A1.75 1.75 0 0 0 15 3.75H9Zm1.5 1.75h3V6h-3V5.5ZM9.75 9a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-6c0-.414.336-.75.75-.75Zm4.5 0c.414 0 .75.336.75.75v6a.75.75 0 0 1-1.5 0v-6c0-.414.336-.75.75-.75Z" />
            </svg> </button>
    </li>

</template>

<style></style>