<template>
  <div class="bg-[#E3E3E3] dark:bg-[#1E1E1E] p-10 rounded-xl shadow-lg">
    <h2 class="text-4xl font-bold text-center mb-3 text-gray-800 dark:text-white">
      影音製作合作流程
    </h2>
    <h3
      class="text-2xl font-semibold text-center mb-12 text-[#E25353] dark:text-[#5c67ff]"
    >
      PRODUCTION PROCESS
    </h3>
    <div class="flex justify-between items-start">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="flex flex-col items-center flex-1 px-2 group"
      >
        <div
          class="w-28 h-28 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-[#E25353] to-[#E99797] dark:from-[#5553e2] dark:to-[#97a3e9] shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        >
          <p class="text-2xl font-bold text-white">{{ index + 1 }}</p>
        </div>
        <p
          class="text-xl font-medium text-center text-black dark:text-white transition-all duration-300 group-hover:text-[#E25353]"
        >
          {{ step.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductionProcess",
  data() {
    return {
      steps: [
        { id: 1, text: "溝通需求" },
        { id: 2, text: "影片報價" },
        { id: 3, text: "簽訂契約" },
        { id: 4, text: "剪輯影片" },
        { id: 5, text: "交付款項" },
      ],
    };
  },
};
</script>

<style scoped>
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.flex > div {
  animation: fadeInScale 0.6s ease-out forwards;
  animation-delay: calc(var(--index, 0) * 0.1s);
}
</style>
