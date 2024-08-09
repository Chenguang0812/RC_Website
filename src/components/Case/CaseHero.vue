<template>
  <div class="relative w-full h-screen">
    <img
      src="/premiere.png"
      alt="Premiere Image"
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 bg-[#44474B] bg-opacity-60" />
    <div class="absolute inset-0 text-[#F0F0F0] flex flex-col items-center justify-center px-4">
      <h1 class="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center animate-fade-in-down">
        合作案例
      </h1>
      <p class="font-semibold text-xl sm:text-2xl mt-4 text-center animate-fade-in-up">
        這裡是RC Studio過往合作案例
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToContent() {
      const windowHeight = window.innerHeight;
      window.scrollTo({
        top: windowHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
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
</style>