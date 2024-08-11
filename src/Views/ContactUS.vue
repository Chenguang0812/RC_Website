<template>
  <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
    <NavbarSection />
    <Contact />
  </div>
  <div />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import Contact from "@/components/ContactUS/Contact.vue";

export default {
  name: "Contact",
  components: {
    NavbarSection,
    Contact,
  },
};
</script>
