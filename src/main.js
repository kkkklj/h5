import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import { Lazyload,Image as VanImag } from 'vant';
const app = createApp(App);
[
  Lazyload,
  VanImag
].map(item => {
  app.use(item)
})


app.use(router);
app.mount('#app')
