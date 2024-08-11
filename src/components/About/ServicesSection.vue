<template>
  <div></div>
  <!-- 主容器：設置整體布局和樣式 -->
  <div class="my-12 bg-white py-16 rounded-lg shadow-xl overflow-hidden">
    <!-- 標題：顯示 "我們的服務" -->
    <h2 class="text-4xl font-bold mb-12 text-[#E25353] text-center">我們的服務</h2>
    <!-- 服務卡片網格：根據屏幕大小調整列數 -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
      <!-- 服務卡片：使用 v-for 遍歷 services 數組 -->
      <div
        v-for="service in services"
        :key="service.id"
        class="bg-gradient-to-br from-[#E25353] to-[#E99797] shadow-lg rounded-lg p-6 text-white flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl service-card"
      >
        <!-- 服務圖標容器 -->
        <div
          class="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 service-icon"
        >
          <!-- 服務圖標 -->
          <img :src="service.icon" :alt="service.name" class="w-8 h-8" />
        </div>
        <!-- 文字 -->
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
          name: "影片剪輯",
          description: "專業的影片剪輯服務，為您的作品賦予生命力。",
          icon: "/trim.png",
        },
        {
          id: 2,
          name: "特效製作",
          description: "高品質的視覺特效，讓您的影片更具吸引力。",
          icon: "/magic-wand.png",
        },
        {
          id: 3,
          name: "後期製作",
          description: "全方位的後期製作服務，為您的專案錦上添花。",
          icon: "/video.png",
        },
      ],
    };
  },
  mounted() {
    // 組件掛載後添加滾動動畫
    this.addScrollAnimation();
  },
  methods: {
    // 添加滾動動畫方法
    addScrollAnimation() {
      // 選擇所有服務卡片元素
      const cards = document.querySelectorAll(".service-card");
      // 創建 Intersection Observer 實例
      const observer = new IntersectionObserver(
        (entries) => {
          // 遍歷每個觀察的元素
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // 當卡片進入視窗時，添加動畫類
              entry.target.classList.add("animate");
            } else {
              // 當卡片離開視窗時，移除動畫類
              entry.target.classList.remove("animate");
            }
          });
        },
        { threshold: 0.1 }
      ); // 設置觸發閾值為 10% 可見

      // 對每個卡片添加觀察
      cards.forEach((card) => {
        observer.observe(card);
      });
    },
  },
};
</script>

<style scoped>
/* 定義浮動動畫 */
@keyframes floatAnimation {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* 服務卡片初始樣式 */
.service-card {
  opacity: 0;
  transform: scale(0.9) rotate(-5deg);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 服務卡片動畫後樣式 */
.service-card.animate {
  opacity: 1;
  transform: scale(1) rotate(0);
}

/* 服務圖標浮動動畫 */
.service-icon {
  animation: floatAnimation 3s ease-in-out infinite;
}

/* 滑鼠懸停時暫停圖標動畫 */
.service-card:hover .service-icon {
  animation-play-state: paused;
}

/* 設置每個卡片的動畫延遲，創造階梯效果 */
.service-card:nth-child(1) {
  transition-delay: 0.1s;
}

.service-card:nth-child(2) {
  transition-delay: 0.2s;
}

.service-card:nth-child(3) {
  transition-delay: 0.3s;
}
</style>
