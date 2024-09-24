<template>
  <div
    class="bg-[#E3E3E3] dark:bg-[#1E1E1E] p-4 sm:p-10 flex flex-col items-center justify-center transition-colors duration-300"
  >
    <div class="mb-8 sm:mb-12 relative flex justify-center w-full">
      <div class="bg-[#dadada] dark:bg-[#272727] -skew-x-12 inline-block">
        <p
          class="text-xl sm:text-2xl md:text-3xl font-bold py-2 px-4 sm:px-6 md:px-8 skew-x-12 inline-block relative z-10 text-gray-900 dark:text-gray-100"
        >
          影音後製合作流程
        </p>
        <div
          class="absolute bottom-0 right-0 w-full h-1 bg-[#E25353] dark:bg-[#5c67ff]"
        />
      </div>
    </div>

    <div
      class="flex flex-col items-center w-full max-w-xs sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center"
    >
      <div
        v-for="process in processes"
        :key="process.name"
        class="flex flex-col items-center mb-6 sm:mb-8 sm:mx-7"
      >
        <img
          :src="process.image"
          :alt="process.name"
          class="w-40 h-40 rounded-lg mb-4 sm:mb-4 object-cover"
        />
        <p
          class="text-center font-bold text-sm sm:text-base md:text-lg text-[#101010] dark:text-[#e0e0e0]"
        >
          {{ process.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      processes: [
        { image: "/需求討論.png", name: "1.需求討論" },
        { image: "/報價.png", name: "2.價格商議" },
        { image: "/簽約.png", name: "3.簽訂合約" },
        { image: "/交付作品.png", name: "4.交付作品" },
        { image: "/校稿確認.png", name: "5.校稿確認" },
        { image: "/交付款項.png", name: "6.交付款項" },
      ],
    };
  },
};
</script>
