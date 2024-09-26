<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { useGlobalStore } from '@/stores/test'
import { defineComponent } from 'vue'

const globalStore = useGlobalStore()

const onClick = () => {
  globalStore.routeKey++
}

function clickToIG() {
  window.open('https://www.instagram.com/torontoheartcon/', '_blank')!.focus()
}
</script>

<template>
  <div class="bg-cover w-screen min-h-screen bg-gradient-to-r from-[#330831] to-[#134b75] py-15 text-white">
    <div class="flex items-center justify-center">
      <img class="h-[180px]" src="/icon.png" />
    </div>
    <div class="py-2 text-[1.5rem] grid grid-cols-1 lg:grid-cols-6 gap-3 lg:px-[10rem]">
      <button @click="$router.push('/')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Home
        </div>
      </button>
      <button @click="$router.push('/about')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          About Us
        </div>
      </button>
      <button @click="$router.push('/cosplay-guests')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Cosplay Guests
        </div>
      </button>
      <button @click="$router.push('/photograhers')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Photograhers
        </div>
      </button>
      <!-- <button @click="$router.push('/')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Venders
        </div>
      </button>-->
      <button @click="$router.push('/contact-us')">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Contact Us
        </div>
      </button>
      <button @click="clickToIG()">
        <div
          class="text-white font-black hover:drop-shadow-lg [text-shadow:_0_5px_10px_rgb(99_102_241_/_0.8)] hover:[text-shadow:_0_10px_15px_#b5edff]"
        >
          Our Instagram
        </div>
      </button>
    </div>

    <div>
      <router-view />
    </div>
    <div class="py-12 text-white text-center text-[1.1rem]">
      © Toronto Hreatcon. All Rights Reserved. @ {{ new Date().getFullYear() }}
    </div>
  </div>
</template>

<style scoped></style>
