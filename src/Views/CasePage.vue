<template>
  <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
    <HeroSection />
    <NavbarSection />
    <SidebarSection />
    <VideoSection />
    <EvaluateSection />
  </div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import SidebarSection from '@/components/SidebarSection.vue'
import HeroSection from "@/components/Case/CaseHero.vue"
import VideoSection from "@/components/Case/VideoSection.vue"
import EvaluateSection from "@/components/Case/EvaluateSection.vue"

export default {
  name: 'CasePage',
  components: {
    HeroSection,
    NavbarSection,
    SidebarSection,
    EvaluateSection,
    VideoSection,
  }
}
</script>
