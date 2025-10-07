<script setup></script>

<template>
  <section class="space-y-16">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400">
        Who we help
      </h2>
      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div class="card bg-white dark:bg-gray-800 shadow">
          <div class="card-body">
            <h3 class="card-title text-gray-900 dark:text-gray-100">Beginners & switchers</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Learn Node.js from scratch with clear mental models and lots of hands-on practice.
            </p>
          </div>
        </div>
        <div class="card bg-white dark:bg-gray-800 shadow">
          <div class="card-body">
            <h3 class="card-title text-gray-900 dark:text-gray-100">Frontend devs</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Turn your JS skills into production-ready APIs with Express, Auth, and databases.
            </p>
          </div>
        </div>
        <div class="card bg-white dark:bg-gray-800 shadow">
          <div class="card-body">
            <h3 class="card-title text-gray-900 dark:text-gray-100">Teams & startups</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Ship faster with opinionated patterns, DX tooling, and maintainable architectures.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400">
        What you’ll learn
      </h2>
      <div class="mt-6 grid gap-6 md:grid-cols-2">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">Core & API development</h3>
          <ul class="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Async patterns, event loop, streams, clustering</li>
            <li>Express + TypeScript, routing, validation, error handling</li>
            <li>Authentication, sessions/JWT, RBAC</li>
          </ul>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">Data & production</h3>
          <ul class="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>PostgreSQL/MongoDB, Prisma/ORM basics</li>
            <li>Caching, queues, event-driven architecture</li>
            <li>Observability, logging, metrics, CI/CD</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400">
        How we teach
      </h2>
      <div class="mt-6 grid gap-6 md:grid-cols-3">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">Project-first</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            Every concept lands inside a small, real app: API, background jobs, and a deployed service.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">Short lessons</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            5–10 minute videos and written guides, with checkpoints and copy-pasteable snippets.
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6">
          <h3 class="font-semibold text-gray-900 dark:text-gray-100">Production mindset</h3>
          <p class="mt-2 text-gray-700 dark:text-gray-300">
            Error budgets, rollout strategies, and practical trade-offs you’ll actually use at work.
          </p>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400">
        Who’s behind it
      </h2>
      <div class="mt-6 grid gap-6 sm:grid-cols-2">
        <div class="card bg-white dark:bg-gray-800 shadow">
          <div class="card-body">
            <h3 class="card-title text-gray-900 dark:text-gray-100">Guest contributors</h3>
            <p class="text-gray-700 dark:text-gray-300">
              Engineers from product teams who share real-life patterns on testing, observability, and architecture.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400">
        FAQ
      </h2>
      <div class="mt-4 grid gap-3">
        <div class="collapse bg-white dark:bg-gray-800 shadow rounded-xl">
          <input type="checkbox" />
          <div class="collapse-title text-lg font-medium text-gray-900 dark:text-gray-100">
            Do I need prior Node.js experience?
          </div>
          <div class="collapse-content text-gray-700 dark:text-gray-300">
            <p>No. We start from fundamentals and ramp up quickly with hands-on projects.</p>
          </div>
        </div>
        <div class="collapse bg-white dark:bg-gray-800 shadow rounded-xl">
          <input type="checkbox" />
          <div class="collapse-title text-lg font-medium text-gray-900 dark:text-gray-100">
            Are there complete projects?
          </div>
          <div class="collapse-content text-gray-700 dark:text-gray-300">
            <p>Yes — from REST APIs to queues and deploys, each module ends with a working service.</p>
          </div>
        </div>
        <div class="collapse bg-white dark:bg-gray-800 shadow rounded-xl">
          <input type="checkbox" />
          <div class="collapse-title text-lg font-medium text-gray-900 dark:text-gray-100">
            How do I ask questions?
          </div>
          <div class="collapse-content text-gray-700 dark:text-gray-300">
            <p>Each lesson has Q&A notes; we also publish follow-ups when topics need deeper dives.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
