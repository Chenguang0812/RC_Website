<template>
  <div class="bg-white dark:bg-[#303030] py-8 px-4">
    <div class="max-w-2xl mx-auto">
      <div class="mb-12 relative flex justify-center">
        <div class="bg-[#E0E0E0] dark:bg-[#272727] -skew-x-12 inline-block">
          <p
            class="text-3xl font-bold py-2 px-8 skew-x-12 inline-block relative z-10 text-gray-900 dark:text-gray-100"
          >
            聯絡我們
          </p>
          <div
            class="absolute bottom-0 right-0 w-full h-1 bg-[#E25353] dark:bg-[#5c67ff]"
          />
        </div>
      </div>

      <form class="space-y-6" @submit.prevent="submitForm">
        <div>
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >名稱（可附上藝名） *</label
          >
          <input
            id="name"
            v-model="form.name"
            type="text"
            required
            class="mt-1 block w-full rounded-md border-[#E99797] shadow-sm focus:border-[#E99797] py-3 px-4 text-base bg-white dark:bg-[#3d3d3d] dark:text-gray-100 dark:border-gray-600"
          />
        </div>

        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >電子信箱 *</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            required
            class="mt-1 block w-full rounded-md border-[#E99797] shadow-sm focus:border-[#E99797] py-3 px-4 text-base bg-white dark:bg-[#3d3d3d] dark:text-gray-100 dark:border-gray-600"
          />
        </div>

        <div>
          <label
            for="phone"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >聯絡方式（LINE、Discord、手機號碼皆可） *</label
          >
          <input
            id="phone"
            v-model="form.phone"
            type="tel"
            required
            class="mt-1 block w-full rounded-md border-[#E99797] shadow-sm focus:border-[#E99797] py-3 px-4 text-base bg-white dark:bg-[#3d3d3d] dark:text-gray-100 dark:border-gray-600"
          />
        </div>

        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >需求簡易說明 *</label
          >
          <textarea
            id="message"
            v-model="form.message"
            rows="4"
            required
            class="mt-1 block w-full rounded-md border-[#E99797] shadow-sm focus:border-[#E99797] py-3 px-4 text-base bg-white dark:bg-[#3d3d3d] dark:text-gray-100 dark:border-gray-600"
          />
        </div>

        <!-- 提交按鈕 -->
        <button
          type="submit"
          class="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#E99797] dark:bg-[#5c67ff] hover:bg-[#e57f7f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E99797] dark:hover:bg-[#9098ff] dark:focus:ring-offset-gray-800"
        >
          提交
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const webhookUrl =
        "https://discordapp.com/api/webhooks/1271522136837591081/j8jOWK3SolTwzty0WdSIvZ8CNsYXTus0554loD7IBAN9l2UDRavREQH_FLbSFvYwdHXr";

      const message = {
        content:
          `**聯絡我們表單提交**\n\n` +
          `**名稱:** ${this.form.name}\n` +
          `**電子信箱:** ${this.form.email}\n` +
          `**連絡電話:** ${this.form.phone}\n` +
          `**需求說明:** ${this.form.message}`,
      };

      console.log("發送的數據:", message);
      try {
        const response = await axios.post(webhookUrl, message, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 204) {
          alert("表單提交成功！請耐心等候，我們將於3日內與您聯繫。");
          this.resetForm();
        } else {
          console.log("響應錯誤:", response);
          throw new Error("提交失敗");
        }
      } catch (error) {
        console.error("提交錯誤:", error);
        alert("提交時發生錯誤，請稍後再試。");
      }
    },
    resetForm() {
      for (let key in this.form) {
        this.form[key] = "";
      }
    },
  },
};
</script>
