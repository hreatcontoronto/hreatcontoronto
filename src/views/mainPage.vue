<template>
  <div></div>
</template>
<script lang="ts">
import { ref, onMounted, createApp, defineComponent } from 'vue'

const page = ref([
  {
    name: 'About Me',
    path: 'about'
  },
  {
    name: 'Github Pin',
    path: 'github-pin'
  },
  {
    name: 'Experience',
    path: 'experience'
  }
])
</script>
