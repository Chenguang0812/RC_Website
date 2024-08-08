<template>
    <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
      <Hero />
      <Navbar />
      <Sidebar />
      <div class="container mx-auto px-4 py-8">

        <Timeline />
        <TeamMembers />
        <Services />
        <Achievements />

      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Timeline from '@/components/About/Timeline.vue'
  import TeamMembers from '@/components/About/TeamMembers.vue'
  import Services from '@/components/About/Services.vue'
  import Achievements from '@/components/About/Achievements.vue'
  import Hero from "@/components/About/AboutHero.vue"
  
  export default {
    name: 'About',
    components: {
      Hero,
      Navbar,
      Sidebar,
      Timeline,
      TeamMembers,
      Services,
      Achievements,
    }
  }
  </script>