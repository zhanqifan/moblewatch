import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import dotenv from 'dotenv'
dotenv.config() // 手动加载 .env 文件中的环境变量
// https://vitejs.dev/config/

export default defineConfig({
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
  plugins: [uni()],
})
