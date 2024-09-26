<template>
  <div class="text-white py-6">
    <div
      class="flex items-center justify-center font-bold text-[3rem] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      Photograhers
    </div>
    <div
      class="px-[5rem] text-center font-bold text-[1.6rem] [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
    >
      We invited these photograhers coming to Toronto Hreatcon!
    </div>
    <div class="px-[5rem] lg:px-[8rem] py-12 grid lg:grid-cols-2 gap-6">
      <template v-for="photograherData of photograherDatas" v-bind:key="photograherData">
        <div :id="photograherData.id">
          <div class="grid lg:grid-cols-2 gap-2 bg-[#392348]/40 hover:bg-[#392348]/60 rounded-xl">
            <div>
              <img
                class="w-[100%] rounded-xl"
                v-if="photograherData.photo && photograherData.photo.length > 0"
                :src="photograherData.photo[0].thumbnails.card_cover.signedUrl"
              />
            </div>
            <div class="py-3 lg:px-1 sm:px-[1rem] xs:px-[1rem]">
              <div
                class="font-black text-[1.5rem] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                {{ photograherData.name }}
              </div>
              <div
                v-if="photograherData.igName"
                @click="goToPage(photograherData.igUrl)"
                class="underline font-black text-[1.1rem] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                @{{ photograherData.igName }}
              </div>
              <div
                v-if="photograherData.personURL"
                @click="goToPage(photograherData.personURL)"
                class="underline font-black text-[1.1rem] [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
              >
                Personal Website
              </div>
              <div class="lg:text-[0.95rem]  sm:text-[1.2rem] py-3">
                {{ photograherData.description }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { apiData } from '../tools/fetchData'

const photograherDatas: any = ref([])
const storyText = ref('')

async function loadPhotograherData() {
  const data: any = await apiData(
    'm5koub9b889tucj/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0',
    'GET'
  )
  photograherDatas.value = data.list
}

export default defineComponent({
  setup() {
    return {
      photograherDatas,
      storyText
    }
  },
  created() {
    loadPhotograherData()
  },
  methods: {
    goToPage(igUrl: string) {
      window.open(igUrl, '_blank')?.focus()
    }
  }
})
</script>
