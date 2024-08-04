import type { HeartData } from '@/types/home'
import { request } from '@/utils/http'

export const getChildHearts = () => {
  return request<HeartData>({
    url: '/parentInfo/heartRate',
  })
}
