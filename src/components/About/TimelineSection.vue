<template>
  <div class="my-12 p-4 sm:p-8 bg-white dark:bg-[#303030]">
    <h2
      class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-16 text-[#E25353] dark:text-[#5c67ff] text-center"
    >
      關於我們
    </h2>

    <!-- 桌面時間線 -->
    <div class="hidden sm:block">
      <div ref="desktopTimelineWrapper" class="relative timeline-wrapper">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#E99797] dark:bg-[#5c67ff] timeline-center-line h-full"
        ></div>

        <div class="timeline-container">
          <div
            v-for="(event, index) in timeline"
            :key="index"
            class="timeline-item mb-16 flex"
            :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
          >
            <div
              class="w-5/12 py-4"
              :class="[index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left']"
            >
              <h3 class="text-3xl font-bold mb-2 text-[#E25353] dark:text-[#5c67ff]">
                {{ event.date }}
              </h3>
              <p
                v-for="(line, lineIndex) in event.description"
                :key="lineIndex"
                class="text-xl text-gray-600 dark:text-[#E0E0E0]"
              >
                {{ line }}
              </p>
            </div>
            <div class="w-2/12 flex justify-center items-center relative">
              <div
                class="absolute top-1/2 w-[41.666667%] h-0.5 bg-[#E99797] dark:bg-[#5c67ff] timeline-connect-line"
                :class="index % 2 === 0 ? 'right-1/2' : 'left-1/2'"
              ></div>
              <div
                class="w-2.5 h-2.5 rounded-full bg-[#E25353] dark:bg-[#5c67ff] relative"
              ></div>
            </div>
            <div class="w-5/12"></div>
          </div>
        </div>

        <!-- 菱形 -->
        <div
          class="absolute left-1/2 transform -translate-x-1/2 -top-8 w-8 h-8 bg-[#E25353] dark:bg-[#5c67ff] rotate-45"
        ></div>
      </div>
    </div>

    <!-- 手機版時間線 -->
    <div class="sm:hidden">
      <div ref="mobileTimelineWrapper" class="timeline-container relative">
        <div
          class="diamond absolute left-0 top-0 w-6 h-6 bg-[#E25353] dark:bg-[#5c67ff] rotate-45 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          class="timeline-line absolute left-0 top-0 bottom-0 w-px bg-[#E25353] dark:bg-[#5c67ff]"
        ></div>
        <div class="timeline-items space-y-8">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="timeline-item relative pl-8 transform transition-all duration-500 ease-out"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
            :style="{ transitionDelay: `${index * 200}ms` }"
          >
            <div class="timeline-content">
              <h3 class="text-xl font-bold text-[#ca4040] dark:text-[#5c67ff] mb-2">
                {{ item.date }}
              </h3>
              <p
                v-for="(line, lineIndex) in item.description"
                :key="lineIndex"
                class="text-gray-600 dark:text-[#E0E0E0]"
              >
                {{ line }}
              </p>
            </div>
            <div
              class="timeline-marker absolute left-0 top-0 w-4 h-px bg-[#E25353] dark:bg-[#5c67ff]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveTimeline",
  data() {
    return {
      timeline: [
        {
          date: "企業理念",
          description: ["用創意打造媒體新高峰", "為每位客戶創造獨一無二的影片品質"],
        },
        {
          date: "經營理念",
          description: [
            "精益求精，貫徹責任",
            "遇到挑戰愈發堅強精神",
            "遵守時間觀念，獲得顧客之信賴",
          ],
        },
        {
          date: "正直誠信",
          description: [
            "我們始終堅持誠實與信任",
            "真誠地對待每位員工和客戶",
            "並且說到做到，確保言行一致",
          ],
        },
        {
          date: "創意影片交給專業",
          description: ["維持品質是基本", "創意是專業的堅持"],
        },
        {
          date: "與客戶友善溝通",
          description: ["客戶是我們的夥伴", "維護雙方良好的關係", "是互相成長的重要關鍵"],
        },
      ],
      isVisible: false,
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
      const element =
        window.innerWidth >= 640
          ? this.$refs.desktopTimelineWrapper
          : this.$refs.mobileTimelineWrapper;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          this.isVisible = true;
          element.classList.add("animate");
        } else {
          this.isVisible = false;
          element.classList.remove("animate");
        }
      }
    },
  },
};
</script>

<style scoped>
.timeline-wrapper {
  @apply min-h-[500px];
}

.timeline-center-line {
  @apply transition-[height] duration-[2s] ease-out;
}

.timeline-connect-line {
  @apply w-0 transition-[width] duration-[1s] ease-out;
}

@media (min-width: 1024px) {
  .timeline-item {
    @apply opacity-0 translate-y-5 transition-all duration-500 ease-out;
  }
}

.timeline-wrapper.animate .timeline-center-line {
  @apply h-full;
}

.timeline-wrapper.animate .timeline-connect-line {
  @apply w-[41.666667%];
}

.timeline-wrapper.animate .timeline-item {
  @apply opacity-100 translate-y-0;
}

.timeline-wrapper.animate .timeline-item:nth-child(1) {
  transition-delay: 0.5s;
}

.timeline-wrapper.animate .timeline-item:nth-child(2) {
  transition-delay: 0.7s;
}

.timeline-wrapper.animate .timeline-item:nth-child(3) {
  transition-delay: 0.9s;
}

.timeline-wrapper.animate .timeline-item:nth-child(4) {
  transition-delay: 1.1s;
}

.timeline-wrapper.animate .timeline-item:nth-child(5) {
  transition-delay: 1.3s;
}

@media (max-width: 639px) {
  .timeline-container {
    padding-left: 20px;
  }

  .timeline-item {
    position: relative;
  }

  .timeline-marker {
    transform: translateY(0.9em);
  }

  .timeline-line {
    @apply h-0 transition-[height] duration-[2s] ease-out;
  }

  .timeline-container.animate .timeline-line {
    @apply h-full;
  }
}
</style>
