//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia() 
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

router.isReady().then(()=>{ //프로미스 객체의 주소값을 리턴 
    app.mount('#app')
});


