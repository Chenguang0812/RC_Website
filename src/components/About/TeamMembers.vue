<template>
  <div class="my-12 p-8 bg-white rounded-3xl shadow-2xl overflow-hidden relative">
    <!-- 背景动画元素 -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#E25353] to-[#E99797] opacity-10 animate-wave"></div>
    
    <!-- 标题 -->
    <h2 class="text-4xl font-bold mb-10 text-[#E25353] text-center relative z-10">我們的團隊</h2>
    
    <!-- 团队成员卡片 -->
    <div class="flex flex-wrap justify-center gap-8 relative z-10">
      <div v-for="member in teamMembers" :key="member.id" 
           class="w-80 bg-white rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-2"
           :class="{ 'animate-slideIn': member.isVisible }"
           :ref="el => { if (el) memberRefs[member.id] = el }">
        <!-- 成员图片 -->
        <div class="w-full h-80 flex items-center justify-center mb-6 overflow-hidden rounded-lg">
          <img :src="member.image" :alt="member.name" class="object-cover h-full w-full transition duration-500 hover:scale-110">
        </div>
        <!-- 成员姓名 -->
        <h3 class="text-2xl font-bold mb-2 text-[#E25353]">{{ member.name }}</h3>
        <!-- 成员职位 -->
        <p class="text-lg text-[#E99797]">{{ member.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'TeamMembers',
  setup() {
    const teamMembers = ref([
      { id: 1, name: '亦凌YiLing', position: '頂級老闆', image: '/10.png', isVisible: false },
      { id: 2, name: '卡卡滋Kazi', position: '老闆女友', image: '/卡卡.png', isVisible: false },
      { id: 3, name: '晨光Chenguang', position: '無心+薪勞工', image: '/柯文哲.jpg', isVisible: false }
    ])

    const memberRefs = {}

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    let observer

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        const memberId = parseInt(entry.target.getAttribute('data-member-id'))
        const member = teamMembers.value.find(m => m.id === memberId)
        if (entry.isIntersecting) {
          member.isVisible = true
          // 重置动画
          entry.target.style.animation = 'none'
          entry.target.offsetHeight // 触发重排
          entry.target.style.animation = null
        } else {
          member.isVisible = false
        }
      })
    }

    onMounted(() => {
      observer = new IntersectionObserver(handleIntersect, observerOptions)
      teamMembers.value.forEach(member => {
        if (memberRefs[member.id]) {
          memberRefs[member.id].setAttribute('data-member-id', member.id)
          observer.observe(memberRefs[member.id])
        }
      })
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      teamMembers,
      memberRefs
    }
  }
}
</script>
  
<style scoped>
@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-wave {
  animation: wave 10s ease-in-out infinite;
}

@keyframes slideIn {
  from { 
    transform: translateY(50px) rotate(-5deg); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0) rotate(0deg); 
    opacity: 1; 
  }
}

.animate-slideIn {
  animation: slideIn 0.8s ease-out forwards;
}
</style>