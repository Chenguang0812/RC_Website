<template>
  <!-- <HomeView /> -->
  <!-- <RouterView /> -->
  <router-view />
  <AppFooter />
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppFooter,
  },
}
</script>
