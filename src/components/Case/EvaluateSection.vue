<template>
  <!-- 主容器：設置背景色、內邊距和相對定位 -->
  <div class="bg-[#E99797] py-16 overflow-hidden relative">
    <!-- 彩色紙屑背景容器 -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- 生成50個彩色紙屑 -->
      <div
        v-for="n in 50"
        :key="n"
        class="absolute w-3 h-8 opacity-70 confetti"
        :class="randomConfettiColor()"
        :style="confettiStyle(n)"
      />
    </div>
    <!-- 內容容器 -->
    <div class="container mx-auto px-4 relative z-10">
      <!-- 標題 -->
      <h2 class="text-4xl font-bold text-center text-white mb-12 soft-glow">
        用戶評價
      </h2>
      <!-- 評價輪播容器 -->
      <div class="relative w-full max-w-3xl mx-auto">
        <div class="overflow-hidden">
          <!-- 評價卡片容器：使用 flex 和 transform 實現輪播效果 -->
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <!-- 遍歷評價數據生成評價卡片 -->
            <div
              v-for="(review, index) in reviews"
              :key="index"
              class="w-full flex-shrink-0 px-4"
            >
              <!-- 評價卡片 -->
              <div
                class="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1"
              >
                <!-- 用戶信息部分 -->
                <div class="flex items-center mb-4">
                  <!-- 用戶頭像 -->
                  <img
                    :src="review.avatar"
                    :alt="review.name"
                    class="w-16 h-16 rounded-full mr-4 border-2 border-[#E25353] animate-bounce"
                  />
                  <div>
                    <!-- 用戶名稱 -->
                    <h3 class="text-[#E25353] text-xl font-semibold">
                      {{ review.name }}
                    </h3>
                    <!-- 用戶頭銜 -->
                    <p class="text-gray-600">
                      {{ review.title }}
                    </p>
                  </div>
                </div>
                <!-- 評價內容 -->
                <p class="text-gray-800 italic mb-4">"{{ review.content }}"</p>
                <!-- 評分星星 -->
                <div class="flex justify-center">
                  <span
                    v-for="star in 5"
                    :key="star"
                    class="text-yellow-400 text-2xl transform transition-all duration-300 hover:scale-125"
                    :class="{ 'text-gray-300': star > review.rating }"
                    >★</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 當前顯示的評價索引
      currentIndex: 0,
      // 評價數據數組
      reviews: [
        {
          name: '林德豐',
          title: '畜生',
          avatar: '/小風.jpg',
          content: 'RC Studio的老闆很坑，我才拖片20幾天就扣我薪水。',
          rating: 5,
        },
        {
          name: '林奕綸',
          title: '性平委員',
          avatar: '/綸弟.png',
          content: '雖然我被性平，但還是很喜歡RC Studio。',
          rating: 4,
        },
        {
          name: '蔡小姐',
          title: '啊啊啊',
          avatar: '/卡卡.png',
          content: '啊啊啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊！',
          rating: 5,
        },
      ],
      // 自動播放定時器
      autoplayInterval: null,
    }
  },
  mounted() {
    // 組件掛載後啟動自動播放
    this.startAutoplay()
  },
  beforeUnmount() {
    // 組件卸載前停止自動播放
    this.stopAutoplay()
  },
  methods: {
    // 開始自動播放
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    // 停止自動播放
    stopAutoplay() {
      clearInterval(this.autoplayInterval)
    },
    // 切換到下一張幻燈片
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length
    },
    // 生成彩色紙屑的樣式
    confettiStyle(n) {
      return {
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 20 + 10}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 5}s`,
      }
    },
    // 隨機選擇彩色紙屑的顏色
    randomConfettiColor() {
      const colors = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-purple-500',
        'bg-pink-500',
      ]
      return colors[Math.floor(Math.random() * colors.length)]
    },
  },
}
</script>

<style scoped>
/* 彩色紙屑的動畫 */
.confetti {
  animation: confettiFall linear infinite;
}

@keyframes confettiFall {
  0% {
    transform: translateY(-10px) rotate(0deg);
  }

  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}

/* 標題的柔和發光效果 */
.soft-glow {
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.3);
}

/* 三種不同形狀的彩色紙屑 */
.confetti:nth-child(3n) {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.confetti:nth-child(3n + 1) {
  clip-path: circle(50% at 50% 50%);
}

.confetti:nth-child(3n + 2) {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}
</style>
