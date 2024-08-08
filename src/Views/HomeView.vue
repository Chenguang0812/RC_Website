<template>
  <Hero />
  <Navbar />
  <AboutUS />
  <News />
  <ForkChannel />
  <ContactUS />
  <Footer />
  <Sidebar />
</template>

<script>

import Navbar from "@/components/Navbar.vue"
import Sidebar from '@/components//Sidebar.vue'
import Hero from "@/components/Hero.vue"
import AboutUS from "@/components/AboutUS.vue"
import News from "@/components/News.vue"
import ForkChannel from "@/components/ForkChannel.vue"
import ContactUS from "@/components/ContactUS.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar,
    Hero,
    AboutUS,
    News,
    ForkChannel,
    ContactUS,
    Footer
  },
  methods: {
    goToAbout() {
      this.$router.push('/')
    },
  },

}
</script>