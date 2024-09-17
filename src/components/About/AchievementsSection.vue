<template>
  <!-- 成就展示 用 ref 取 DOM -->
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
          class="bg-gradient-to-br from-[#E25353] to-[#E99797] dark:from-[#5553e2] dark:to-[#97a3e9] rounded-full w-40 h-40 mx-auto flex items-center justify-center mb-6 shadow-lg relative overflow-hidden"
        >
          <div class="achievement-circle" />
          <div class="text-5xl font-bold text-white relative z-10">
            <span>{{ achievement.currentValue }}</span
            >{{ achievement.suffix }}
          </div>
        </div>
        <div class="text-[#E25353] dark:text-[#ffffff] font-semibold text-xl">
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
        { id: 1, value: 6, suffix: "+", label: "行業經驗", currentValue: 0 },
        { id: 2, value: 1000, suffix: "+", label: "完成專案", currentValue: 0 },
        { id: 3, value: 1, suffix: "+", label: "累計觀看數", currentValue: 0 },
        { id: 4, value: 10, suffix: "+", label: "員工人數", currentValue: 0 },
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
    animateValue(achievement, duration) {
      const start = 0;
      const end = achievement.value;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        achievement.currentValue = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    },
    checkVisibility() {
      if (!this.$refs.achievementsSection) return;

      const rect = this.$refs.achievementsSection.getBoundingClientRect();
      const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isCurrentlyVisible && !this.isVisible) {
        this.isVisible = true;
        this.achievements.forEach((achievement) => {
          this.animateValue(achievement, Math.random() * 1500 + 1000);
        });
      } else if (!isCurrentlyVisible && this.isVisible) {
        this.isVisible = false;
        this.achievements.forEach((achievement) => {
          achievement.currentValue = 0;
        });
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

/* 懸停 */
.achievement-item:hover .rounded-full {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
