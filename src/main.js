import { createApp } from 'vue';
import { Swipe, SwipeItem, Button, Icon, Field, CellGroup, SwipeCell, Slider, Tabbar, TabbarItem, Checkbox, CheckboxGroup, Popup, Toast, Image as VanImage } from 'vant';
import './elementindex.css';
import 'vant/lib/index.css';
import './style.css';
import App from './App.vue';
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App);

app.use(Swipe);
app.use(SwipeItem);
app.use(Button);
app.use(Icon);
app.use(Field);
app.use(CellGroup);
app.use(SwipeCell);
app.use(Slider);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Checkbox)
app.use(CheckboxGroup)
app.use(Popup)
app.use(Toast)
    .use(VanImage)
app.use(pinia)
app.use(router)
app.mount('#app');
