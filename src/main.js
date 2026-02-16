import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'

const app = createApp(App)

app.use(router)

app.component(BaseButton)
app.component(BaseCard)

app.mount('#app')
