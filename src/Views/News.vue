<template>
    <Navbar />
    <router-view ></router-view>
</template>
<script>
import Navbar from "@/components/Navbar.vue"
export default {
  name: 'News',
  components: {
    Navbar
}};
</script>