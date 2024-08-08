<template>
    <div class="bg-white  py-8 px-4">
        <div class="max-w-4xl mx-auto">
            <div class="mb-12 relative flex justify-center">
                <div class="bg-[#E0E0E0] -skew-x-12 inline-block">
                    <p class="text-3xl font-bold py-2 px-8 skew-x-12 inline-block relative z-10">最新消息</p>
                    <div class="absolute bottom-0 right-0 w-full h-1 bg-[#E99797]" />
                </div>
            </div>
            <!-- 新聞 -->
            <div class="space-y-6">
                <button 
                v-for="(item, index) in newsItems"
                :key="index"
                @click="navigateTo(item.path)"
                class="block w-full text-left bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#E99797]">
                    <div class="flex">
                        <!-- 文字 -->
                        <div class="flex-1 p-4">
                            <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
                            <p class="text-gray-500 text-sm">{{ item.date }}</p>
                        </div>
                        <!-- 圖片 -->
                        <div class="w-1/5 flex-shrink-0">
                            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            newsItems: [
                {
                    title: '最新》林德豐一部片剪了27天，跳抖肩舞懺悔。',
                    image: '/道歉.png',
                    date: '2024年8月1日 週四 下午4:37',
                    path: '/news/new1' // 修改为路由路径
                },
                {
                    title: '最新》林德豐一部片剪了27天，跳抖肩舞懺悔。',
                    image: '/道歉.png',
                    date: '2024年8月1日 週四 下午4:37',
                    path: '/news/new2' // 修改为路由路径
                },
                {
                    title: '最新》林德豐一部片剪了27天，跳抖肩舞懺悔。',
                    image: '/道歉.png',
                    date: '2024年8月1日 週四 下午4:37',
                    path: '/news/new3' // 修改为路由路径
                }, 
            ]
        };
    },
    methods: {
        navigateTo(path) {
            this.$router.push(path);
        }
    }
};
</script>