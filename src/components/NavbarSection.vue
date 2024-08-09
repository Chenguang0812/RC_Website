<template>
  <nav class="bg-transparent text-[#CCCCCC] font-bold text-2xl">
    <div class="absolute  top-4 left-4">
      <button @click="$router.push('/')">
        {{ title }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: 'RC Studio'
    };
  },
}
</script>