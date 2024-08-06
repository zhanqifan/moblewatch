import dayjs, { Dayjs } from 'dayjs'
import isoWeek from 'dayjs/plugin/isoWeek'

// 使用 ISO week 插件，确保星期一是每周的第一天
dayjs.extend(isoWeek)

/**
 * 获取指定日期所在周的日期范围和上一周的日期范围
 * @param date - 原始日期
 * @return 包含当前周和上一周日期范围的对象
 */
export const getWeekRange = (date: Dayjs) => {
  const dayjsDate = dayjs(date)

  // 获取当前周的起始和结束日期
  const currentWeekStart = dayjsDate.startOf('isoWeek')
  const currentWeekEnd = dayjsDate.endOf('isoWeek')

  return {
    currentWeek: {
      start: currentWeekStart.format('MM-DD'),
      end: currentWeekEnd.format('MM-DD'),
    },
    //
  }
}
