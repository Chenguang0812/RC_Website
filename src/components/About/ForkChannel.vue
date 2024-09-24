<template>
  <div class="flex justify-center my-12 px-4 sm:px-0">
    <div
      class="bg-white dark:bg-[#1E1A2E] rounded-3xl shadow-2xl overflow-hidden relative w-full max-w-[1120px] sm:w-[1120px]"
    >
      <!-- 背景動畫 -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#E25353] to-[#E99797] dark:from-[#5c67ff] dark:to-[#939bff] opacity-10 dark:opacity-20 animate-wave"
      />

      <h2
        class="text-3xl sm:text-4xl font-bold my-6 sm:my-8 text-[#E25353] dark:text-[#5c67ff] text-center relative z-10"
      >
        旗下頻道
      </h2>

      <!-- 團隊成員Card -->
      <div
        ref="containerRef"
        class="flex flex-wrap gap-8 relative z-10 max-h-[70vh] sm:max-h-[620px] overflow-y-auto px-4 sm:px-6 pb-6 sm:pb-8"
      >
        <a
          v-for="member in teamMembers"
          :key="member.id"
          :href="member.link"
          target="_blank"
          rel="noopener noreferrer"
          :ref="
            (el) => {
              if (el) memberRefs[member.id] = el;
            }
          "
          class="w-80 bg-white dark:bg-[#222547] rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-2 no-underline"
          :class="{ 'animate-slideIn': member.isVisible }"
        >
          <!-- 成員圖片 -->
          <div
            class="w-75 h-75 flex items-center justify-center mb-6 overflow-hidden rounded-lg"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="object-cover h-full w-full transition duration-500 hover:scale-110"
            />
          </div>
          <!-- 成員姓名 -->
          <h3 class="text-2xl font-bold mb-2 text-[#E25353] dark:text-[#5c67ff]">
            {{ member.name }}
          </h3>
          <!-- 成員職位 -->
          <p class="text-lg text-[#E99797] dark:text-[#717bff]">
            {{ member.position }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMembers",
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: "RC Studio",
          position: "RC娛樂官方頻道",
          image: "/LOGO.png",
          link: "https://www.youtube.com/@RC_Studio",
          isVisible: false,
        },
        {
          id: 2,
          name: "亦凌",
          position: "給你滿滿的Punchline",
          image: "/亦凌.png",
          link: "https://www.youtube.com/@RC_亦凌",
          isVisible: false,
        },
        {
          id: 3,
          name: "卡卡滋",
          position: "RC御用外交官",
          image: "/卡卡.webp",
          link: "https://www.youtube.com/@RC_卡卡滋",
          isVisible: false,
        },
        {
          id: 4,
          name: "晨光",
          position: "一位喜歡上廁所的Boy",
          image: "/晨光.webp",
          link: "https://www.youtube.com/@RC_晨光",
          isVisible: false,
        },
        {
          id: 5,
          name: "亦凌YiLing",
          position: "致力於製作Minecraft企劃影片",
          image: "/channels4_profile.webp",
          link: "https://www.youtube.com/@10_YiLing",
          isVisible: false,
        },
        {
          id: 6,
          name: "實況Online",
          position: "分享遊戲圈大小事",
          image: "/實況Online.webp",
          link: "https://www.youtube.com/@PalyerOnline",
          isVisible: false,
        },
        {
          id: 7,
          name: "尤教授的烤肉實驗室",
          position: "Hololive翻譯精華",
          image: "/烤肉.webp",
          link: "https://www.youtube.com/@holoXman",
          isVisible: false,
        },
        {
          id: 8,
          name: "我是一隻浣熊",
          position: "點我可以看好康的",
          image: "/浣熊.webp",
          link: "https://reurl.cc/5dVkNz",
          isVisible: false,
        },
      ],
      memberRefs: {},
      observer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.observer = new IntersectionObserver(this.handleIntersect, {
        root: this.$refs.containerRef,
        rootMargin: "0px",
        threshold: 0.1,
      });

      this.teamMembers.forEach((member) => {
        if (this.memberRefs[member.id]) {
          this.memberRefs[member.id].setAttribute("data-member-id", member.id);
          this.observer.observe(this.memberRefs[member.id]);
        }
      });
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    handleIntersect(entries) {
      entries.forEach((entry) => {
        const memberId = parseInt(entry.target.getAttribute("data-member-id"));
        const memberIndex = this.teamMembers.findIndex((m) => m.id === memberId);
        if (entry.isIntersecting) {
          this.$set(this.teamMembers[memberIndex], "isVisible", true);
        }
      });
    },
  },
};
</script>

<style scoped>
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
