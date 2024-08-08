const roles = {
  teacher: 'teacher',
  common: 'common',
}
//需要注意的是pagePath是绝对路径，前面需要加/，与pages.json中不同。
export default {
  [roles.teacher]: [
    {
      pagePath: '/pages/watch/watch',
      text: '手环',
      iconPath: 'home',
    },
    {
      pagePath: 'pages/my/my',
      text: '我的',
      iconPath: 'my',
    },
  ],
  [roles.common]: [
    {
      iconPath: 'home',
      text: '首页',
      pagePath: '/pages/index/index',
    },
    {
      pagePath: 'pages/my/my',
      text: '我的',
      iconPath: 'my',
    },
  ],
}
