let mixin = {
  data() {
    return {
      title: '智慧体育',
      imgUrl: 'https://blt.yukexx.com/images/stu.png',
      path: '/pages/my/my',
    }
  },
  created() {
    //#ifdef MP-WEIXIN
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline'],
    })
    //#endif
  },
  onShareAppMessage(res) {
    return {
      title: this.title,
      imageUrl: this.imgUrl,
      path: '/pages/my/my',
    }
  },
  onShareTimeline(res) {
    return {
      title: this.title,
      imageUrl: this.imgUrl,
    }
  },
}

export default mixin
