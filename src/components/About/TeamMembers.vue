<template>
  <div class="flex justify-center my-12">
    <div
      class="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
      style="width: 1120px"
    >
      <!-- 背景動畫元素 -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#E25353] to-[#E99797] opacity-10 animate-wave"
      />

      <h2 class="text-4xl font-bold my-8 text-[#E25353] text-center relative z-10">
        我們的團隊
      </h2>

      <!-- 團隊成員卡片 -->
      <div
        ref="containerRef"
        class="flex flex-wrap justify-center gap-8 relative z-10 max-h-[620px] overflow-y-auto px-6 pb-8"
      >
        <div
          v-for="member in teamMembers"
          :key="member.id"
          :ref="
            (el) => {
              if (el) memberRefs[member.id] = el;
            }
          "
          class="w-80 bg-white rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-2"
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
          <h3 class="text-2xl font-bold mb-2 text-[#E25353]">
            {{ member.name }}
          </h3>
          <!-- 成員職位 -->
          <p class="text-lg text-[#E99797]">
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
          position: "老闆女友，阿阿阿",
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
