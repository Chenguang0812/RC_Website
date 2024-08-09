<template>
  <NavbarSection />
  <router-view />
</template>
<script>
import NavbarSection from "@/components/NavbarSection.vue"
export default {
  name: 'NewsPage',
  components: {
    NavbarSection
  }
}
</script>