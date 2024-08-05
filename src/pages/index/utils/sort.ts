import type { HeartMap } from '@/types/home'
export const customOrder = ['LOW', 'MIDDLE', 'HIGH', 'HIGHER', 'HIGHEST', 'HIGHEST_HIGHER'] //排序规则
// 转换字典
export const exchangeHeart = {
  LOW: '放松身体',
  MIDDLE: '暖身激活',
  HIGH: '高效燃脂',
  HIGHER: '心肺提升',
  HIGHEST: '强度冲击',
  HIGHEST_HIGHER: '极限突破',
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
