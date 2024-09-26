<template>
  <div class="text-white py-6">
    <div
      class="flex items-center justify-center font-black xs:text-[4rem] sm:text-[3.5rem] lg:text-[1.5rem]  xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      Our Team
    </div>
    <div
      class="px-[5rem] text-center font-black xs:text-[4rem] sm:text-[3.5rem] lg:text-[1.5rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      We are organizers in the Toronto Hreatcon.
    </div>
    <div class="px-[5rem] lg:px-[8rem] py-12 grid lg:grid-cols-2 gap-6">
      <template v-for="founderData of founderDatas" v-bind:key="founderData">
        <div :id="founderData.id">
          <div class="grid lg:grid-cols-2 gap-2 bg-[#392348]/40 hover:bg-[#392348]/60 rounded-xl">
            <div>
              <img
                class="w-[100%] rounded-xl"
                v-if="founderData.photo && founderData.photo.length > 0"
                :src="founderData.photo[0].thumbnails.card_cover.signedUrl"
              />
            </div>
            <div class="py-3 lg:px-1 sm:px-[3rem] xs:px-[1rem]">
              <div
                class="font-black xs:text-[4rem] sm:text-[3.5rem] lg:text-[1.5rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                {{ founderData.founderName }}
              </div>
              <div
                class="font-black xs:text-[4rem] sm:text-[3.5rem] lg:text-[1.3rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                {{ founderData.cosPhoto }}
              </div>
              <div
                class="font-black xs:text-[4rem] sm:text-[3.5rem] lg:text-[1.3rem] xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                {{ founderData.role }}
              </div>
              <div class="xs:text-[2.3rem] sm:text-[2rem] lg:text-[0.95rem] py-2">
                {{ founderData.description }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div
      class="text-center font-bold text-[3rem] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      Story
    </div>
    <div class="text-center text-[1.3rem] lg:px-[16rem] px-[6rem] py-8">
      {{ storyText }}
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'
import { apiData } from '../tools/fetchData'

const founderDatas: any = ref([])
const storyText = ref('')

async function loadFoundersData() {
  const data: any = await apiData(
    'm5hk70jq819ntpe/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0',
    'GET'
  )
  founderDatas.value = data.list
}

async function loadStoryData() {
  const data: any = await apiData(
    'mnq7byj60tccwxf/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0',
    'GET'
  )
  console.log(data.list[0].description)
  storyText.value = data.list[0].description
  console.log
}

export default defineComponent({
  setup() {
    return {
      founderDatas,
      storyText
    }
  },
  created() {
    loadFoundersData()
    loadStoryData()
  }
})
</script>
