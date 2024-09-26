<template>
  <div class="text-white py-6">
    <div
      class="flex items-center justify-center font-bold xs:text-[4.5rem] lg:text-[3rem]  xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      Cosplayer Guests
    </div>
    <div
      class="px-[5rem] text-center font-bold xs:text-[3rem] xs:font-400 lg:text-[1.6rem]  xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      We invited these cosplayer guests coming to Toronto Hreatcon!
    </div>
    <div class="px-[5rem] lg:px-[8rem] py-12 grid lg:grid-cols-2 gap-6">
      <template v-for="cosplayerData of cosplayerDatas" v-bind:key="cosplayerData">
        <div :id="cosplayerData.id">
          <div class="grid lg:grid-cols-2 gap-2 bg-[#392348]/40 hover:bg-[#392348]/60 rounded-xl">
            <div>
              <img
                class="w-[100%] rounded-xl"
                v-if="cosplayerData.photo && cosplayerData.photo.length > 0"
                :src="cosplayerData.photo[0].thumbnails.card_cover.signedUrl"
              />
            </div>
            <div class="py-3 lg:px-1 sm:px-[3rem] xs:px-[1rem]">
              <div
                class="xs:text-[3rem]  font-black lg:text-[1.5rem]  xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                {{ cosplayerData.cosplayName }}
              </div>
              <div
                @click="goToIGPage(cosplayerData.igUrl)"
                class="underline font-black xs:text-[2.5rem]  lg:text-[1.1rem]  xs:[text-shadow:_0_15px_30px_rgb(99_102_241_/_0.8)] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                @{{ cosplayerData.igName }}
              </div>
              <div class="xs:text-[2.3rem] sm:text-[2rem] lg:text-[0.95rem] py-3">
                {{ cosplayerData.description }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'
import { apiData } from '../tools/fetchData'

const cosplayerDatas: any = ref([])
const storyText = ref('')

async function loadCoserGuestData() {
  const data: any = await apiData(
    'mavf2z1225c1on1/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0',
    'GET'
  )
  cosplayerDatas.value = data.list
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
      cosplayerDatas,
      storyText
    }
  },
  created() {
    loadCoserGuestData()
    loadStoryData()
  },
  methods: {
    goToIGPage(igUrl: string) {
      window.open(igUrl, '_blank')?.focus()
    }
  }
})
</script>
