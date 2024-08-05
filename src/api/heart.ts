import type {  HeartData, HeartMap, HeartParams } from '@/types/home'
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
export const getDistribution = (data: HeartParams) => {
  return request<HeartMap[]>({
    url: '/parentInfo/distribution',
    method: 'GET',
    data,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  })
}
