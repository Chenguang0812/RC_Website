import { ref } from 'vue'

export default {
  name: 'ProductionProcess',
  setup() {
    const steps = ref([
      { id: 1, text: '溝通需求' },
      { id: 2, text: '影片報價' },
      { id: 3, text: '簽訂契約' },
      { id: 4, text: '剪輯影片' },
      { id: 5, text: '交付款項' },
    ])

    return { steps }
  },
  template: `
    <div class="bg-[#E3E3E3] p-8 rounded-lg">
      <h2 class="text-2xl font-bold text-center mb-8">影音製作合作流程</h2>
      <h3 class="text-xl font-semibold text-center mb-8">PRODUCTION PROCESS</h3>
      <div class="flex justify-between items-center">
        <div v-for="step in steps" :key="step.id" class="flex flex-col items-center">
          <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mb-2">
            <span class="text-gray-700 font-bold">{{ step.id }}</span>
          </div>
          <p class="text-sm text-center">{{ step.text }}</p>
        </div>
      </div>
    </div>
  `
}
