import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WButton from './components/button/WButton.vue'
import App from './App.vue'
 

const app = createApp(App)


app.use(WButton)
app.mount('#app')
