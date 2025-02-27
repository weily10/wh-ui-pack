import WButton from './components/button/WButton.vue'
import WInput from './components/input/WInput.vue'
import WMenu from './components/menu/WMenu.vue'
import WMenuItem from './components/menu/WMenuItem.vue'
import WMenuBtn from './components/menu/WMenuBtn.vue'
import './styles/index.scss'; 

export default {
    install: (app, options) => {
        app.component("WButton", WButton)
        app.component("WInput", WInput)
        app.component("WMenu", WMenu)
        app.component("WMenuItem", WMenuItem)
        app.component("WMenuBtn", WMenuBtn)
        
    }
}