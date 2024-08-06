import dayjs from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
// 定义操作类型
type Operation = 'add' | 'subtract'

/**
 * 修改日期，根据传入的操作类型加一天或减一天
 * @param date - 原始日期
 * @param operation - 操作类型 ("add" 或 "subtract")
 * @returns 修改后的日期
 */
export const modifyDate = (date: string | Date, operation: Operation): string => {
  const dayjsDate = dayjs(date)

  if (operation === 'add') {
    return dayjsDate.add(1, 'day').format('YYYY-MM-DD')
  } else if (operation === 'subtract') {
    return dayjsDate.subtract(1, 'day').format('YYYY-MM-DD')
  } else {
    throw new Error('Invalid operation type. Use "add" or "subtract".')
  }
}

// 使用 ISO week 插件，确保星期一是每周的第一天
dayjs.extend(isoWeek)

/**
 * 获取指定日期所在周的日期范围和上一周的日期范围
 * @param date - 原始日期
 * @return 包含当前周和上一周日期范围的对象
 */
export const getWeekRange = (date: string | Date) => {
  const dayjsDate = dayjs(date)

  // 获取当前周的起始和结束日期
  const currentWeekStart = dayjsDate.startOf('isoWeek')
  const currentWeekEnd = dayjsDate.endOf('isoWeek')

  return {
    currentWeek: {
      start: currentWeekStart.format('YYYY-MM-DD'),
      end: currentWeekEnd.format('YYYY-MM-DD'),
    },
    //
  }
}
// // 示例用法
// const originalDate = '2024-08-05'

// const datePlusOne = modifyDate(originalDate, 'add')
// console.log(datePlusOne) // 输出: 2024-08-06

// const dateMinusOne = modifyDate(originalDate, 'subtract')
// console.log(dateMinusOne) // 输出: 2024-08-04
