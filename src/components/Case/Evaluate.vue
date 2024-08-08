<template>
  <div class="bg-[#E99797] py-16 overflow-hidden relative">
    <div class="absolute inset-0 overflow-hidden">
      <div v-for="n in 50" :key="n" 
           class="absolute w-3 h-8 opacity-70 confetti"
           :class="randomConfettiColor()"
           :style="confettiStyle(n)">
      </div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center text-white mb-12 soft-glow">用戶評價</h2>
      <div class="relative w-full max-w-3xl mx-auto">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(review, index) in reviews" :key="index" class="w-full flex-shrink-0 px-4">
              <div class="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1">
                <div class="flex items-center mb-4">
                  <img :src="review.avatar" :alt="review.name" class="w-16 h-16 rounded-full mr-4 border-2 border-[#E25353] animate-bounce">
                  <div>
                    <h3 class="text-[#E25353] text-xl font-semibold">{{ review.name }}</h3>
                    <p class="text-gray-600">{{ review.title }}</p>
                  </div>
                </div>
                <p class="text-gray-800 italic mb-4">"{{ review.content }}"</p>
                <div class="flex justify-center">
                  <span v-for="star in 5" :key="star" 
                        class="text-yellow-400 text-2xl transform transition-all duration-300 hover:scale-125" 
                        :class="{ 'text-gray-300': star > review.rating }">★</span>
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
      currentIndex: 0,
      reviews: [
        { name: "林德豐", title: "畜生", avatar: "/小風.jpg", content: "RC Studio的老闆很坑，我才拖片20幾天就扣我薪水。", rating: 5 },
        { name: "林奕綸", title: "性平委員", avatar: "/綸弟.png", content: "雖然我被性平，但還是很喜歡RC Studio。", rating: 4 },
        { name: "蔡小姐", title: "啊啊啊", avatar: "/卡卡.png", content: "啊啊啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊！", rating: 5 },
      ],
      autoplayInterval: null
    }
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    this.stopAutoplay();
  },
  methods: {
    startAutoplay() {
      this.autoplayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoplay() {
      clearInterval(this.autoplayInterval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    confettiStyle(n) {
      return {
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 20 + 10}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${Math.random() * 3 + 5}s`
      };
    },
    randomConfettiColor() {
      const colors = ['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
}
</script>

<style scoped>
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

.soft-glow {
  text-shadow: 0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3);
}

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