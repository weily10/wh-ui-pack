import WButton from './components/button/WButton.vue'
import WInput from './components/input/WInput.vue'
import './styles/index.scss'; 

export default {
    install: (app, options) => {
        app.component("WButton", WButton)
        app.component("WInput", WInput)
    }
}