<template>
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

</template>

<script setup>
import BlocTwoCard from '@/components/blocs/blocTwoCard.vue';


</script>

<style></style>