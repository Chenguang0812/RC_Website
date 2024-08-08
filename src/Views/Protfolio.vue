<template>
    <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
      <Hero />
      <Navbar />
      <Sidebar />


      </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Hero from "@/components/Protfolio/ProtfolioHero.vue"
  
  export default {
    name: 'About',
    components: {
      Hero,
      Navbar,
      Sidebar,
    }
  }
  </script>