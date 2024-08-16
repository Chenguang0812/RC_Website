<template>
  <div v-if="mounted">
    <button
      class="w-[4rem] h-[2rem] rounded-full p-0.5 bg-gray-200 dark:bg-[#6B6B6B] border-[1px] border-neutral-300 dark:border-neutral-600 relative transition-colors duration-500 ease-in"
      @click="toggleTheme"
    >
      <div
        v-if="isDarkMode"
        class="rounded-full w-5 h-5 bg-gray-700 dark:bg-[#383838] absolute left-[calc(100%-1.25rem)] transition-all duration-300 ease-out top-1.5"
      ></div>
      <div
        v-else
        class="rounded-full border-gray-300 border-[1px] w-5 h-5 bg-white absolute left-0 top-1.5 transition-all duration-300 ease-out"
      ></div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePreferredDark, useStorage } from "@vueuse/core";

const preferredDark = usePreferredDark();
const theme = useStorage("theme", preferredDark.value ? "dark" : "light");
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

const toggleTheme = () => {
  theme.value = theme.value === "dark" ? "light" : "dark";
  isDarkMode.value = theme.value === "dark";
  setThemeClass();
};
</script>
