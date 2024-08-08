<template>
  <div class="bg-white py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <div class="mb-12 relative flex justify-center">
        <div class="bg-[#E0E0E0] -skew-x-12 inline-block">
          <p class="text-3xl font-bold py-2 px-8 skew-x-12 inline-block relative z-10">聯絡我們</p>
          <div class="absolute bottom-0 right-0 w-full h-1 bg-[#E99797]" />
        </div>
      </div>

      <form @submit.prevent="submitForm" class="space-y-6">
        <!-- 表單字段 -->
        <div v-for="(field, index) in fields" :key="index">
          <label :for="field.id" class="block text-sm font-medium text-gray-700">{{ field.label }} *</label>
          <component :is="field.type === 'textarea' ? 'textarea' : 'input'" v-model="form[field.model]"
            :type="field.type" :id="field.id" :rows="field.rows" required
            class="mt-1 block w-full rounded-md border-[#E99797] shadow-sm focus:border-[#E99797] py-3 px-4 text-base bg-white" />
        </div>

        <!-- 提交按鈕 -->
        <button type="submit"
          class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#E99797] hover:bg-[#e57f7f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E99797]">
          提交
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      fields: [
        { label: '名稱', type: 'text', id: 'name', model: 'name' },
        { label: '電子信箱', type: 'email', id: 'email', model: 'email' },
        { label: '連絡電話', type: 'tel', id: 'phone', model: 'phone' },
        { label: '需求說明', type: 'textarea', id: 'message', model: 'message', rows: 4 }
      ]
    }
  },
  methods: {
    submitForm() {
      // 提交後提示用戶
      alert('表單已提交！');
      this.resetForm();
    },
    resetForm() {
      for (let key in this.form) {
        this.form[key] = '';
      }
    }
  }
}
</script>
