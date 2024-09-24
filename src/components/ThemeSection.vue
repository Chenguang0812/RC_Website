<template>
  <div v-if="mounted">
    <button
      class="w-[5rem] h-[2rem] rounded-full p-1 bg-gray-200 dark:bg-[#6B6B6B] border-[1px] border-neutral-300 dark:border-neutral-600 relative transition-colors duration-500 ease-in"
      @click="toggleTheme"
    >
      <div
        v-if="isDarkMode"
        class="rounded-full w-5 h-5 border-gray-700 dark:bg-[#494949] relative dark:ml-[3rem] pointer-events-none transition-all duration-300 ease-out"
      ></div>
      <div
        v-else
        class="rounded-full border-gray-300 border-[1px] w-5 h-5 bg-white relative dark:ml-0 pointer-events-none transition-all duration-300 ease-out"
      ></div>
    </button>

    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue";
import { usePreferredDark, useStorage } from "@vueuse/core";

const theme = useStorage("theme", "dark");
const isDarkMode = ref(theme.value === "dark");
const mounted = ref(false);

const setThemeClass = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

onMounted(() => {
  mounted.value = true;
  setThemeClass();
});

// 提供 isDarkMode 供子組件使用
provide("isDarkMode", isDarkMode);

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  isDarkMode.value = theme.value === "dark";
  setThemeClass();
};
</script>
