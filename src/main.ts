import { createSSRApp } from 'vue'
import pinia from './stores'
import uviewPlus from 'uview-plus'
import App from './App.vue'
import tabBar from '@/components/tabBar/index.vue'
import myMinxin from '@/components/minix/index'
export function createApp() {
  const app = createSSRApp(App)
  app.component('tabBar', tabBar)
  app.mixin(myMinxin)
  app.use(uviewPlus)
  app.use(pinia)
  return {
    app,
  }
}
