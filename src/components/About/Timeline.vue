<template>
  <div class="my-12 p-8 bg-white">
    <h2 class="text-4xl font-bold mb-16 text-[#E25353] text-center">關於我們</h2>
    <div class="relative timeline-wrapper" ref="timelineWrapper">
      <!-- 菱形起始点 -->
      <div class="absolute left-1/2 transform -translate-x-1/2 -top-8 w-8 h-8 bg-[#E25353] rotate-45"></div>
      
      <!-- 中心线 -->
      <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-[#E99797] timeline-center-line"></div>
      
      <div class="timeline-container">
        <div v-for="(event, index) in timeline" :key="index"
             class="timeline-item mb-16 flex"
             :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
          <div class="w-5/12 py-4"
               :class="[
                 index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left',
                 'transform transition-all duration-1000 ease-in-out',
                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
               ]">
            <h3 class="text-3xl font-bold mb-2 text-[#E25353]">{{ event.date }}</h3>
            <p class="text-xl text-gray-600">{{ event.description }}</p>
          </div>
          <div class="w-2/12 flex justify-center items-center relative">
            <div class="w-4 h-4 rounded-full bg-[#E25353] border-4 border-white shadow-lg z-10"></div>
            <div class="absolute top-1/2 w-[41.666667%] h-0.5 bg-[#E99797] timeline-connect-line"
                 :class="index % 2 === 0 ? 'right-1/2' : 'left-1/2'"></div>
          </div>
          <div class="w-5/12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedTimeline',
  data() {
    return {
      // 時間線數據
      timeline: [
        { date: '企業理念', description: '用創意打造新媒體高峰，為每位客戶創造獨一無二的影片品質' },
        { date: '經營理念', description: '精益求精，貫徹責任。遇到挑戰愈發堅強精神，遵守時間觀念，獲得顧客之信賴' },
        { date: '誠信正直', description: '真誠對待每位員工、客戶。我們只負責的，只做對的事。誠中同業者，公平且合理的競爭' },
        { date: '創意影片交給專業', description: '維持品質是基本，創意是專業的堅持' },
        { date: '與客戶友善溝通', description: '客戶是我們的夥伴，維護與客戶的良好關係，是互相成長的關鍵' }
      ],
      isVisible: false
    }
  },
  mounted() {
    // 添加滾動事件監聽器
    window.addEventListener('scroll', this.checkVisibility)
    this.checkVisibility()
  },
  beforeUnmount() {
    // 移除滾動事件監聽器
    window.removeEventListener('scroll', this.checkVisibility)
  },
  methods: {
    // 檢查時間線是否在視窗中可見
    checkVisibility() {
      const element = this.$refs.timelineWrapper
      if (element) {
        const rect = element.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          this.isVisible = true
          element.classList.add('animate')
        } else {
          this.isVisible = false
          element.classList.remove('animate')
        }
      }
    }
  }
}
</script>

<style scoped>
/* 時間線容器最小高度 */
.timeline-wrapper {
  @apply min-h-[500px];
}

/* 中心線動畫 */
.timeline-center-line {
  @apply h-0 transition-[height] duration-[2s] ease-out;
}

/* 連接線動畫 */
.timeline-connect-line {
  @apply w-0 transition-[width] duration-[1s] ease-out delay-[1.5s];
}

/* 時間線項目動畫 */
.timeline-item {
  @apply opacity-0 translate-y-5 transition-[opacity,transform] duration-500 ease-out delay-[2s];
}

/* 動畫觸發後的樣式 */
.timeline-wrapper.animate .timeline-center-line {
  @apply h-full;
}

.timeline-wrapper.animate .timeline-connect-line {
  @apply w-[41.666667%];
}

.timeline-wrapper.animate .timeline-item {
  @apply opacity-100 translate-y-0;
}

/* 各項目的延遲時間 */
.timeline-wrapper.animate .timeline-item:nth-child(2) { @apply delay-[2.2s]; }
.timeline-wrapper.animate .timeline-item:nth-child(3) { @apply delay-[2.4s]; }
.timeline-wrapper.animate .timeline-item:nth-child(4) { @apply delay-[2.6s]; }
.timeline-wrapper.animate .timeline-item:nth-child(5) { @apply delay-[2.8s]; }
</style>