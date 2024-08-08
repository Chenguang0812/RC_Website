<template>
    <footer class="bg-[#F0F0F0] text-black py-6">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between">
          <!-- 公司信息 -->
          <div class="mb-6 md:mb-0">
            <h4 class="text-lg font-semibold mb-2">聯絡我們</h4>
            <p class="mb-1">地址：台中市玫瑰區邊緣路淹水巷糖豆人號</p>
            <p class="mb-1">電話：(02) 1234-5678</p>
            <p>電子信箱：info@example.com</p>
          </div>
          
          <!-- 社交媒體 -->
          <div>
            <h4 class="text-lg font-semibold mb-2">跟隨我們</h4>
            <div class="flex space-x-4">
              <a href="#" target="_blank" class="hover:text-gray-400 transition-colors">
                <i class="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="" target="_blank" class="hover:text-gray-400 transition-colors">
                <i class="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://instagram.com" target="_blank" class="hover:text-gray-400 transition-colors">
                <i class="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
        
        <!-- 版权声明 -->
        <div class="mt-6 text-center border-t border-gray-700 pt-4">
          <p>&copy; {{ currentYear }} Copyright 2024. RC Studio.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
  </script>