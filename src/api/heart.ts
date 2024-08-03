import { request } from '@/utils/http'

export const getChildHearts = () => {
  return request({
    url: '/parentInfo/heartrate',
  })
}
