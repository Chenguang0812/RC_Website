<template>
  <NavbarSection />
  <HeroSection />
  <AboutUS />
  <NewsSection />
  <Process />
  <ForkChannel />
  <ContactUS />
</template>

<script>
import NavbarSection from "@/components/NavbarSection.vue";
import HeroSection from "@/components/Home/HeroSection.vue";
import AboutUS from "@/components/Home/AboutUS.vue";
import NewsSection from "@/components/Home/NewsSection.vue";

import ContactUS from "@/components/Home/ContactUS.vue";
import Process from "@/components/Home/Process.vue";

export default {
  name: "HomePage",
  components: {
    NavbarSection,
    HeroSection,
    AboutUS,
    NewsSection,
    ContactUS,
    Process,
  },
  methods: {
    goToAbout() {
      this.$router.push("/");
    },
  },
};
</script>
