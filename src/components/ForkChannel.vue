<template>
    <div class="bg-[#E4E4E4] py-8 px-4 ">
      <div class="max-w-6xl mx-auto">
        <div class="mb-8 flex items-center">
          <div class="w-2 h-8 bg-[#E25353] mr-4"></div>
          <h2 class="font-bold text-4xl ">旗下頻道</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <a 
            v-for="channel in channels" 
            :key="channel.id" 
            :href="channel.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 aspect-square flex flex-col items-center justify-center p-6"
          >
            <img 
              :src="channel.image" 
              :alt="channel.name" 
              class="w-full h-auto max-w-[150px] max-h-[150px] rounded-lg mb-6"
            >
            <p class="text-center font-bold text-xl md:text-2xl">{{ channel.name }}</p>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AffiliatedChannels',
    data() {
      return {
        channels: [
          { id: 1, name: '亦凌YiLing', image: '/亦凌.jpg', url: 'https://www.youtube.com/@10_YiLing' },
          { id: 2, name: '亦凌YiLing', image: '/亦凌.jpg', url: 'https://www.youtube.com/@10_YiLing' },
          { id: 3, name: '亦凌YiLing', image: '/亦凌.jpg', url: 'https://www.youtube.com/@10_YiLing' },
          { id: 4, name: '亦凌YiLing', image: '/亦凌.jpg', url: 'https://www.youtube.com/@10_YiLing' },
          // 更多頻道
        ]
      }
    }
  }
  </script>