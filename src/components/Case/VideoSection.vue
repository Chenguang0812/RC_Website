<template>
  <div
    ref="container"
    class="pt-16 overflow-hidden relative mt-12"
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

    <h2
      class="text-4xl font-bold text-center text-white relative mb-3 z-20 animate-glitch"
      data-text="影視專欄"
    >
      影視專欄
    </h2>
    <div class="flex justify-center space-x-4 relative z-20">
      <div
        class="inline-block px-6 py-2.5 bg-[#E25353] dark:bg-indigo-600 text-white text-sm rounded-full"
      >
        <span class="relative z-10">累計超過1000部作品</span>
      </div>
      <div
        class="inline-block px-6 py-2.5 bg-[#E25353] dark:bg-indigo-600 text-white text-sm rounded-full"
      >
        <span class="relative z-10">影片總觀看數破億次</span>
      </div>
    </div>

    <div class="container mx-auto px-4 relative z-10 mt-10">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="video-card transform transition duration-300 hover:rotate-2 hover:-translate-y-2"
        >
          <div
            class="rounded-lg shadow-lg bg-white dark:bg-gray-800 max-w-sm overflow-hidden group"
          >
            <div class="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                class="absolute top-0 left-0 w-full h-full"
                :src="video.link"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
            <div
              class="p-6 transform group-hover:translate-y-[-10px] transition-transform duration-300"
            >
              <h5
                class="text-[#E25353] dark:text-indigo-400 text-xl font-semibold mb-2 hover:text-[#E99797] dark:hover:text-indigo-300 transition-colors duration-300"
              >
                {{ video.title }}
              </h5>
              <p class="text-gray-700 dark:text-gray-300 text-base mb-4">
                {{ video.Description }}
              </p>
              <a
                class="inline-block px-6 py-2.5 bg-[#E25353] dark:bg-indigo-600 text-white text-xs uppercase rounded hover:bg-[#E99797] dark:hover:bg-indigo-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3 relative overflow-hidden"
                :href="video.button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="relative z-10">觀看完整影片</span>
                <span
                  class="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-500 to-yellow-500 dark:from-indigo-700 dark:to-purple-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoColumn",
  data() {
    return {
      mousePosition: { x: 0, y: 0 },
      particles: [],
      videos: [
        {
          link: "https://www.youtube.com/embed/g0dKNvcEo08?si=t8YsAmx21VE77j9o",
          title: "皮卡嚕",
          Description: "單部影片創造百萬流量🔥                                         ",
          button: "https://youtu.be/g0dKNvcEo08?si=_U9yB2YWSMyhfvc6",
        },
        {
          link: "https://www.youtube.com/embed/nuE-fjTwAcA?si=RI0Dj64irT2wpOlQ",
          title: "雪兔",
          Description: "工商業配加上精緻剪輯，促成與廣告廠商的合作順暢，觀眾也看得開心💫",
          button: "https://youtu.be/nuE-fjTwAcA?si=4987K1xBJkH_owzm",
        },
        {
          link: "https://www.youtube.com/embed/crVmX1jz63E?si=dySj5ZASoPS83tIk",
          title: "乖兒子",
          Description: "賽事活動精華，瞄準目標受眾，引起共鳴🤩        ",
          button: "https://youtu.be/crVmX1jz63E?si=OTrLBCbMSnOTiQ3E",
        },
        {
          link: "https://www.youtube.com/embed/rGBfEnAZpjw?si=qYyPDLel8U9CXW8o",
          title: "戴舒萱",
          Description: "生活日常搭上快節奏剪輯也有好流量！打造專屬自己的影片內容✅",
          button: "https://youtu.be/rGBfEnAZpjw?si=qTDj4ElZ0UXcDC8o",
        },
        {
          link: "https://www.youtube.com/embed/W6AnL9PFCLg?si=j8TEJ7AcXqf2Fz8F",
          title: "小妞",
          Description: "挑戰企劃加創意剪輯，做出改變引發關注👀    ",
          button: "https://youtu.be/W6AnL9PFCLg?si=04lPTUMaH53y8BIp",
        },
        {
          link: "https://www.youtube.com/embed/bhLH4EktBfQ?si=42a4eaCITYRdLDkL",
          title: "卯咪",
          Description: "遊戲精華搞笑剪輯，能讓人開懷一笑的影片也能讓粉絲數量一飛衝天🚀",
          button: "https://youtu.be/bhLH4EktBfQ?si=GrLoOOGvHRBQOi2V",
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
  },
};
</script>

<style scoped>
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
