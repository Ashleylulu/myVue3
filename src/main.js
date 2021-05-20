import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router'
import lodash from 'lodash'
import echarts from 'echarts'
import VueCron from 'vue-cron'

const app = createApp(App);
app.use(router);
app.use(lodash);
app.use(echarts);
app.use(VueCron);
app.use(ElementPlus);
app.mount('#app')
