<template>
  <div v-if="mounted">
    <button
      class="w-[6.125rem] h-[2.5rem] rounded-full p-1 bg-gray-200 dark:bg-[#6B6B6B] border-[1px] border-neutral-300 dark:border-neutral-600 relative transition-colors duration-500 ease-in"
      @click="toggleTheme"
    >
      <div
        v-if="isDarkMode"
        class="rounded-full w-8 h-8 border-gray-700 dark:bg-gray-700 relative dark:ml-[3.6rem] pointer-events-none transition-all duration-300 ease-out"
      >
        <p class="w-[50%] h-[100%] mr-auto ml-auto inline-block align-middle">
          深色
        </p>
      </div>
      <div
        v-else
        class="rounded-full border-gray-300 border-[1px] w-8 h-8 bg-white relative dark:ml-0 pointer-events-none transition-all duration-300 ease-out"
      >
        <p class="w-[50%] h-[100%] mr-auto ml-auto inline-block align-middle">
          亮色
        </p>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePreferredDark, useStorage } from '@vueuse/core';

const preferredDark = usePreferredDark();
const theme = useStorage('theme', preferredDark.value ? 'dark' : 'light');
const isDarkMode = ref(theme.value === 'dark');
const mounted = ref(false);

const setThemeClass = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  mounted.value = true;
  setThemeClass();
});

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  isDarkMode.value = theme.value === 'dark';
  setThemeClass();
};
</script>