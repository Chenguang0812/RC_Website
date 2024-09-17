<template>
  <div
    class="bg-[#E4E4E4] bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-8 px-4"
  >
    <div class="max-w-6xl mx-auto">
      <div class="mb-2 flex items-center">
        <!-- Changed mb-8 to mb-2 -->
        <div class="w-2 h-8 bg-[#E25353] dark:bg-[#5c67ff] mr-4" />
        <h2 class="font-bold text-4xl text-gray-900 dark:text-[#e0e0e0]">合作業主</h2>
      </div>
      <!-- Added subtitle -->
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
            class="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg flex-shrink-0 w-64 h-64 flex flex-col items-center justify-center p-6"
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
