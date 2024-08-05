import type { HeartCondition, HeartData, HeartParams } from '@/types/home'
import { request } from '@/utils/http'
// 获取实时心率
export const getChildHearts = (data: HeartParams) => {
  return request<HeartData>({
    url: '/parentInfo/heartRate',
    method: 'GET',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
}
// 获取心率分布
export const getDistribution = (data: HeartCondition) => {
  return request({
    url: '/teacher/distribution',
    method: 'GET',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
}
