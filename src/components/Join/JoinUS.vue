<template>
  <div class="h-16" />
  <div
    class="join-component relative bg-[#E3E3E3] dark:bg-[#303030] text-[#0C1014] dark:text-white overflow-hidden"
  >
    <ParticleGround class="particles-container" />
    <div class="container mx-auto px-4 py-24 relative z-10">
      <h2
        class="text-6xl font-bold mb-5 text-center relative z-10 text-[#E25353] dark:text-[#5c67ff]"
      >
        加入𝐑𝐂帝國
      </h2>
      <h2
        class="text-2xl font-bold mb-16 text-center relative z-10 text-[#E25353] dark:text-[#5c67ff]"
      >
        加入RC帝國<br />
        我們擁有良好的軍事裝備及糧食<br />
        抵抗林德豐攻擊
      </h2>

      <div
        class="max-w-4xl mx-auto bg-white dark:bg-[#3f3f3f] rounded-lg shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl transform hover:scale-[1.02] relative z-10"
      >
        <div class="p-12 space-y-8">
          <form class="space-y-8" @submit.prevent="submitForm">
            <div v-for="question in questions" :key="question.key" class="space-y-2">
              <label class="block text-lg font-medium text-[#0C1014] dark:text-white">
                {{ question.label }}{{ question.required ? " *" : "" }}
              </label>

              <div v-if="question.component === 'textarea'">
                <textarea
                  v-model="form[question.key]"
                  :rows="question.rows"
                  :class="inputClasses"
                  :required="question.required"
                />
              </div>

              <div v-if="question.component === 'input'">
                <input
                  v-model="form[question.key]"
                  type="text"
                  :class="inputClasses"
                  :required="question.required"
                />
              </div>

              <div v-if="question.component === 'select'">
                <select
                  v-model="form[question.key]"
                  :class="inputClasses"
                  :required="question.required"
                >
                  <option value="" disabled>請選擇</option>
                  <option
                    v-for="option in question.options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <div v-if="question.component === 'checkbox'">
                <div class="space-y-1">
                  <label
                    v-for="option in question.options"
                    :key="option.value"
                    class="inline-flex items-center mr-6 mb-2"
                  >
                    <input
                      v-model="form[question.key]"
                      type="checkbox"
                      :value="option.value"
                      class="form-checkbox h-5 w-5 text-[#E25353] border-[#E25353]"
                    />
                    <span class="ml-2 text-base">{{ option.label }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-center pt-6">
              <button
                type="submit"
                class="px-8 py-4 bg-[#E25353] dark:bg-[#5c67ff] text-white text-lg font-semibold rounded-md shadow-md hover:bg-[#E99797] focus:outline-none focus:ring-2 focus:ring-[#E25353] focus:ring-opacity-50 transform hover:scale-110 transition-all duration-300"
              >
                提交申請
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ParticleGround from "./ParticleGround.vue";

export default {
  components: {
    ParticleGround,
  },
  data() {
    return {
      form: {
        name: "",
        age: "",
        gender: "",
        experience: "",
        portfolio: "",
        currentJob: "",
        skills: [],
        position: "",
        introduction: "",
        availableTime: "",
        contact: "",
        questions: "",
      },
      questions: [
        {
          key: "name",
          label: "您的姓名（可附上藝名）",
          component: "input",
          required: true,
        },
        { key: "age", label: "您的年齡", component: "input", required: true },
        {
          key: "gender",
          label: "性別",
          component: "select",
          options: [
            { value: "男", label: "男" },
            { value: "女", label: "女" },
            { value: "其他", label: "其他" },
          ],
          required: true,
        },
        {
          key: "experience",
          label: "工作經驗（若無工作經驗請填「無」）",
          component: "textarea",
          rows: 3,
          required: true,
        },
        {
          key: "portfolio",
          label: "作品集（有的話請附網址，沒有則填「無」）",
          component: "input",
          required: true,
        },
        {
          key: "currentJob",
          label: "目前的工作和負責的崗位（如無則填「待業中」）",
          component: "input",
          required: true,
        },
        {
          key: "skills",
          label: "專業技能（可複選）（其他請填在自我介紹）",
          component: "checkbox",
          options: [
            { value: "Office", label: "Office" },
            { value: "Excel", label: "Excel" },
            { value: "Premiere", label: "Premiere" },
            { value: "Photoshop", label: "Photoshop" },
            { value: "After Effects", label: "After Effects" },
            { value: "無", label: "無" },
            { value: "其他", label: "其他" },
          ],
          required: true,
        },
        {
          key: "position",
          label: "應徵職務（若無明確目標則填「實習生」）",
          component: "input",
          required: true,
        },
        {
          key: "introduction",
          label: "自我介紹（興趣、特色、專長、經歷、其他事宜）",
          component: "textarea",
          rows: 4,
          required: true,
        },
        {
          key: "availableTime",
          label: "每週約莫可上線的時間",
          component: "input",
          required: true,
        },
        {
          key: "contact",
          label: "聯絡方式（Email、LINE、Discord、手機號碼皆可）",
          component: "input",
          required: true,
        },
        {
          key: "questions",
          label: "有什麼問題想問我們的嗎？",
          component: "textarea",
          rows: 3,
          required: false,
        },
      ],
      inputClasses:
        "mt-2 block w-full rounded-md bg-[#F0F0F0] border-[#E25353] focus:border-[#E25353] focus:ring focus:ring-[#E25353] focus:ring-opacity-50 text-[#0C1014] text-lg p-3",
    };
  },
  methods: {
    async submitForm() {
      const backendUrl = "https://rc-backend-7zm0.onrender.com/";

      // 手動檢查 checkbox 欄位
      if (this.form.skills.length === 0) {
        alert("請至少選擇一項專業技能！");
        return;
      }

      try {
        const response = await fetch(backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          alert(
            "表單提交成功！若於一個月內無收到面試通知，代表本專案不適合您，恕不另行通知，請勿重複投稿。"
          );
          this.resetForm();
        } else {
          const err = await response.text();
          throw new Error(err || "提交失敗");
        }
      } catch (error) {
        console.error("提交錯誤:", error);
        alert("提交時發生錯誤，請稍後再試。");
      }
    },

    resetForm() {
      this.form = {
        name: "",
        age: "",
        gender: "",
        experience: "",
        portfolio: "",
        currentJob: "",
        skills: [],
        position: "",
        introduction: "",
        availableTime: "",
        contact: "",
        questions: "",
      };
    },
  },
};
</script>

<style scoped>
.join-component {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.particle-container canvas {
  width: 100%;
  height: 100%;
}

@keyframes glowingOrb {
  0% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }

  100% {
    transform: scale(1);
    opacity: 0.5;
  }
}

.glowing-orbs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.glowing-orbs::before,
.glowing-orbs::after {
  content: "";
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(226, 83, 83, 0.3) 0%,
    rgba(226, 83, 83, 0) 70%
  );
  animation: glowingOrb 8s infinite;
}

.glowing-orbs::before {
  top: 10%;
  left: 10%;
}

.glowing-orbs::after {
  bottom: 10%;
  right: 10%;
  animation-delay: 4s;
}

.particles-container {
  width: 100vw;
  height: 175vh;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
