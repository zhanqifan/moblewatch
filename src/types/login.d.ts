export interface LoginData {
  tenantId?: string
  username?: string
  password?: string
  rememberMe?: boolean
  socialCode?: string
  socialState?: string
  source?: string
  code?: string
  uuid?: string
  clientId?: string
  grantType?: string
}
export interface LoginResult {
  access_token: string
}
