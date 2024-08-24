<template>
  <div class="bg-[#E4E4E4] dark:bg-[#1C1C1C] py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="mb-8 flex items-center">
        <div class="w-2 h-8 bg-[#E25353] dark:bg-[#0091ff] mr-4" />
        <h2 class="font-bold text-4xl text-gray-900 dark:text-[#e0e0e0]">旗下頻道</h2>
      </div>
      <div ref="channelContainer" class="overflow-x-scroll custom-scrollbar">
        <div class="flex space-x-6 pb-4">
          <a
            v-for="channel in channels"
            :key="channel.id"
            :href="channel.url"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white dark:bg-[#222222] rounded-lg shadow-md overflow-hidden hover:shadow-lg flex-shrink-0 w-64 h-64 flex flex-col items-center justify-center p-6"
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
      channels: [
        {
          id: 6,
          name: "RC Studio工作室",
          image: "/RC.webp",
          url: "https://www.youtube.com/@RC_Studio",
        },
        {
          id: 1,
          name: "亦凌YiLing",
          image: "/亦凌.webp",
          url: "https://www.youtube.com/@10_YiLing",
        },
        {
          id: 2,
          name: "實況Online",
          image: "/實況Online.webp",
          url: "https://www.youtube.com/@PalyerOnline",
        },
        {
          id: 5,
          name: "尤教授的烤肉實驗室",
          image: "/烤肉.webp",
          url: "https://www.youtube.com/@holoXman/featured",
        },
        {
          id: 3,
          name: "BANWE",
          image: "/BANWE.webp",
          url: "https://www.youtube.com/@BANWE",
        },
        {
          id: 4,
          name: "玫瑰雲端",
          image: "/玫瑰雲端.webp",
          url: "https://www.youtube.com/@RC_Drive",
        },
        {
          id: 7,
          name: "我是一隻浣熊",
          image: "/浣熊.webp",
          url: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
        },
        {
          id: 8,
          name: "阿偉的狗",
          image: "/阿偉的狗.webp",
          url: "https://www.youtube.com/watch?v=09y0tPAeLG0",
        },
      ],
    };
  },
  mounted() {
    this.enableHorizontalScroll();
  },
  methods: {
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
</style>
