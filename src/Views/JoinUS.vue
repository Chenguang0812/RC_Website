<template>
    <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
      <Hero />
      <Navbar />
      <Sidebar />
      <Join />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import Hero from "@/components/Join/JoinHero.vue"
  import Join from "@/components/Join/Join.vue"
  
  export default {
    name: 'JoinUS',
    components: {
      Hero,
      Navbar,
      Sidebar,
      Join
     
    }
  }
  </script>