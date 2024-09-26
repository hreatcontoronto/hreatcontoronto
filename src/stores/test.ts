import { defineStore } from 'pinia'

export type GlobalType = {
  routeKey: number
}

export const useGlobalStore = defineStore({
  id: 'global',
  state: (): GlobalType => ({
    routeKey: 0
  })
})
