<script setup>
defineProps({
  content: Object,
})
</script>

<template>
  <div class="section-content">
    <h2>
      {{ content.title }}
    </h2>
    <hr align="right" />
    <p v-for="(item, i) in content.items" :key="i">
      {{ item }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.section-content {
  max-width: 500px;

  @media screen and (max-width: 880px) {
    max-width: 300px;
  }
}

h2 {
  font-size: 2rem;
  font-weight: bold;
}

hr {
  border: 2px solid #ceeb2c;
  max-width: 50px;
}

p {
  padding-top: 1rem;
  font-size: 1rem;
  font-weight: 300;
}
</style>