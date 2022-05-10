<script setup>
import bgImage from '../assets/lily_bg.jpeg'
import lilyPage from '../content/lily.json'
import { useBreakpoints } from '@vueuse/core'

const { content, meta } = lilyPage;

const breakpoints = useBreakpoints({
  mobile: 880,
  laptop: 1024,
  desktop: 1280,
})

const isMobile = breakpoints.smaller('mobile')
const isMounted = ref(false);
const containerEl = ref();

onMounted(() => {
  isMounted.value = true;
  updateBg();
})

watch(isMobile, () => {
  if(isMounted.value) {
    updateBg();
  }
})

const updateBg = () => {
  if(isMobile.value) {
    containerEl.value.style.backgroundImage = ``
    containerEl.value.style.backgroundColor = '#2C2B30';
  } else {
    containerEl.value.style.backgroundImage = `url(${bgImage})`
    containerEl.value.style.backgroundRepeat = `no-repeat`
    containerEl.value.style.backgroundSize = `cover`
    containerEl.value.style.backgroundPosition = `center`
    containerEl.value.style.backgroundPositionX = `60%`
  }
}
</script>

<template>
  <div class="page-container-desktop" ref="containerEl">

    <Head>
      <Title>{{ meta.title }}</Title>
      <Meta name="keywords" :content="meta.keywords" />
      <Meta name="description" :content="meta.description" />
    </Head>
    <img v-if="isMobile" :src="bgImage" class="bg-image" />
    <div class="title">
      <h1>
        לילי
        <br v-if="!isMobile" />
        רוזנר
      </h1>
    </div>
    <div class="content">
      <ContentSection v-for="sectionContent in content" :key="sectionContent.title" :content="sectionContent" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-container-desktop {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: auto;
  color: white;
  text-align: right;
  background-color: black;

  @media screen and (min-width: 880px) {
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-position-x: 80%;
  }
}

.bg-image {
  width: 100%;
  height: auto;
}

.title {
  padding: 100px;

  @media screen and (max-width: 880px) {
    padding: 50px;
  }
}

h1 {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 880px) {
    font-size: 5rem;
  }
}

.content {
  padding-right: 100px;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 880px) {
    background-color: transparent;
    padding-right: 50px;
  }
}
</style>