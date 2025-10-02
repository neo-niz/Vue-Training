<template>
  <button class="cool">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style>
.cool {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #2563eb, #1d4ed8); /* blue gradient */
  color: white;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
  transition: all 0.2s ease-in-out;
}

.cool:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(37, 99, 235, 0.4);
}
</style>