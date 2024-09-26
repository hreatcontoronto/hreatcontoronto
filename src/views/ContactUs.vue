<template>
  <div class="text-white py-6">
    <div
      class="flex items-center justify-center font-bold xs:text-[4.5rem] lg:text-[3rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)]  [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      Contact Us
    </div>
    <div class="px-[5rem] lg:px-[10rem] text-center">
      <div
        class="font-bold xs:text-[3.6rem] lg:text-[1.2rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)]  [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        Feel free to comments and give any suggests for better in Toronto Hreatcon and the website.
      </div>
      <div
        class="font-bold xs:text-[3.6rem] lg:text-[1.2rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)]  [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
      >
        We will all to review and answer your questions.
      </div>
    </div>
    <div class="px-[5rem] lg:px-[16rem] py-[3rem] xs:text-[3rem] lg:text-[1rem] ">
      <div class="grid lg:grid-cols-2 gap-3 bg-white bg-opacity-25 p-6 rounded-xl">
        <div>
          <div class="text-center py-2 font-bold">Your Name</div>
          <input
            class="border border-white bg-transparent text-white rounded-lg p-2 font-bold w-full"
            type="text"
            v-model="submitData.name"
            placeholder="Your Name"
          />
          <div class="text-left">
            <span v-if="nameNull" class="text-red-500 font-bold">Your name must be fill!</span>
          </div>
        </div>
        <div>
          <div class="text-center py-2 font-bold">Your Email Address</div>
          <input
            class="border border-white bg-transparent text-white rounded-lg p-2 font-bold w-full"
            type="email"
            v-model="submitData.email"
            placeholder="Your Email Address"
          />
          <div class="text-left">
            <span v-if="emailCheck" class="text-red-500 font-bold"
              >Your email address format is invalid or cannot be blank!</span
            >
          </div>
        </div>
        <div class="lg:col-span-full">
          <div class="text-center py-2 font-bold">Your Question</div>
          <input
            class="border border-white bg-transparent text-white rounded-lg p-2 font-bold w-full"
            type="text"
            v-model="submitData.question"
            placeholder="Ask us your subject of question and suggestions"
          />
          <div class="text-left">
            <span v-if="questionNull" class="text-red-500 font-bold"
              >Your question must be fill!</span
            >
          </div>
        </div>
        <div class="lg:col-span-full">
          <div class="text-center py-2 font-bold">Your Question</div>
          <textarea
            rows="4"
            class="border border-white bg-transparent text-white rounded-lg p-2 font-bold w-full"
            v-model="submitData.content"
            placeholder="Say your comments and suggestions to us"
          />
        </div>
        <div class="lg:col-span-full py-3 flex justify-center gap-3">
          <button
            class="bg-[#2466c4] hover:bg-[#1a4e98] p-2 rounded-lg font-bold"
            @click="submitSendData()"
          >
            Submit
          </button>
          <button
            class="hover:bg-[#f15c5c] bg-[#fe7c7c] p-2 rounded-lg font-bold"
            @click="cleanForm()"
          >
            Clean
          </button>
        </div>
        <div v-if="thanks" class="lg:col-span-full text-center text-[1.2rem] grid grid-cols-1">
          <span>Thanks for your comments and suggestions!</span>
          <span>We will replay you as soon as possible.</span>
        </div>
        <div
          v-if="errorMsg"
          class="lg:col-span-full text-center text-[1.2rem] grid grid-cols-1 text-red-200"
        >
          <span>Oops! Something went wrong. You can submit again.</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'
import { apiData, postData } from '../tools/fetchData'

const founderDatas: any = ref([])

const submitData: any = ref({})
const emailCheck = ref(false)
const questionNull = ref(false)
const nameNull = ref(false)
const thanks = ref(false)
const errorMsg = ref(false)

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

async function loadFoundersData() {
  const data: any = await apiData(
    'm5hk70jq819ntpe/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0',
    'GET'
  )

  founderDatas.value = data.list
}

export default defineComponent({
  setup() {
    return {
      founderDatas,
      submitData,
      emailCheck,
      questionNull,
      nameNull,
      thanks,
      errorMsg
    }
  },
  created() {
    loadFoundersData()
  },
  methods: {
    async submitSendData() {
      questionNull.value = false
      nameNull.value = false
      questionNull.value = false

      const check = isValidEmail(submitData.value.email)

      if (!check) emailCheck.value = true
      if (!submitData.value.name) nameNull.value = true
      if (!submitData.value.question) questionNull.value = true

      if (check && submitData.value.name && submitData.value.question) {
        const data: any = await apiData('mi3piqcnu4xdkbp/records', 'POST', submitData.value)

        if (data.Id) {
          thanks.value = true
          this.cleanForm()
        } else {
          errorMsg.value = true
        }
      }
    },
    cleanForm() {
      submitData.value = {}
      questionNull.value = false
      nameNull.value = false
      questionNull.value = false
      thanks.value = false
      errorMsg.value = false
    }
  }
})
</script>
