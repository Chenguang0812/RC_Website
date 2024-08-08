<template>
    <nav class="bg-transparent text-[#CCCCCC] font-bold text-2xl">
        <div class="absolute  top-4 left-4">
            <button @click="this.$router.push('/')">{{title}}</button>
        </div>
        <div class="absolute top-4 right-10 flex space-x-4 ">
            <button @click="this.$router.push('/')">首頁</button>
            <button @click="this.$router.push('/about')">關於我們</button>
            <button @click="this.$router.push('/about')">合作案例</button>
            <button @click="this.$router.push('/join')">加入我們</button>
            <button @click="this.$router.push('/contact')">聯繫我們</button>
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