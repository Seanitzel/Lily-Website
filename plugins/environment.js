import { useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints({
  tablet: 640,
  laptop: 1024,
  desktop: 1280,
})

const isMobile = breakpoints.between('laptop', 'desktop')

export default defineNuxtPlugin(() => {
  return {
    provide: {
      screen: () => ({
        isMobile
      }),
    }
  }
})