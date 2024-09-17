<template>
  <div class="h-16"></div>
  <div class="relative w-full h-[78vh]">
    <div class="image-container">
      <img
        src="/image.webp"
        alt="Premiere Image"
        class="w-full h-full object-cover"
        :class="{ loaded: imageLoaded }"
        loading="eager"
        fetchpriority="high"
        @load="imageLoaded = true"
      />
    </div>
    <div class="absolute inset-0 bg-[#44474B] bg-opacity-60"></div>
    <div
      class="absolute inset-0 text-[#F0F0F0] flex flex-col items-center justify-center px-4"
    >
      <h1
        class="font-pacifico font-semibold text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-center animate-fade-in-down"
      >
        RC Studio
      </h1>
      <p class="font-semibold text-2xl sm:text-2xl mt-4 text-center animate-fade-in-up">
        Re-Created it.
      </p>
      <p class="font-semibold text-lg sm:text-lg mt-4 text-center animate-fade-in-up">
        專業的影片剪輯工作室<br />
        總有一天我們會打敗火箭隊
      </p>
      <button
        class="mt-8 bg-[#E99797] dark:bg-[#5c67ff] text-white py-2 px-6 rounded-full hover:bg-[#e57f7f] dark:hover:bg-[#9c97e9] transition-colors duration-300 animate-bounce"
        @click="scrollToContent"
      >
        了解更多
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageLoaded: false,
    };
  },
  methods: {
    scrollToContent() {
      const windowHeight = window.innerHeight;
      window.scrollTo({
        top: windowHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;
}

.image-container img {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-container img.loaded {
  opacity: 1;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 1s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out 0.5s both;
}
.font-pacifico {
  font-family: "Allura", cursive;
}
</style>
