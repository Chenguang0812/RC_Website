<template>
  <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
    <NavbarSection />
    <JoinSection />
  </div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import JoinSection from '@/components/Join/JoinUS.vue'

export default {
  name: 'JoinUS',
  components: {
    NavbarSection,
    JoinSection,
  },
}
</script>
