<template>
  <div class="h-16" />
  <div
    class="contact-component bg-[#E3E3E3] dark:bg-[#303030] text-[#0C1014] overflow-hidden"
  >
    <ParticleGround />
    <div class="container mx-auto px-4 py-24 relative z-10">
      <h2
        class="text-6xl font-bold mb-5 text-center relative z-10 text-[#E25353] dark:text-[#5c67ff]"
      >
        聯絡我們
      </h2>
      <h2
        class="text-2xl font-bold mb-16 text-center relative z-10 text-[#E25353] dark:text-[#5c67ff]"
      >
        找對專業，成就你的事業。<br />
        只有您不敢提的需求，沒有RC做不到的承諾。<br />
        我們致力於成為您影片創作過程中的最佳夥伴！
      </h2>
      <div
        class="max-w-4xl mx-auto bg-white dark:bg-[#3f3f3f] text-[#0C1014] dark:text-white rounded-lg shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl transform hover:scale-[1.02] relative z-10"
      >
        <div class="p-12 space-y-8">
          <form class="space-y-8" @submit.prevent="submitForm">
            <div class="form-group space-y-2">
              名稱（可附上藝名） *
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="mt-2 block w-full rounded-md bg-[#F0F0F0] border-[#E25353] focus:border-[#E25353] focus:ring focus:ring-[#E25353] focus:ring-opacity-50 text-lg p-3"
              />
            </div>

            <div class="form-group space-y-2">
              電子信箱 *
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="mt-2 block w-full rounded-md bg-[#F0F0F0] border-[#E25353] focus:border-[#E25353] focus:ring focus:ring-[#E25353] focus:ring-opacity-50 text-lg p-3"
              />
            </div>

            <div class="form-group space-y-2">
              聯絡方式（LINE、Discord、手機號碼皆可）*
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="mt-2 block w-full rounded-md bg-[#F0F0F0] border-[#E25353] focus:border-[#E25353] focus:ring focus:ring-[#E25353] focus:ring-opacity-50 text-lg p-3"
              />
            </div>

            <div class="form-group space-y-2">
              需求簡易說明 *
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="mt-2 block w-full rounded-md bg-[#F0F0F0] border-[#E25353] focus:border-[#E25353] focus:ring focus:ring-[#E25353] focus:ring-opacity-50 text-lg p-3"
              />
            </div>

            <div class="flex items-center justify-center pt-6">
              <button
                type="submit"
                class="px-8 py-4 bg-[#E25353] dark:bg-[#5c67ff] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#E99797] focus:outline-none focus:ring-2 focus:ring-[#E25353] focus:ring-opacity-50 transform hover:scale-110 transition-all duration-300"
              >
                提交
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ParticleGround from "@/components/Join/ParticleGround.vue";
export default {
  components: {
    ParticleGround,
  },
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
          throw new Error("提交失敗");
        }
      } catch (error) {
        console.error("提交錯誤:", error);
        alert("提交時發生錯誤，請稍後再試。");
      }
    },
    resetForm() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = "";
      });
    },
  },
};
</script>

<style scoped>
.contact-component {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.form-group {
  position: relative;
}

.form-group label {
  position: absolute;
  top: -0.5rem;
  left: 0.75rem;
  background-color: #e3e3e3;
  padding: 0 0.25rem;
  font-size: 0.875rem;
  transition: all 0.2s ease-in-out;
}

.form-group input:focus + label,
.form-group textarea:focus + label {
  color: #e25353;
  top: -0.75rem;
  font-size: 0.75rem;
}
</style>
