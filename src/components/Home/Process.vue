<template>
  <div
    class="bg-[#E3E3E3] dark:bg-[#1E1E1E] p-10 flex flex-col items-center md:justify-center transition-colors duration-300"
  >
    <div class="mb-12 relative flex justify-center">
      <div class="bg-[#dadada] dark:bg-[#272727] -skew-x-12 inline-block">
        <p
          class="text-3xl font-bold py-2 px-8 skew-x-12 inline-block relative z-10 text-gray-900 dark:text-gray-100"
        >
          影音製作合作流程
        </p>
        <div
          class="absolute bottom-0 right-0 w-full h-1 bg-[#E25353] dark:bg-[#5c67ff]"
        />
      </div>
    </div>

    <div class="flex flex-wrap justify-center space-x-10 pb-4">
      <div
        v-for="process in process"
        :key="process.name"
        class="flex flex-col items-center"
      >
        <img
          :src="process.image"
          :alt="process.name"
          class="w-full h-auto max-w-[150px] max-h-[150px] rounded-lg mb-4 object-cover"
        />
        <p class="text-center font-bold text-xl text-[#101010] dark:text-[#e0e0e0]">
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
      process: [
        {
          image: "/需求討論.png",
          name: "1.需求討論",
        },
        {
          image: "/報價.png",
          name: "2.價格商議",
        },
        {
          image: "/簽約.png",
          name: "3.簽訂合約",
        },
        {
          image: "/交付作品.png",
          name: "4.交付作品",
        },
        {
          image: "/校稿確認.png",
          name: "5.校稿確認",
        },
        {
          image: "/交付款項.png",
          name: "6.交付款項",
        },
      ],
    };
  },
};
</script>
