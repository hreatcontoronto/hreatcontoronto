<template>
  <div class="grid grid-cols-1 gap-2 px-[5rem] lg:px-[4rem] py-[10rem]">
    <div class="lg:px-[6rem] grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
      <iframe
        class="rounded-xl lg:col-sapn-full h-[100%] w-[100%]"
        :src="`https://www.google.com/maps/${baseEventData.googleMapLink}`"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>
      <div class="xl:col-span-3 xl:px-[8rem]">
        <div
          class="text-[2rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          {{ baseEventData.formattedHeldDate }} - {{ baseEventData.formattedCloseDate }}
        </div>
        <div class="py-2">
          <div
            class="text-[1.8rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
          >
            {{ baseEventData.address }}, {{ baseEventData.city }}, {{ baseEventData.provinceCode }}
          </div>
          <div
            class="text-[1.8rem] text-white font-black hover:drop-shadow-lg [text-shadow:_0_8px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
          >
            {{ baseEventData.postCode }}
          </div>
        </div>
        <div class="py-2">
          <div class="text-[1rem] text-white font-black hover:drop-shadow-lg">
            {{ baseEventData.description }}
          </div>
        </div>
        <div class="py-2">
          <button
            class="font-bold bg-[#241137] p-3 rounded-lg shadow-xl shadow-white/10 hover:bg-[#130126]"
            @click="loadAdmissionPage(baseEventData.TicketSaleURL)"
          >
            Buy Admission
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import { apiData } from '../tools/fetchData'

const baseEventData: any = ref({})

const footerData = ref({
  name: 'Felix Mak',
  email: 'felix9611.ca@gmail.com',
  year: new Date().getFullYear()
})

async function loadBaseInfo() {
  const data: any = await apiData(
    'me247s03emizeov/records?where=where%3D%28status%2Ceq%2C1%29&limit=25&shuffle=0&offset=0',
    'GET'
  )
  const eventData: any = data.list[0]

  const originalHeldDate = new Date(eventData.heldDate)
  const originalCloseDate = new Date(eventData.closeDate)

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York', // UTC-4 (Eastern Standard Time)
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }

  const optionsTime: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York', // UTC-4 (Eastern Standard Time)
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }

  const finalHeldDate = originalHeldDate.toLocaleString('en-US', options)

  let finalCloseDate = ''

  if (originalHeldDate.toDateString() === originalCloseDate.toDateString()) {
    finalCloseDate = originalCloseDate.toLocaleTimeString('en-US', optionsTime)
  } else {
    finalCloseDate = originalCloseDate.toLocaleString('en-US', options)
  }

  baseEventData.value = {
    ...eventData,
    formattedHeldDate: finalHeldDate,
    formattedCloseDate: finalCloseDate
  }
}

export default defineComponent({
  setup() {
    return {
      baseEventData,
      footerData
    }
  },
  created() {
    loadBaseInfo()
  },
  methods: {
    loadAdmissionPage(url: string) {
      window.open(url, '_blank')!.focus()
    }
  }
})
</script>
