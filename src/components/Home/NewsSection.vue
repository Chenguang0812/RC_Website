<template>
  <div class="bg-white py-8 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12 relative flex justify-center">
        <div class="bg-[#E0E0E0] -skew-x-12 inline-block">
          <p class="text-3xl font-bold py-2 px-8 skew-x-12 inline-block relative z-10">
            最新消息
          </p>
          <div class="absolute bottom-0 right-0 w-full h-1 bg-[#E99797]" />
        </div>
      </div>
      <div ref="newsContainer" class="h-[400px] overflow-y-auto custom-scrollbar">
        <div ref="newsWrapper">
          <div
            v-for="item in newsItems"
            :key="item.id"
            class="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500 mb-4"
          >
            <a
              :href="item.link"
              target="_blank"
              class="block w-full text-left hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E99797]"
            >
              <div class="flex">
                <div class="flex-1 p-4">
                  <h3 class="text-xl font-semibold mb-2">
                    {{ item.title }}
                  </h3>
                  <p class="text-gray-500 text-sm">
                    {{ item.date }}
                  </p>
                </div>
                <div class="w-1/5 flex-shrink-0">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                  />
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
          title: "最新》林德豐一部片剪了27天，跳抖肩舞懺悔。",
          image: "/道歉.png",
          date: "2024年8月1日 週四 下午4:37",
          link:
            "https://drive.google.com/file/d/1hi5-lJv-x7WlovFzi7CSeaU6G1PQWe9K/view?usp=sharing",
        },
        {
          id: 2,
          title: "最新》林德豐新影片上線，揭示剪輯背後的辛酸。",
          image: "/小鬼風.png",
          date: "2024年8月2日 週五 上午10:15",
          link: "https://rcstudio.tw/No",
        },
        {
          id: 3,
          title: "RC Studio擴大團隊，招募新人才。",
          image: "/阿烜.png",
          date: "2024年8月3日 週六 下午2:00",
          link: "https://rcstudio.tw/joinUS",
        },
        {
          id: 4,
          title: "RC擴大營業項目：唱跳RAP籃球",
          image: "/亞洲舞王蔡徐坤.png",
          date: "2024年8月3日 週六 下午2:00",
          link: "https://www.youtube.com/watch?v=GLu5YwiAtC4",
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #e99797 #f5f5f5;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #e99797;
  border-radius: 4px;
}
</style>
