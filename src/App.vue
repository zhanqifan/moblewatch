<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  uni.hideTabBar()
  console.log('App Launch')
})
onShow(() => {
  //⭐隐藏pages.json里配置的导航栏，使用封装的tabbar组件
  uni.hideTabBar()
  // console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
// 字体图标
@import 'uview-plus/theme.scss';
@font-face {
  font-family: 'test';
  src: url('https://blt.yukexx.com/images/Alimama.woff');
}
view,
navigator,
input,
scroll-view {
  box-sizing: border-box;
  font-family: test;
}

button::after {
  border: none;
}

swiper,
scroll-view {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

image {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}

// 两行省略
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
