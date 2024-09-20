<template>
  <div>
    <!-- Desktop Navbar (大螢幕) -->
    <nav
      v-if="!isMobile"
      class="fixed top-0 left-0 right-0 bg-white dark:bg-[#383838] z-50 transition-all duration-300 ease-in-out shadow-md shadow-gray-500/50 dark:shadow-[#5a5a5a]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0 w-1/4">
            <button
              class="fixed left-7 top-5 text-[#44474B] dark:text-[#ffffff] font-bold text-xl"
              @click="navigateTo('/')"
            >
              {{ title }}
            </button>
          </div>

          <!-- Desktop navigation -->
          <div class="hidden xl:flex flex-grow justify-center w-1/2">
            <div class="relative left-5 items-center justify-center space-x-4">
              <button
                v-for="(item, index) in navItems"
                :key="item"
                class="text-[#44474B] dark:text-[#ffffff] hover:bg-gray-100 dark:hover:bg-[#3d3d3d] px-3 py-2 rounded-md text-lg font-bold transition-colors duration-200"
                @click="navigateTo(navPaths[index])"
              >
                {{ item }}
              </button>
            </div>
          </div>

          <div class="flex-shrink-0 w-1/4 flex justify-end items-center">
            <theme class="fixed right-10 top-4" />
          </div>
          <div class="mr-2 xl:mr-0">
            <div class="relative top-0 right-60 items-center space-x-2 text-2xl">
              <a
                v-for="(social, index) in socials"
                :key="index"
                :href="social.link"
                target="_blank"
                class="group"
              >
                <div
                  class="w-10 h-10 bg-gray-300 dark:bg-[#6B6B6B] rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300"
                >
                  <i
                    :class="[
                      ' text-gray-700 dark:text-[#383838] group-hover:text-white transition-colors duration-300',
                      social.icon,
                    ]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Sidebar (小螢幕) -->

    <nav
      v-if="isMobile"
      class="fixed top-0 left-0 right-0 bg-white dark:bg-[#383838] z-50 transition-all duration-300 ease-in-out shadow-md shadow-gray-500/50 dark:shadow-[#5a5a5a]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex-shrink-0">
            <button
              class="text-[#44474B] dark:text-[#ffffff] font-bold text-xl"
              @click="navigateTo('/')"
            >
              {{ title }}
            </button>
          </div>
          <div class="fixed right-40 items-center space-x-2 text-2xl">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              target="_blank"
              class="group"
            >
              <div
                class="w-10 h-10 bg-gray-300 dark:bg-[#6B6B6B] rounded-full flex items-center justify-center group-hover:bg-gray-400 transition-colors duration-300"
              >
                <i
                  :class="[
                    ' text-gray-700 dark:text-[#383838] group-hover:text-white transition-colors duration-300',
                    social.icon,
                  ]"
                />
              </div>
            </a>
          </div>
          <!-- Overlay -->
          <div
            v-if="isOpen"
            class="fixed inset-0 bg-black bg-opacity-50 z-40"
            @click="toggleNavbar"
          ></div>
          <div
            :class="{ 'translate-x-0': isOpen, 'translate-x-full': !isOpen }"
            class="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-[#383838] shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out z-50 rounded-l-3xl"
          >
            <div class="px-4 pt-20 pb-3 space-y-1">
              <button
                v-for="(item, index) in navItems"
                :key="item"
                class="text-[#44474B] dark:text-[#ffffff] hover:bg-[#e2e2e2] dark:hover:bg-[#4d4d4d] block px-3 py-2 rounded-md text-base w-full text-left transition-colors duration-200"
                @click="navigateTo(navPaths[index])"
              >
                {{ item }}
              </button>
            </div>
          </div>
          <div class="flex items-center">
            <theme class="fixed right-16 top-4" />

            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-[#383838] dark:text-[#ffffff] hover:bg-gray-100 dark:hover:bg-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#383838] dark:focus:ring-[#ffffff] transition-colors duration-200"
              @click="toggleNavbar"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                :class="{ hidden: isOpen, block: !isOpen }"
                class="fixed h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                :class="{ block: isOpen, hidden: !isOpen }"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div
      :class="{ 'xl:ml-0 ml-64': isOpen && isMobile }"
      class="transition-margin duration-300 ease-in-out"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/ThemeSection.vue";

export default {
  components: {
    Theme,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      socials: [{ icon: "fab fa-line", link: "https://line.me/ti/p/hcaTOMPpzA" }],
      isOpen: false,
      title: "RC Studio",
      navItems: ["回到主頁", "關於我們", "整合行銷", "加入我們", "聯絡我們"],
      navPaths: ["/", "/about", "/case", "/joinUS", "/contactUS"],
      isMobile: window.innerWidth < 1280, // 以 1280px 作為區分
    };
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    navigateTo(path) {
      this.$router.push(path);
      window.scrollTo(0, 0);
      if (this.isMobile) {
        // Close sidebar on navigation for mobile
        this.isOpen = false;
      }
    },
  },
  mounted() {
    // 監聽視窗尺寸變化
    window.addEventListener("resize", this.updateDevice);
  },
  beforeUnmount() {
    // 移除視窗尺寸監聽
    window.removeEventListener("resize", this.updateDevice);
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    navigateTo(path) {
      this.$router.push(path);
      window.scrollTo(0, 0);
      if (this.isMobile) {
        this.isOpen = false;
      }
    },
    updateDevice() {
      this.isMobile = window.innerWidth < 1280;
    },
  },
};
</script>
