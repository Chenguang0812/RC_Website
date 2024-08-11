<template>
  <div class="bg-primary-white-100 dark:bg-primary-black-100 min-h-screen text-primary-white-100">
    <NavbarSection />
    <div class="container mx-auto px-4 py-8">
      <TimelineSection />
      <TeamMembers />
      <ServicesSection />
      <AchievementsSection />
    </div>
  </div>
</template>

<script>
import NavbarSection from '@/components/NavbarSection.vue'
import TimelineSection from '@/components/About/TimelineSection.vue'
import TeamMembers from '@/components/About/TeamMembers.vue'
import ServicesSection from '@/components/About/ServicesSection.vue'
import AchievementsSection from '@/components/About/AchievementsSection.vue'

export default {
  name: 'AboutPage',
  components: {
    NavbarSection,
    TimelineSection,
    TeamMembers,
    ServicesSection,
    AchievementsSection,
  }
}
</script>
