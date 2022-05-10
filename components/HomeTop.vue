<script setup>
import { scrollTo } from '../utilities/scrollToFunctions'

defineProps({
  data: Object,
})
</script>

<template>
  <div
    class="text-center white--text pt-12"
    :style="{ minHeight: '90vh', minWidth: '100vw' }">
    <div class="flex-column pt-12">
      <div
        :class="`pt-12 pb-8 text-${
          !$screen.isMobile ? 'h4' : 'h5'
        } font-weight-medium`"
        v-html="data.title"/>
      <div
        :class="`text-${
          !$screen.isMobile ? 'h5' : 'h6'
        } font-weight-regular`"
        v-html="data.subheading"/>
      <div
        :class="`text-${
          !$screen.isMobile ? 'h6' : 'subtitle-1'
        } font-weight-light`"
        v-html="data.description"/>
      <div>
        <button
          color="success darken-3"
          class="font-weight-regular text-none"
          aria-label="read more"
          @click="scrollTo(data.firstBtnTargetID)">
          <span v-html="data.firstBtn"/>
        </button>
      </div>
      <div>
        <button
          color="blue darken-4"
          class="font-weight-regular text-none"
          aria-label="read more"
          @click="scrollTo(data.secondBtnTargetID)">
          <span v-html="data.secondBtn"/>
        </button>
      </div>
      <div>
        <button
          outlined
          class="font-weight-regular text-none"
          color="white"
          aria-label="Looking for funding"
          @click="scrollTo(data.thirdBtnTargetID)">
          <span v-html="data.thirdBtn"/>
        </button>
      </div>
    </div>
  </div>
</template>
