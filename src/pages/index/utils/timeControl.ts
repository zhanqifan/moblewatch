import dayjs, { Dayjs } from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
// // 使用 ISO week 插件，确保星期一是每周的第一天
// dayjs.extend(isoWeek)
dayjs.extend(isoWeek)
/**
 * 获取指定日期所在周的日期范围和上一周的日期范围
 * @param date - 原始日期
 * @return 包含当前周和上一周日期范围的对象
 */
export const getWeekRange = (date: Dayjs) => {
  const dayjsDate = dayjs(date)
  //   // 获取当前周的起始和结束日期
  const currentWeekStart = dayjsDate.startOf('isoWeek') //所在周的周一
  const currentWeekEnd = dayjsDate.endOf('isoWeek') //所在周的周天

  return {
    currentWeek: {
      start: currentWeekStart.format('MM-DD'),
      end: currentWeekEnd.format('MM-DD'),
    },
    //
  }
}

// 函数：获取日期是星期几
export const getDayOfWeek = (date: string) => {
  const dayjsDate = dayjs(date)
  // 使用 day() 方法获取星期几，0 是周日，1 是周一，以此类推
  const dayOfWeek = dayjsDate.day()
  console.log(dayOfWeek)
  // 你可以定义一个数组来将数字转换为对应的星期几名称
  const daysOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

  return daysOfWeek[dayOfWeek]
}
export const isSameTime = (date: string) => {
  dayjs.extend(isSameOrAfter)
}
