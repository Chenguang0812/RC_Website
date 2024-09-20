<template>
  <NavbarSection />
  <div
    class="bg-gradient-to-br from-[#fc6d6d] to-[#ff9bac] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
  >
    <VideoSection />
    <Caseowners />
  </div>
  <EvaluateSection />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import VideoSection from "@/components/Case/VideoSection.vue";
import EvaluateSection from "@/components/Case/EvaluateSection.vue";
import Caseowners from "../components/Case/Caseowners.vue";

export default {
  name: "CasePage",
  components: {
    NavbarSection,
    EvaluateSection,
    VideoSection,
    Caseowners,
  },
};
</script>
