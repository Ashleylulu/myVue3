import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import lodash from 'lodash'
import echarts from 'echarts'
import VueCron from 'vue-cron'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const app = createApp(App);
app.use(router);
app.use(lodash);
app.use(echarts);
app.use(VueCron);
app.use(ElementUI);
app.mount('#app')
