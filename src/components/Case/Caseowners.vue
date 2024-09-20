<template>
  <div
    ref="container"
    class="py-8 px-4 overflow-hidden relative"
    @mousemove="handleMouseMove"
  >
    <!-- 浮動元素 -->
    <div
      v-for="(particle, index) in particles"
      :key="index"
      class="absolute text-2xl transition-all duration-1000 ease-out"
      :style="getParticleStyle(particle)"
    >
      {{ particle.icon }}
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div
        class="w-full text-4xl font-bold text-center text-white relative mb-3 z-10 animate-glitch"
      >
        合作業主
      </div>
      <div
        class="inline-block px-6 py-2.5 bg-[#E25353] dark:bg-indigo-600 text-white text-xs rounded hover:bg-[#E99797] dark:hover:bg-indigo-700 hover:rotate-3 relative overflow-hidden"
      >
        <span class="relative z-10">觀看完整影片</span>
      </div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-6 ml-6">
        Youtuber長期合作，協助品牌經營
      </p>
      <div ref="channelContainer" class="overflow-x-scroll custom-scrollbar">
        <div class="flex space-x-6 pb-4">
          <a
            v-for="channel in channels"
            :key="channel.id"
            :href="channel.url"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg flex-shrink-0 w-64 h-64 flex flex-col items-center justify-center p-6 transform transition duration-300 hover:rotate-2 hover:-translate-y-2"
          >
            <img
              :src="channel.image"
              :alt="channel.name"
              class="w-full h-auto max-w-[150px] max-h-[150px] rounded-lg mb-6 object-cover"
            />
            <p class="text-center font-bold text-xl text-gray-900 dark:text-[#e0e0e0]">
              {{ channel.name }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AffiliatedChannels",
  data() {
    return {
      mousePosition: { x: 0, y: 0 },
      particles: [],
      channels: [
        {
          id: 1,
          name: "皮卡嚕",
          image: "/皮卡嚕.webp",
          url: "https://www.youtube.com/@PikaLu",
        },
        {
          id: 2,
          name: "乖兒子",
          image: "/乖兒子.webp",
          url: "https://www.youtube.com/@goodson0706",
        },
        {
          id: 3,
          name: "雪兔",
          image: "/雪兔.webp",
          url: "https://www.youtube.com/@snowrabbit0821",
        },
        {
          id: 4,
          name: "戴舒萱",
          image: "/戴舒萱.webp",
          url: "https://www.youtube.com/@susiewooenglish",
        },
        {
          id: 5,
          name: "RY",
          image: "/RY.webp",
          url: "https://www.youtube.com/@RYfun",
        },
        {
          id: 6,
          name: "小妞",
          image: "/小妞.webp",
          url: "https://www.youtube.com/@XiaoNiu1207",
        },
        {
          id: 7,
          name: "Chao J",
          image: "/Chao-J.webp",
          url: "https://www.youtube.com/@ChaoJ",
        },
      ],
      floatingElements: [
        "🎭",
        "🎬",
        "🎥",
        "📽️",
        "🍿",
        "🎞️",
        "📺",
        "🎙️",
        "🎵",
        "🦄",
        "✨",
        "💫",
      ],
      backgroundElements: ["🎈", "🎊", "🎉", "🌟", "🎀", "🧨", "🪅", "🎇", "🎆"],
    };
  },
  mounted() {
    this.createParticles();
    this.enableHorizontalScroll();
  },
  methods: {
    handleMouseMove(event) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    },
    createParticles() {
      const allElements = [...this.floatingElements, ...this.backgroundElements];
      for (let i = 0; i < 50; i++) {
        this.particles.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          icon: allElements[Math.floor(Math.random() * allElements.length)],
          speed: 0.5 + Math.random() * 1,
        });
      }
    },
    getParticleStyle(particle) {
      const dx =
        (this.mousePosition.x / this.$refs.container.offsetWidth) * 100 - particle.x;
      const dy =
        (this.mousePosition.y / this.$refs.container.offsetHeight) * 100 - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(10000);
      const scale = 1 - distance / maxDistance;
      const moveFactor = 1.5;

      return {
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        transform: `translate(${dx * scale * moveFactor}px, ${
          dy * scale * moveFactor
        }px) scale(${0.5 + scale * 0.5})`,
        opacity: 0.3 + scale * 0.7,
      };
    },
    enableHorizontalScroll() {
      const container = this.$refs.channelContainer;
      container.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          container.scrollLeft += e.deltaY;
        }
      });
    },
  },
};
</script>

<style scoped>
.overflow-x-scroll {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.custom-scrollbar::-webkit-scrollbar {
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #e25353;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #d14141;
}

/* For Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #f1f1f1;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

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
  0% {
    clip: rect(10px, 9999px, 66px, 0);
  }
  100% {
    clip: rect(78px, 9999px, 30px, 0);
  }
}

@keyframes glitch-anim2 {
  0% {
    clip: rect(57px, 9999px, 93px, 0);
  }
  100% {
    clip: rect(16px, 9999px, 80px, 0);
  }
}
</style>
