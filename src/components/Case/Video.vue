<template>
  <div 
    class="bg-gradient-to-br from-[#E25353] via-[#E99797] to-[#FFC0CB] py-16 overflow-hidden relative"
    @mousemove="handleMouseMove"
    ref="container"
  >
    <!-- Floating Elements -->
    <div 
      v-for="(particle, index) in particles" 
      :key="index"
      class="absolute text-2xl transition-all duration-1000 ease-out"
      :style="getParticleStyle(particle)"
    >
      {{ particle.icon }}
    </div>
    
    <h2 class="text-4xl font-bold text-center text-white mb-12 relative z-10 animate-glitch" data-text="影視專欄">影視專欄</h2>
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <div v-for="(video, index) in videos" :key="index" 
             class="video-card transform transition duration-300 hover:rotate-2 hover:-translate-y-2">
          <div class="rounded-lg shadow-lg bg-white max-w-sm overflow-hidden group">
            <div class="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe class="absolute top-0 left-0 w-full h-full"
                      :src="video.link"
                      title="YouTube video player" 
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen>
              </iframe>
              <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i class="fas fa-play text-white text-4xl animate-pulse"></i>
              </div>
            </div>
            <div class="p-6 transform group-hover:translate-y-[-10px] transition-transform duration-300">
              <h5 class="text-[#E25353] text-xl font-semibold mb-2 hover:text-[#E99797] transition-colors duration-300">{{ video.title }}</h5>
              <p class="text-gray-700 text-base mb-4">{{ video.Description }}</p>
              <a class="inline-block px-6 py-2.5 bg-[#E25353] text-white text-xs uppercase rounded hover:bg-[#E99797] transition-all duration-300 transform hover:scale-110 hover:rotate-3 relative overflow-hidden" 
                 :href="video.button" 
                 target="_blank"
                 rel="noopener noreferrer">
                <span class="relative z-10">觀看完整影片</span>
                <span class="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-500 to-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  setup() {
    const container = ref(null);
    const mousePosition = ref({ x: 0, y: 0 });
    const particles = ref([]);

    const videos = ref([
      {
          link: 'https://www.youtube.com/embed/k2_3Ka3_IEw?si=ZD0XGX17JLe-gRCI&amp;controls=0',
          title: "反骨柔柔",
          Description: "公開超渣前男友!!各位姐妹小心👻手機裡竟然都是跟別人的影片...😨",
          button: "https://www.youtube.com/watch?v=k2_3Ka3_IEw"
        },
        {
          link: 'https://www.youtube.com/embed/LWL2i_uW7do?si=gLJPmd4DgZx3sdaT&amp;controls=0',
          title: "雪兔",
          Description: "【空之要塞：啟航】創新跑酷與射擊玩法一定要來體驗！！",
          button: "https://www.youtube.com/watch?v=LWL2i_uW7do"
        },
        {
          link: 'https://www.youtube.com/embed/7H7rtiTh4m0?si=_-BjDHIiJbh-Iez7&amp;controls=0',
          title: "小妞",
          Description: "我被床戰隊友陷害了，哈哈哈哈哈哈哈哈哈哈哈哈哈",
          button: "https://www.youtube.com/watch?v=7H7rtiTh4m0"
        },
        {
          link: 'https://www.youtube.com/embed/_HHXvDfXfug?si=Pl1WQDx1zsXWFPNQ&amp;controls=0',
          title: "ROALX",
          Description: "你可以只用輪盤上轉到的槍枝獲得勝利嗎？？？？",
          button: "https://www.youtube.com/watch?v=_HHXvDfXfug"
        },
        {
          link: 'https://www.youtube.com/embed/fzngN3zOWHU?si=iymtoDCF0haqdFBS&amp;controls=0',
          title: "RY",
          Description: "【RY】不存在的樓層？嚇到螢幕都在抖！| 蛋仔派對",
          button: "https://www.youtube.com/watch?v=fzngN3zOWHU"
        },
        {
          link: 'https://www.youtube.com/embed/0iDJ7agNpsc?si=D3vJE5v8F8-g04mH&amp;controls=0',
          title: "WuWei無為",
          Description: "為什麼這遊戲還沒倒！混亂不堪但又好笑好玩的環境就是我們要的啦！",
          button: "https://www.youtube.com/watch?v=0iDJ7agNpsc"
        },
    ]);

    const floatingElements = ['🎭', '🎬', '🎥', '📽️', '🍿', '🎞️', '📺', '🎙️', '🎵', '🦄', '✨', '💫'];
    const backgroundElements = ['🎈', '🎊', '🎉', '🌟', '🎀', '🧨', '🪅', '🎇', '🎆'];

    const handleMouseMove = (event) => {
      const rect = container.value.getBoundingClientRect();
      mousePosition.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const createParticles = () => {
      const allElements = [...floatingElements, ...backgroundElements];
      for (let i = 0; i < 50; i++) {
        particles.value.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          icon: allElements[Math.floor(Math.random() * allElements.length)],
          speed: 0.5 + Math.random() * 1
        });
      }
    };

    const getParticleStyle = (particle) => {
      const dx = mousePosition.value.x / container.value.offsetWidth * 100 - particle.x;
      const dy = mousePosition.value.y / container.value.offsetHeight * 100 - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(10000); // 最大距离（100^2 + 100^2）的平方根
      const scale = 1 - distance / maxDistance; // 距离越近，scale越大

      // 稍微增加移動幅度
      const moveFactor = 1.5; // 原來是 0.1, 稍微增加到 0.15

      return {
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        transform: `translate(${dx * scale * moveFactor}px, ${dy * scale * moveFactor}px) scale(${0.5 + scale * 0.5})`,
        opacity: 0.3 + scale * 0.7
      };
    };

    onMounted(() => {
      createParticles();
    });

    return {
      container,
      particles,
      videos,
      handleMouseMove,
      getParticleStyle
    };
  }
}
</script>

<style scoped>
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

.animate-glitch {
  animation: glitch 500ms infinite;
}

.animate-glitch::before,
.animate-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.animate-glitch::before {
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.animate-glitch::after {
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(10px, 9999px, 66px, 0); }
  100% { clip: rect(78px, 9999px, 30px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(57px, 9999px, 93px, 0); }
  100% { clip: rect(16px, 9999px, 80px, 0); }
}
</style>