import { createApp } from 'vue';
import router from './router/index';
import { Swipe, SwipeItem, Button, Icon, Field, CellGroup, SwipeCell, Slider, Tabbar, TabbarItem } from 'vant';
import './elementindex.css';
import 'vant/lib/index.css';
import './style.css';
import App from './App.vue';

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
app.use(router);
app.mount('#app');
