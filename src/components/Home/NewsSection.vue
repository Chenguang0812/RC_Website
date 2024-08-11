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
      <div
        ref="newsContainer"
        class="overflow-hidden"
        style="height: 500px;"
      >
        <div
          ref="newsWrapper"
          class="space-y-6"
        >
          <div
            v-for="item in newsItems"
            :key="item.id"
            class="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500"
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
                  >
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
  name: 'NewsSection',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: '最新》林德豐一部片剪了27天，跳抖肩舞懺悔。',
          image: '/道歉.png',
          date: '2024年8月1日 週四 下午4:37',
          link: 'https://drive.google.com/file/d/1hi5-lJv-x7WlovFzi7CSeaU6G1PQWe9K/view?usp=sharing'
        },
        {
          id: 2,
          title: '最新》林德豐新影片上線，揭示剪輯背後的辛酸。',
          image: '/小鬼風.png',
          date: '2024年8月2日 週五 上午10:15',
          link: 'https://rcstudio.tw/No'
        },
        {
          id: 3,
          title: 'RC Studio擴大團隊，招募新人才。',
          image: '/阿烜.png',
          date: '2024年8月3日 週六 下午2:00',
          link: 'https://rcstudio.tw/joinUS'
        },
        {
          id: 4,
          title: 'RC Studio擴大團隊，招募新人才。',
          image: '/阿烜.png',
          date: '2024年8月3日 週六 下午2:00',
          link: 'https://rcstudio.tw/No'
        },
      ],
      scrollPosition: 0,
      scrollSpeed: 0,
      isScrolling: false
    };
  },
  mounted() {
    this.$refs.newsContainer.addEventListener('wheel', this.handleWheel, { passive: false });
    this.animateScroll();
  },
  beforeUnmount() {
    this.$refs.newsContainer.removeEventListener('wheel', this.handleWheel);
  },
  methods: {
    handleWheel(event) {
      event.preventDefault();
      const delta = event.deltaY;
      this.scrollSpeed += delta * 0.1;
      this.isScrolling = true;
    },
    animateScroll() {
      if (this.isScrolling) {
        this.scrollPosition += this.scrollSpeed;
        const maxScroll = this.$refs.newsWrapper.clientHeight - this.$refs.newsContainer.clientHeight;

        if (this.scrollPosition < 0) {
          this.scrollPosition = 0;
          this.scrollSpeed = 0;
        } else if (this.scrollPosition > maxScroll) {
          this.scrollPosition = maxScroll;
          this.scrollSpeed = 0;
        }

        this.$refs.newsWrapper.style.transform = `translateY(${-this.scrollPosition}px)`;

        this.scrollSpeed *= 0.95; // 減緩滾動速度
        if (Math.abs(this.scrollSpeed) < 0.1) {
          this.scrollSpeed = 0;
          this.isScrolling = false;
        }
      }
      requestAnimationFrame(this.animateScroll);
    }
  }
};
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}
</style>