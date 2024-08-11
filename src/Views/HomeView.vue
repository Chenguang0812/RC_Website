<template>
  <NavbarSection />
  <HeroSection />
  <AboutUS />
  <NewsSection />
  <ForkChannel />
  <ContactUS />
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
import AboutUS from '@/components/Home/AboutUS.vue'
import NewsSection from '@/components/Home/NewsSection.vue'
import ForkChannel from '@/components/Home/ForkChannel.vue'
import ContactUS from '@/components/Home/ContactUS.vue'

export default {
  name: 'HomePage',
  components: {
    NavbarSection,
    HeroSection,
    AboutUS,
    NewsSection,
    ForkChannel,
    ContactUS,
  },
  methods: {
    goToAbout() {
      this.$router.push('/')
    },
  },
}
</script>
