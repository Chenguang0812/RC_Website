<template>
  <Hero />
  <Navbar />
  <AboutUS />
  <News />
  <ForkChannel />
  <ContactUS />
  <Sidebar />
</template>

<script>

import Navbar from "@/components/Navbar.vue"
import Sidebar from '@/components/Sidebar.vue'
import Hero from "@/components/Home/Hero.vue"
import AboutUS from "@/components/Home/AboutUS.vue"
import News from "@/components/Home/News.vue"
import ForkChannel from "@/components/Home/ForkChannel.vue"
import ContactUS from "@/components/Home/ContactUS.vue"

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
  },
  methods: {
    goToAbout() {
      this.$router.push('/')
    },
  },

}
</script>