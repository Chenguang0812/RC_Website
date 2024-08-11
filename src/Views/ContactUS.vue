<template>
  <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
    <NavbarSection />
    <Contact />
  </div>
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import Contact from "@/components/ContactUS/ContactUS.vue";

export default {
  name: "CasePage",
  components: {
    NavbarSection,
    Contact,
  },
};
</script>
