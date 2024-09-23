<template>
  <div class="bg-primary-white-100 dark:bg-[#303030] min-h-screen text-primary-white-100">
    <NavbarSection />
    <div class="container mx-auto px-4 py-8">
      <TimelineSection />
      <ForkChannel />
      <ServicesSection />
      <AchievementsSection />
    </div>
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import TimelineSection from "@/components/About/TimelineSection.vue";
import ServicesSection from "@/components/About/ServicesSection.vue";
import AchievementsSection from "@/components/About/AchievementsSection.vue";
import ForkChannel from "@/components/About/ForkChannel.vue";

export default {
  name: "AboutPage",
  components: {
    NavbarSection,
    TimelineSection,
    ServicesSection,
    AchievementsSection,
    ForkChannel,
  },
};
</script>
