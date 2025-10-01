# Skill Ramp-Up Plan – Part 4 (Vue 3)

## Block 0 – Opening & Navigation (DevTools basics)
- **Skills**
  - Open DevTools with F12 or Ctrl+Shift+I / Cmd+Opt+I
  - Select elements using the Inspect icon (Ctrl+Shift+C)
  - Inspect and live-edit HTML/CSS in the Elements panel
  - Read computed styles for margins, padding, colors, fonts
  - Enable/disable CSS rules or add new ones
  - Visualize the box model (margin, padding, border)
  - Use rulers, flexbox, and grid overlays to analyze layout
  - Simulate `:hover` or `:active` states
  - Use the Console for JavaScript errors and warnings
  - Run snippets (e.g. `document.querySelector`) to inspect values/events
- **Resources**
  - Chrome DevTools overview
  - Inspect CSS Grid & Flexbox
  - DevTools Console
- **Definition of Done (Exercise)**
  - Open DevTools on a webpage, inspect a DOM element, toggle a CSS property, visualize the box model, activate a flexbox overlay, and log a message in the console

## Block 1 – Creating a Vue Instance
- **Skills**
  - Create a Vue app with `createApp`
  - Mount the app to a DOM element using `.mount('#app')`
  - Add a data property and render it in the DOM
- **Resources**
  - Vue 3 Docs – Getting Started
  - createApp API
- **Definition of Done (Exercise)**
  - Create `index.html` with `<div id="app"></div>`
  - In `main.js`, mount a Vue app displaying `Hello Vue!`

## Block 2 – Template Syntax & Interpolation
- **Skills**
  - Display variables with `{{ }}`
  - Bind attributes using `v-bind`
- **Resources**
  - Template Syntax
- **Definition of Done (Exercise)**
  - Create a `data()` variable `title: 'My Vue App'`
  - Display `<h1>{{ title }}</h1>` and bind `:alt="title"` on an image

## Block 3 – Directives Basics
- **Skills**
  - Conditionally render with `v-if`, `v-else`, `v-show`
  - Iterate lists using `v-for`
- **Resources**
  - Conditional Rendering
  - List Rendering
- **Definition of Done (Exercise)**
  - Create a `todos` array in `data()`
  - Render each todo with `v-for`
  - When empty, show `<p>No tasks yet</p>` using `v-if`

## Block 4 – Events Handling
- **Skills**
  - Handle user actions with `@click`, `@input`
- **Resources**
  - Event Handling
- **Definition of Done (Exercise)**
  - Create a button that increments a `count` on click and displays `You clicked X times`

## Block 5 – Data, Reactive & Ref
- **Skills**
  - Use `ref` for primitive values
  - Use `reactive` for objects
- **Resources**
  - Reactivity Fundamentals
- **Definition of Done (Exercise)**
  - Bind an input with `v-model` to a `ref` variable `name`
  - Display `Hello, {{ name }}`
  - Add a reactive object `{ firstName, lastName }` and display `{{ firstName }} {{ lastName }}`

## Block 6 – Methods & Computed Properties
- **Skills**
  - Define functions in `methods`
  - Create derived values with `computed`
- **Resources**
  - Computed Properties
- **Definition of Done (Exercise)**
  - Provide inputs for `firstName` and `lastName`
  - Define a `computed` property `fullName`
  - Display `Hello {{ fullName }}`

## Block 7 – Watchers
- **Skills**
  - React to data changes with `watch`
- **Resources**
  - Watchers
- **Definition of Done (Exercise)**
  - Create an input `search` with `v-model`
  - Watch `search` and log `Searching for: <value>` on change

## Block 8 – Two-way Binding (v-model)
- **Skills**
  - Bind form inputs with `v-model`
- **Resources**
  - Form Input Bindings
- **Definition of Done (Exercise)**
  - Build a login form with `v-model` bound to `email` and `password`
  - Display the values live under the form

## Block 9 – Props (Parent → Child)
- **Skills**
  - Pass data from parent to child via props
- **Resources**
  - Props
- **Definition of Done (Exercise)**
  - Create `UserCard.vue` with props `name` and `age`
  - From the parent, pass values and display `John – 25 years old`

## Block 10 – Events (Child → Parent)
- **Skills**
  - Use `$emit` to send data to the parent component
- **Resources**
  - Component Events
- **Definition of Done (Exercise)**
  - Create `CounterButton.vue` with a button emitting `increment`
  - In the parent, listen with `@increment` and update a total counter

## Block 11 – Slots Basics
- **Skills**
  - Use `<slot>` for flexible component content
- **Resources**
  - Slots
- **Definition of Done (Exercise)**
  - Create `Card.vue` with a `<slot>`
  - Use as:
    ```vue
    <Card>
      <h2>Title</h2>
      <p>Some description</p>
    </Card>
    ```

## Block 12 – Dynamic Classes & Styles
- **Skills**
  - Toggle CSS classes and inline styles dynamically
- **Resources**
  - Class and Style Bindings
- **Definition of Done (Exercise)**
  - Create a button with `:class="{ active: isActive }"`
  - Toggle `isActive` with `@click`
  - When `true`, the button turns green

## Block 13 – Lifecycle Hooks
- **Skills**
  - Use `onMounted`, `onUpdated`, `onUnmounted`
- **Resources**
  - Lifecycle Hooks
- **Definition of Done (Exercise)**
  - Create a component that logs:
    - `Mounted` in `onMounted`
    - `Updated` in `onUpdated`
    - `Destroyed` in `onUnmounted`
  - Toggle it with `v-if` to test

## Block 14 – Mini-project: Todo App
- **Skills**
  - Combine Vue concepts (data, events, props, emit, `v-model`, slots, lifecycle hooks)
  - Manage a task list (create, display, update, delete)
  - Pass data between parent and child components
  - Apply conditional rendering and dynamic classes
- **Resources**
  - Vue 3 Guide – Essentials
  - Component Basics
  - TodoMVC with Vue 3 (Example)
- **Definition of Done (Exercise)**
  - Build a Todo App with:
    1. **Add task**: `v-model="newTask"` input; button adds to `tasks` array
    2. **Display tasks**: render with `v-for`; show text + checkbox
    3. **Mark as done**: checkbox toggles `task.done`; apply `:class="{ completed: task.done }"`
    4. **Delete task**: delete button removes a task
    5. **Componentization**: create `TaskItem.vue` with a `task` prop; emit `delete-task` and `toggle-task`; parent listens and updates state
    6. **Bonus**: use a slot in `TaskItem.vue` for custom button content; log `Todo App loaded` with `onMounted`

👉 Résultat attendu : une mini-app avec au moins 2 composants (`App.vue`, `TaskItem.vue`).
