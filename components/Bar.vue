<script setup>
</script>

<template>
<div class="bar">
  <slot/>
</div>
</template>

<style scoped>
.bar {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>