<script setup>
defineProps({
    data: Object,
    isWhiteSection: Boolean
  })
</script>

<template>
  <div class="text-center py-5">
    <div v-if="data.title" class="pb-5">
      <h3 class="text-h4 font-weight-medium">{{ data.title }}</h3>
    </div>
    <div v-if="data.subtitle" class="pb-5 mx-3 headline font-weight-regular" v-html="data.subtitle"/>
    <template v-for="(item, i) in data.items" :key="i">
      <div class="pa-4">
        <div v-if="item.title" class="title font-weight-regular">
          {{ item.title }}
        </div>
        <div v-if="item.content"
             :style="{maxWidth: '700px', margin: 'auto', fontWeight: isWhiteSection ? '400' : '300'}"
             v-html="item.content"/>
      </div>
    </template>
    <slot/>
  </div>
</template>

<style scoped>

</style>
