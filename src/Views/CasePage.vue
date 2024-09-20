<template>
  <div
    class="bg-gradient-to-br from-[#fc6d6d] to-[#FFC0CB] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
  >
    <NavbarSection />
    <VideoSection />
    <hr class="border-b-2 border-gray-600 mx-36" />
    <Caseowners />
    <hr class="border-b-2 border-gray-600 mx-36" />
    <EvaluateSection />
  </div>
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
