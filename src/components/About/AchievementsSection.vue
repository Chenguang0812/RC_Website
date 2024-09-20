<template>
  <div
    ref="achievementsSection"
    class="my-12 bg-white dark:bg-[#303030] py-16 rounded-lg shadow-xl overflow-hidden"
  >
    <h2 class="text-4xl font-bold mb-10 text-[#E25353] dark:text-[#5c67ff] text-center">
      我們的成就
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      <div
        v-for="achievement in achievements"
        :key="achievement.id"
        class="text-center achievement-item"
        :class="{ animate: isVisible }"
      >
        <div
          class="bg-gradient-to-br from-[#E25353] to-[#E99797] dark:from-[#5553e2] dark:to-[#97a3e9] rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4 shadow-lg relative overflow-hidden"
        >
          <div class="achievement-circle" />
          <div class="text-white relative z-10 text-3xl font-bold">
            {{ achievement.value }}
          </div>
        </div>
        <div class="text-[#E25353] dark:text-[#ffffff] font-semibold text-xl mt-2">
          {{ achievement.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementsSection",
  data() {
    return {
      isVisible: false,
      achievements: [
        { id: 1, label: "行業經驗", value: "6年+" },
        { id: 2, label: "完成專案", value: "1000+" },
        { id: 3, label: "累計觀看數", value: "破億次" },
        { id: 4, label: "員工人數", value: "10+" },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkVisibility);
    this.checkVisibility();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
  },
  methods: {
    checkVisibility() {
      if (!this.$refs.achievementsSection) return;

      const rect = this.$refs.achievementsSection.getBoundingClientRect();
      const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isCurrentlyVisible && !this.isVisible) {
        this.isVisible = true;
      } else if (!isCurrentlyVisible && this.isVisible) {
        this.isVisible = false;
      }
    },
  },
};
</script>

<style scoped>
/* 圓圈動畫 */
@keyframes circleAnimation {
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
  }
}

/* 圓圈樣式及動畫 */
.achievement-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  animation: circleAnimation 1.5s ease-out forwards;
}

.achievement-item {
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.achievement-item.animate {
  transform: translateY(0);
  opacity: 1;
}

/* 階梯效果 */
.achievement-item:nth-child(1) {
  transition-delay: 0.1s;
}
.achievement-item:nth-child(2) {
  transition-delay: 0.2s;
}
.achievement-item:nth-child(3) {
  transition-delay: 0.3s;
}
.achievement-item:nth-child(4) {
  transition-delay: 0.4s;
}

/* 懸停效果 */
.achievement-item:hover .rounded-full {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
