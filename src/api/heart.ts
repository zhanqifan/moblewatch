import type { HeartData, HeartMap, HeartParams } from '@/types/home'
import { request } from '@/utils/http'
// 获取实时心率
export const getChildHearts = (data: HeartParams) => {
  return request<HeartData>({
    url: '/parentInfo/heartRate',
    // url: 'https://apifoxmock.com/m2/3773810-3405678-default/202217385',
    method: 'GET',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
}
// 获取心率分布
export const getDistribution = (data: HeartParams) => {
  return request<HeartMap[]>({
    url: '/parentInfo/distribution',
    // url: 'https://apifoxmock.com/m2/3773810-3405678-default/202218875',
    method: 'GET',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
}
