<template>
  <footer class="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 py-12 font-sans">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- 公司信息 -->
        <div class="space-y-4">
          <h4 class="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2 inline-block">
            聯絡我們
          </h4>
          <div class="flex items-start space-x-3">
            <i class="fas fa-map-marker-alt mt-1 text-gray-600" />
            <p>台中市玫瑰區邊緣路淹水巷糖豆人號</p>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-phone-alt text-gray-600" />
            <p>(02) 1234-5678</p>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-envelope text-gray-600" />
            <p>info@example.com</p>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fab fa-line text-gray-600 text-xl"></i>
            <p>BANWE</p>
          </div>
        </div>

        <!-- 社交媒體 -->
        <div class="space-y-4">
          <h4 class="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2 inline-block">
            跟隨我們
          </h4>
          <div class="flex space-x-6">
            <a href="https://line.me/ti/p/hcaTOMPpzA" target="_blank" class="group">
              <div
                class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300">
                <i class="fab fa-line text-xl text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
            <a href="#" target="_blank" class="group">
              <div
                class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300">
                <i
                  class="fab fa-facebook-f text-xl text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
            <a href="https://discord.gg/sHUv6TK2As" target="_blank" class="group">
              <div
                class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300">
                <i class="fab fa-discord text-xl text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" class="group">
              <div
                class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300">
                <i
                  class="fab fa-instagram text-xl text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 版權聲明 -->
      <div class="mt-12 pt-8 border-t border-gray-300 text-center">
        <p class="text-sm text-gray-600">
          &copy; {{ currentYear }} Copyright RC Studio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
