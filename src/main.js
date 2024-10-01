import { createApp } from 'vue';
import { Swipe, SwipeItem, Button, Icon, Field, CellGroup, SwipeCell, Slider, Tabbar, TabbarItem, Checkbox, CheckboxGroup, Popup, Toast, Image as VanImage } from 'vant';
import './elementindex.css';
import 'vant/lib/index.css';
import './style.css';
import App from './App.vue';
import router from './router'
// import router from './test/router/index.js'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
const pinia = createPinia()



pinia.use(piniaPluginPersistedstate);
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


// 在 main.js 或 main.ts 文件中

