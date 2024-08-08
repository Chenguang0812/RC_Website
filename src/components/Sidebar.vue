<template>
    <div class="font-bold text-xl">
      <!-- 汉堡菜单按钮 -->
      <button @click="toggleSidebar" class="fixed top-4 right-4 z-50 text-[#CCCCCC] focus:outline-none">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
  
      <!-- 侧边栏 -->
      <div :class="{'translate-x-0': isOpen, 'translate-x-full': !isOpen}" 
           class="fixed top-0 right-0 w-72 h-full bg-gradient-to-b from-[#44474B] to-[#2C2E30] rounded-l-3xl transform transition-transform duration-300 ease-in-out z-40 shadow-2xl">
        <div class="flex flex-col h-full pt-20 px-6 text-[#CCCCCC]">
          <button @click="navigateTo('/')" class="flex items-center py-3 px-4 rounded-lg hover:bg-[#555555] transition-colors">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            首頁
          </button>
          <button @click="navigateTo('/about')" class="flex items-center py-3 px-4 rounded-lg hover:bg-[#555555] transition-colors mt-2">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            關於我們
          </button>
          <button @click="navigateTo('/cases')" class="flex items-center py-3 px-4 rounded-lg hover:bg-[#555555] transition-colors mt-2">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
            合作案例
          </button>
          <button @click="navigateTo('/join')" class="flex items-center py-3 px-4 rounded-lg hover:bg-[#555555] transition-colors mt-2">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
            加入我們
          </button>
          <button @click="navigateTo('/contact')" class="flex items-center py-3 px-4 rounded-lg hover:bg-[#555555] transition-colors mt-2">
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            聯繫我們
          </button>
        </div>
      </div>
  
      <!-- 遮罩层 -->
      <div v-if="isOpen" @click="toggleSidebar" 
           class="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ease-in-out"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      },
      navigateTo(path) {
        this.$router.push(path);
        this.isOpen = false;
      }
    }
  }
  </script>