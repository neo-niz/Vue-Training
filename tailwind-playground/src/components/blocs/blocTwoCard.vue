<template>

    <div class="bg-white max-w-sm sm:max-w-md md:max-w-lg  p-6 m-6 shadow-lg rounded-3xl  justify-between">
        <div class="p-4">

            <h1 class="text-indigo-800 text-4xl font-bold tracking-wide">
                I am using tailwind
            </h1>
            <p class=" pt-4 text-gray-800">
                This is a simple card built with Vue 3 and Tailwind CSS.
                The heading, paragraph, and button each use different font sizes,
                weights, and colors
            </p>
        </div>
        <div class="p-4">
            <button
                class="p-3 w-28 bg-rose-400 hover:bg-rose-600 rounded-xl
                hover:outline-2  
                focus:ring-neutral-400 focus-visible: ring-2 
                disabled:bg-gray-200 disabled:text-gray-800 disabled:cursor-not-allowed disabled:opacity-40
                shadow-lg text-white font-bold 
                transition duration-500">
                Click me
            </button>

        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style></style>