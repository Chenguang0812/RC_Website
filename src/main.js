import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import { scrollAnimation } from './directives/scrollAnimation'

const app = createApp(App)

app.directive('scroll-animation', scrollAnimation)
app.use(router)
app.mount('#app')
