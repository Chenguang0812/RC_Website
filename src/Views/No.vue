<template>
    <navbar />
    <div class="min-h-screen bg-[#F0F0F0] flex items-center justify-center p-4">
        <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="p-6 md:p-8">
                <h1 class="text-2xl md:text-3xl font-bold text-[#0C1014] mb-4">
                    即將推出精彩內容
                </h1>
                <p class="text-base text-[#0C1014] mb-6">
                    我們正在努力為您打造令人驚嘆的體驗。敬請期待！
                </p>
                <div class="space-y-4 mb-6">
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-[#E99797] rounded-full flex items-center justify-center mr-3">
                            <svg class="w-5 h-5 text-[#E25353]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                        </div>
                        <p class="text-sm text-[#0C1014]">新功能正在開發中</p>
                    </div>
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-[#E99797] rounded-full flex items-center justify-center mr-3">
                            <svg class="w-5 h-5 text-[#E25353]" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <p class="text-sm text-[#0C1014]">優化性能以提供極致體驗</p>
                    </div>
                </div>
                <div class="mb-6">
                    <h2 class="text-lg font-semibold text-[#0C1014] mb-3">想要收到最新消息嗎？</h2>
                    <div class="flex">
                        <input type="email" placeholder="輸入這裡什麼用也沒有:D"
                            class="flex-grow px-3 py-2 text-sm rounded-l-lg border-2 border-[#E99797] focus:outline-none focus:border-[#E25353] bg-white text-[#0C1014]">
                        <button
                            class="bg-[#E25353] text-white px-4 py-2 text-sm rounded-r-lg hover:bg-[#E99797] transition duration-300">
                            訂閱
                        </button>
                    </div>
                </div>
            </div>
            <div class="bg-[#E3E3E3] p-6 md:p-8">
                <h2 class="text-lg font-semibold text-[#0C1014] mb-3">開發進度</h2>
                <div class="w-full bg-white rounded-full h-3 mb-3">
                    <div class="bg-[#E25353] h-3 rounded-full" style="width: 70%"></div>
                </div>
                <p class="text-sm text-[#0C1014]">我們已經完成了 70% 的開發工作。</p>
            </div>
        </div>
    </div>
</template>

<script>
import navbar from '@/components/NavbarSection.vue'
export default {
    name: 'CompactUnderDevelopmentPage',
    components: {
        navbar,
    }
}
</script>
