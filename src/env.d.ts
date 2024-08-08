/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>

  export default component
}
interface ImportMetaEnv {
  readonly VITE_APP_CLIENT_ID: string
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_CONTEXT_PATH: string
  // 这里可以添加其他的环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
