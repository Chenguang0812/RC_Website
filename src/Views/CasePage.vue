<template>
  <div class="bg-[#E3E3E3] text-[#FFFFFF]">
    <NavbarSection />
    <VideoSection />
    <EvaluateSection />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import VideoSection from "@/components/Case/VideoSection.vue";
import EvaluateSection from "@/components/Case/EvaluateSection.vue";

export default {
  name: "CasePage",
  components: {
    NavbarSection,
    EvaluateSection,
    VideoSection,
  },
};
</script>
