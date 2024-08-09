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
      <div class="space-y-6">
        <div
          v-for="item in newsItems"
          :key="item.id"
          v-scroll-animation
          class="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500 opacity-0 translate-y-10"
        >
          <button
            class="w-full text-left hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E99797]"
            @click="navigateTo(item.path)"
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
                >
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsSection',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: '最新》林德豐一部片剪了27天，跳抖肩舞懺悔。',
          image: '/道歉.png',
          date: '2024年8月1日 週四 下午4:37',
          path: '/news/new1'
        },
        {
          id: 2,
          title: '最新》林德豐新影片上線，揭示剪輯背後的辛酸。',
          image: '/小鬼風.png',
          date: '2024年8月2日 週五 上午10:15',
          path: '/news/new2'
        },
        {
          id: 3,
          title: 'RC Studio擴大團隊，招募新人才。',
          image: '/阿烜.png',
          date: '2024年8月3日 週六 下午2:00',
          path: '/news/new3'
        }
      ]
    };
  },
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.animate {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
</style>