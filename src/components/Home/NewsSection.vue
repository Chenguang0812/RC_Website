<template>
  <div class="bg-white dark:bg-[#303030] py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12 relative flex justify-center">
        <div class="bg-[#E0E0E0] dark:bg-[#2c2c2c] -skew-x-12 inline-block">
          <p
            class="text-3xl font-bold py-2 px-8 skew-x-12 inline-block relative z-10 dark:text-white"
          >
            最新消息
          </p>
          <div
            class="absolute bottom-0 right-0 w-full h-1 bg-[#E25353] dark:bg-[#0091ff]"
          />
        </div>
      </div>
      <div class="h-[400px] overflow-y-auto custom-scrollbar">
        <div>
          <div
            v-for="item in newsItems"
            :key="item.id"
            class="bg-white dark:bg-[#3f3f3f] shadow-md rounded-lg overflow-hidden mb-4"
          >
            <a
              :href="item.link"
              target="_blank"
              class="block w-full text-left hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E99797] dark:focus:ring-[#FF9999]"
            >
              <div class="flex">
                <div class="flex-1 p-4">
                  <h3 class="text-xl font-semibold mb-2 dark:text-white">
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-500 dark:text-gray-400 text-sm">
                    {{ item.date }}
                  </p>
                </div>
                <div class="w-1/5 flex-shrink-0">
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
          title: "最新》林德豐再次拖片！將在8/28 20:00跳三振舞！？",
          image: "/IMG_1212.webp",
          date: "2024年8月28日 週三 下午5:58",
          link: "https://rcstudio.tw/No",
        },
        {
          id: 2,
          title: "最新》林德豐一部片剪了27天，跳抖肩舞懺悔。",
          image: "/道歉.webp",
          date: "2024年8月5日 週六 下午1:15",
          link:
            "https://drive.google.com/file/d/1hi5-lJv-x7WlovFzi7CSeaU6G1PQWe9K/view?usp=sharing",
        },
        {
          id: 3,
          title: "最新》林德豐新影片上線，揭示剪輯背後的辛酸。",
          image: "/小鬼風.webp",
          date: "2024年8月3日 週六 下午2:00",
          link: "https://rcstudio.tw/No",
        },
        {
          id: 4,
          title: "RC Studio擴大團隊，招募新人才。",
          image: "/阿烜.webp",
          date: "2024年8月2日 週五 上午10:15",
          link: "https://rcstudio.tw/joinUS",
        },
        {
          id: 5,
          title: "RC Studio擴大營業項目：唱、跳、RAP、籃球",
          image: "/亞洲舞王蔡徐坤.webp",
          date: "2024年8月1日 週四 下午4:37",
          link: "https://www.youtube.com/watch?v=GLu5YwiAtC4",
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
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
  scrollbar-color: #c2c2c2 #f1f1f1;
}
</style>
