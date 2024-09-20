<template>
  <div
    class="bg-[#E3E3E3] dark:bg-[#1E1E1E] p-10 flex flex-col md:flex-row items-start transition-colors duration-300"
  >
    <div class="flex-1 mt-4">
      <div class="flex items-center mb-4">
        <div class="w-2 h-10 bg-[#E25353] dark:bg-[#5c67ff] mr-4" />
        <div>
          <p class="text-[#000000] dark:text-[#FFFFFF] text-4xl font-bold">關於我們</p>
        </div>
      </div>
      <div>
        <p class="text-lg font-bold text-[#3A3A3A] dark:text-[#CCCCCC] max-w-2xl">
          玫瑰編碼是個以剪輯與設計為興趣的人共同成立的新媒體工作室<br />
          進行接洽各類商業合作，提供客戶品質上的保證和影片多樣性發展。
        </p>
      </div>
    </div>
    <div class="w-52 h-52 mt-2 md:mx-0">
      <img
        src="/a7y6o-j1upn.webp"
        alt="Logo"
        class="w-full h-full object-contain dark:filter dark:brightness-90 dark:contrast-125"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>
