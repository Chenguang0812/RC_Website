<template>
    <div ref="achievementsSection" class="my-12 bg-white py-16 rounded-lg shadow-xl overflow-hidden">
      <h2 class="text-4xl font-bold mb-10 text-[#E25353] text-center">我們的成就</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        <div v-for="achievement in achievements" :key="achievement.id" 
             class="text-center achievement-item"
             :class="{ 'animate': isVisible }">
          <div class="bg-gradient-to-br from-[#E25353] to-[#E99797] rounded-full w-40 h-40 mx-auto flex items-center justify-center mb-6 shadow-lg relative overflow-hidden">
            <div class="achievement-circle"></div>
            <div class="text-5xl font-bold text-white relative z-10">
              <span>{{ achievement.currentValue }}</span>{{ achievement.suffix }}
            </div>
          </div>
          <div class="text-[#E25353] font-semibold text-xl">{{ achievement.label }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  export default {
    name: 'Achievements',
    setup() {
      const achievementsSection = ref(null)
      const isVisible = ref(false)
      const achievements = ref([
        { id: 1, value: 500, suffix: '+', label: '完成專案', currentValue: 0 },
        { id: 2, value: 3, suffix: '+', label: '行業經驗', currentValue: 0 },
        { id: 3, value: 50, suffix: '+', label: '長期客戶', currentValue: 0 },
        { id: 4, value: 10, suffix: '+', label: '員工人數', currentValue: 0 }
      ])
  
      const animateValue = (achievement, duration) => {
        const start = 0
        const end = achievement.value
        const range = end - start
        const increment = end > start ? 1 : -1
        const stepTime = Math.abs(Math.floor(duration / range))
        let current = start
  
        const timer = setInterval(() => {
          current += increment
          achievement.currentValue = current
          if (current === end) {
            clearInterval(timer)
          }
        }, stepTime)
      }
  
      const checkVisibility = () => {
        if (!achievementsSection.value) return
  
        const rect = achievementsSection.value.getBoundingClientRect()
        const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom >= 0
  
        if (isCurrentlyVisible && !isVisible.value) {
          isVisible.value = true
          achievements.value.forEach((achievement) => {
            animateValue(achievement, Math.random() * 1500 + 1000)
          })
        } else if (!isCurrentlyVisible && isVisible.value) {
          isVisible.value = false
          achievements.value.forEach(achievement => {
            achievement.currentValue = 0
          })
        }
      }
  
      onMounted(() => {
        window.addEventListener('scroll', checkVisibility)
        checkVisibility()
      })
  
      onUnmounted(() => {
        window.removeEventListener('scroll', checkVisibility)
      })
  
      return {
        achievements,
        achievementsSection,
        isVisible
      }
    }
  }
  </script>
  
  <style scoped>
  @keyframes circleAnimation {
    0% {
      clip-path: circle(0% at 50% 50%);
    }
    100% {
      clip-path: circle(100% at 50% 50%);
    }
  }
  
  .achievement-circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    animation: circleAnimation 1.5s ease-out forwards;
  }
  
  .achievement-item {
    transform: translateY(50px);
    opacity: 0;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .achievement-item.animate {
    transform: translateY(0);
    opacity: 1;
  }
  
  .achievement-item:nth-child(1) { transition-delay: 0.1s; }
  .achievement-item:nth-child(2) { transition-delay: 0.2s; }
  .achievement-item:nth-child(3) { transition-delay: 0.3s; }
  .achievement-item:nth-child(4) { transition-delay: 0.4s; }
  
  .achievement-item:hover .rounded-full {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
  </style>