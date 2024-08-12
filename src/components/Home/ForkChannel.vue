根据提供的图片，我将修改代码以匹配图片中显示的内容和样式。以下是修改后的代码： ```vue
<template>
  <div class="bg-[#F5F5F5] py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <div ref="channelContainer" class="overflow-x-scroll custom-scrollbar">
        <div class="flex space-x-6 pb-4">
          <a
            v-for="channel in channels"
            :key="channel.id"
            :href="channel.url"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 flex-shrink-0 w-[150px] h-[150px] flex flex-col items-center justify-center p-2"
          >
            <img
              :src="channel.image"
              :alt="channel.name"
              class="w-full h-auto max-w-[150px] max-h-[150px] rounded-lg mb-2 object-cover"
            />
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
          id: 1,
          name: "BANWE",
          image: "/BANWE.jpg",
          url: "https://rcstudio.tw",
        },
        {
          id: 2,
          name: "我是一隻浣熊",
          image: "/浣熊.png",
          url: "https://rcstudio.tw",
        },
        {
          id: 3,
          name: "阿偉的狗",
          image: "/阿偉的狗.png",
          url: "https://rcstudio.tw",
        },
        {
          id: 4,
          name: "RC Studio工作室",
          image: "/RC.jpg",
          url: "https://rcstudio.tw",
        },
        {
          id: 5,
          name: "亦凌YiLing",
          image: "/亦凌.jpg",
          url: "https://rcstudio.tw",
        },
        {
          id: 6,
          name: "實況Online",
          image: "/實況Online.jpg",
          url: "https://rcstudio.tw",
        },
        {
          id: 7,
          name: "尤教授的烤肉實驗室",
          image: "/烤肉.jpg",
          url: "https://rcstudio.tw",
        },
        {
          id: 8,
          name: "玫瑰雲端",
          image: "/玫瑰雲端.jpg",
          url: "https://rcstudio.tw",
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
  background: #888;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* 针对Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}
</style>
