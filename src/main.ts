import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './index.css'
import VueCountdown from '@chenfengyuan/vue-countdown'

// fas
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as all from '@fortawesome/free-brands-svg-icons'
library.add(all.faInstagram)

const refreshPage = () => {
  location.reload() // Reloads the current page
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('vue-countdown', VueCountdown)
app.component('fas-icon', FontAwesomeIcon)

app.mount('#app')
