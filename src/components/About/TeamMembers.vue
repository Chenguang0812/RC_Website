<template>
  <div class="flex justify-center my-12 px-4 sm:px-0">
    <div
      class="bg-white dark:bg-[#1E1A2E] rounded-3xl shadow-2xl overflow-hidden relative w-full max-w-[1120px] sm:w-[1120px]"
    >
      <!-- 背景動畫元素 -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#E25353] to-[#E99797] dark:from-[#5c67ff] dark:to-[#939bff] opacity-10 dark:opacity-20 animate-wave"
      />

      <h2
        class="text-3xl sm:text-4xl font-bold my-6 sm:my-8 text-[#E25353] dark:text-[#5c67ff] text-center relative z-10"
      >
        我們的團隊
      </h2>

      <!-- 團隊成員卡片容器 -->
      <div
        ref="containerRef"
        class="flex flex-wrap justify-center gap-8 relative z-10 max-h-[70vh] sm:max-h-[620px] overflow-y-auto px-4 sm:px-6 pb-6 sm:pb-8"
      >
        <div
          v-for="member in teamMembers"
          :key="member.id"
          :ref="
            (el) => {
              if (el) memberRefs[member.id] = el;
            }
          "
          class="w-80 bg-white dark:bg-[#222547] rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-2"
          :class="{ 'animate-slideIn': member.isVisible }"
        >
          <!-- 成員圖片 -->
          <div
            class="w-full h-80 flex items-center justify-center mb-6 overflow-hidden rounded-lg"
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
        </div>
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
          name: "亦凌YiLing",
          position: "頂級老闆",
          image: "/10.webp",
          isVisible: false,
        },
        {
          id: 2,
          name: "卡卡滋Kazi",
          position: "ㄚㄚㄚㄚㄚㄚ",
          image: "/卡卡.webp",
          isVisible: false,
        },
        {
          id: 3,
          name: "晨光Chenguang",
          position: "無心+薪勞工",
          image: "/柯文哲.webp",
          isVisible: false,
        },
        {
          id: 4,
          name: "亨利Mr.H",
          position: "精油推廣大使",
          image: "/亨利.webp",
          isVisible: false,
        },
        {
          id: 5,
          name: "小風DeFeng",
          position: "拖片20幾天的南非爆炸頭",
          image: "/小風.webp",
          isVisible: false,
        },
        {
          id: 6,
          name: "綸弟Mutekinyan",
          position: "猥褻+宅炮剪輯師",
          image: "/綸弟.webp",
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
