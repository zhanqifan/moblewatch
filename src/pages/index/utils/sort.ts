import type { HeartMap } from '@/types/home'
export const customOrder = ['LOW', 'MIDDLE', 'HIGH', 'HIGHER', 'HIGHEST'] //排序规则
// 转换字典
export const exchangeHeart = {
  LOW: '<86次/分',
  MIDDLE: '87-113次/分',
  HIGH: '114-142次/分',
  HIGHER: '160-170次/分',
  HIGHEST: '≥171次/分',
  // HIGHEST_HIGHER: '极限突破',
}
type key = 'grade' | 'time'
type CustomOrderType = (typeof customOrder)[number]
// 排序方法                   排序的数组      排序关键字   自定义顺序
export const categorySort = (arr: HeartMap[], key: key, customOrder: CustomOrderType[] = []) => {
  return arr.sort((a, b) => {
    // 如果有自定义排序规则
    if (customOrder.length > 0) {
      const aIndex = customOrder.indexOf(a[key] as CustomOrderType)
      const bIndex = customOrder.indexOf(b[key] as CustomOrderType)

      // 如果 a 和 b 都在自定义排序规则中
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex
      }

      // 如果只有 a 在自定义排序规则中
      if (aIndex !== -1) {
        return -1
      }

      // 如果只有 b 在自定义排序规则中
      if (bIndex !== -1) {
        return 1
      }

      // 如果 a 和 b 都不在自定义排序规则中，按默认规则排序
    }

    // 按默认规则排序
    if (a[key] > b[key]) return 1
    if (a[key] < b[key]) return -1
    return 0
  })
}
