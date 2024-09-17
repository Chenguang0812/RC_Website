<template>
  <div
    class="my-12 bg-white dark:bg-[#303030] py-16 rounded-lg shadow-xl overflow-hidden"
  >
    <h2 class="text-4xl font-bold mb-12 text-[#E25353] dark:text-[#5c67ff] text-center">
      我們的服務
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <div
        v-for="service in services"
        :key="service.id"
        class="bg-gradient-to-br from-[#E25353] to-[#E99797] dark:from-[#5c67ff] dark:to-[#9098ff] shadow-lg rounded-lg p-6 text-white flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl service-card"
      >
        <div
          class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 service-icon"
        >
          <img :src="service.icon" :alt="service.name" class="w-8 h-8" />
        </div>
        <h3 class="text-2xl font-bold mb-4">
          {{ service.name }}
        </h3>
        <p class="text-sm">
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesSection",
  data() {
    return {
      services: [
        {
          id: 1,
          name: "影音後製",
          description: "專業的影片剪輯服務，為您的作品賦予生命力。",
          icon: "/trim.webp",
        },
        {
          id: 2,
          name: "商業設計",
          description: "高品質的視覺設計，讓您的作品更具吸引力。",
          icon: "/magic-wand.webp",
        },
        {
          id: 3,
          name: "網紅經紀",
          description: "簽約及專業技能培訓，工商及代言等服務媒合。",
          icon: "/video.webp",
        },
      ],
    };
  },
  mounted() {
    this.addScrollAnimation();
  },
  methods: {
    addScrollAnimation() {
      const cards = document.querySelectorAll(".service-card");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            } else {
              entry.target.classList.remove("animate");
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach((card) => {
        observer.observe(card);
      });
    },
  },
};
</script>
