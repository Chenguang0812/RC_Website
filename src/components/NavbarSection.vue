<template>
  <nav class="fixed top-0 left-0 right-0 bg-white z-50 shadow-md shadow-gray-500/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 w-1/4">
          <button
            class="fixed left-7 top-5 text-[#44474B] font-bold text-xl"
            @click="navigateTo('/')"
          >
            {{ title }}
          </button>
        </div>

        <div class="hidden xl:flex flex-grow justify-center w-1/2">
          <div class="flex items-center justify-center space-x-4">
            <button
              v-for="(item, index) in navItems"
              :key="item"
              class="text-[#44474B] hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-bold"
              @click="navigateTo(navPaths[index])"
            >
              {{ item }}
            </button>
          </div>
        </div>

        <div class="flex-shrink-0 w-1/4 flex justify-end">
          <button
            class="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-[#44474B] hover:text-[#44474B] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="toggleNavbar"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              :class="{ hidden: isOpen, block: !isOpen }"
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

    <div :class="{ block: isOpen, hidden: !isOpen }" class="xl:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button
          v-for="(item, index) in navItems"
          :key="item"
          class="text-[#44474B] hover:bg-gray-100 block px-3 py-2 rounded-md text-base w-full text-left"
          @click="navigateTo(navPaths[index])"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      title: "RC Studio",
      navItems: ["回到主頁", "關於我們", "整合行銷", "加入我們", "聯絡我們"],
      navPaths: ["/", "/about", "/case", "/joinUS", "/contactUS"],
    };
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    navigateTo(path) {
      this.$router.push(path);
      window.scrollTo(0, 0);
      this.isOpen = false;
    },
  },
};
</script>
