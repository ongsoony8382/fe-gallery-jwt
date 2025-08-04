//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.isReady().then(()=>{ //프로미스 객체의 주소값을 리턴 
    app.mount('#app')
});


