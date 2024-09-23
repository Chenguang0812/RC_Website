<template>
  <div
    class="bg-white dark:bg-[#2A2A2A] py-6 sm:py-8 px-3 sm:px-4 transition-colors duration-300"
  >
    <div class="max-w-4xl mx-auto">
      <div class="mb-8 sm:mb-12 relative flex justify-center">
        <div class="bg-[#E0E0E0] dark:bg-[#3A3A3A] -skew-x-12 inline-block">
          <p
            class="text-2xl sm:text-3xl font-bold py-2 px-6 sm:px-8 skew-x-12 inline-block relative z-10 dark:text-[#FFFFFF]"
          >
            最新消息
          </p>
          <div
            class="absolute bottom-0 right-0 w-full h-1 bg-[#E25353] dark:bg-[#5c67ff]"
          />
        </div>
      </div>
      <div class="h-[350px] sm:h-[400px] overflow-y-auto custom-scrollbar">
        <div>
          <div
            v-for="item in newsItems"
            :key="item.id"
            class="bg-white dark:bg-[#3A3A3A] shadow-md rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:shadow-xl"
          >
            <a
              :href="item.link"
              target="_blank"
              class="block w-full text-left hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5050] dark:focus:ring-[#2c0b4b]"
            >
              <div class="flex">
                <div class="flex-1 p-3 sm:p-4">
                  <h3
                    class="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 dark:text-[#FFFFFF]"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-500 dark:text-[#AAAAAA] text-xs sm:text-sm">
                    {{ item.date }}
                  </p>
                </div>
                <div class="w-1/4 sm:w-1/5 flex-shrink-0">
                  <div class="aspect-square w-full h-full relative">
                    <img
                      :src="item.image"
                      :alt="item.title"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsSection",
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: "最新》乖兒子與RC合作半年後突破10萬訂閱！",
          image: "/乖兒子.webp",
          date: "2024年9月7日 週六 下午2:00",
          link: "https://youtu.be/82JpHaBMlYc?si=I2wvO1KJ-AXEZFJr",
        },
        {
          id: 2,
          title: "最新》林德豐再度拖片7天，引起公憤！跳三振舞道歉！？",
          image: "/風笑.webp",
          date: "2024年8月28日 週三 下午5:58",
          link:
            "https://drive.google.com/file/d/1R7B52dPgnTNvcBIW7sxWUe7-vIVXisLX/view?usp=sharing",
        },
        {
          id: 3,
          title: "最新》林德豐一部片剪了27天，跳抖肩舞懺悔。",
          image: "/道歉.webp",
          date: "2024年8月5日 週六 下午1:15",
          link:
            "https://drive.google.com/file/d/1hi5-lJv-x7WlovFzi7CSeaU6G1PQWe9K/view?usp=sharing",
        },

        {
          id: 4,
          title: "RC Studio擴大團隊，招募新人才。",
          image: "/RC.webp",
          date: "2024年8月2日 週五 上午10:15",
          link: "https://rcstudio.tw/joinUS",
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* For Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #c2c2c2 #f1f1f1;
}

@media (prefers-color-scheme: dark) {
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #4a5568;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #667eea;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #5a67d8;
  }
}

@media (max-width: 640px) {
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
}
</style>
