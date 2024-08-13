<template>
  <footer
    class="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 py-12 font-sans"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- 公司信息 -->
        <div class="space-y-4">
          <h4
            class="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2 inline-block"
          >
            聯絡我們
          </h4>
          <div class="flex items-center space-x-3">
            <i class="fas fa-phone-alt text-gray-600" />
            <p>0972-606-387</p>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fab fa-line text-gray-600 text-xl" />
            <p>BANWE</p>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fab fa-discord text-gray-600" />
            <p>rc_yiling.</p>
          </div>
          <div class="flex items-center space-x-3">
            <i class="fas fa-envelope text-gray-600" />
            <p class="break-all">fong125463@gmail.com</p>
          </div>
          <div class="flex items-start space-x-3">
            <i class="fas fa-map-marker-alt mt-1 text-gray-600" />
            <p class="break-words">臺中市北屯區大坑里東山路二段100巷10弄11號1樓</p>
          </div>
        </div>

        <!-- 社交媒體 -->
        <div class="space-y-4">
          <h4
            class="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2 inline-block"
          >
            跟隨我們
          </h4>

          <div class="flex flex-wrap gap-4">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              target="_blank"
              class="group"
            >
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300"
              >
                <i
                  :class="[
                    'text-lg sm:text-xl text-gray-700 group-hover:text-white transition-colors duration-300',
                    social.icon,
                  ]"
                />
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
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socials: [
        { icon: "fab fa-line", link: "https://line.me/ti/p/hcaTOMPpzA" },
        { icon: "fab fa-discord", link: "https://discord.gg/sHUv6TK2As" },
        { icon: "fab fa-youtube", link: "https://www.youtube.com/@RC_Studio" },
        { icon: "fab fa-facebook-f", link: "https://rcstudio.tw/no" },
        { icon: "fab fa-instagram", link: "https://www.instagram.com/rc_studio.tw/" },
        { icon: "fab fa-twitter", link: "https://rcstudio.tw/no" },
        { icon: "fab fa-twitch", link: "https://rcstudio.tw/no" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

@media (max-width: 640px) {
  .space-x-3 > * + * {
    margin-left: 0.5rem;
  }
}
</style>
