import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './route/index'
import DefaultLayout from './layouts/default.vue'
import MemberLayout from './layouts/member.vue'

const app = createApp(App)
app.component('default-layout', DefaultLayout)
app.component('member-layout', MemberLayout)
app.use(router)
app.mount('#app')
