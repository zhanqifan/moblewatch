<script setup lang="ts">
import { getStyleByType } from './utils/heart'
// import { urlTobase64 } from '@/utils/toBase64.js'
const control = ref(true)
const start = () => {
  control.value = false
}
const end = () => {
  control.value = true
}
const backImg = ref()
</script>
<template>
  <view>
    <view class="main">
      <view class="user">
        <view
          ><image
            src="https://cdn.uviewui.com/uview/album/1.jpg"
            mode="scaleToFill"
            class="user_img"
          /><text> 林荣嘟老师</text></view
        >
        <uni-icons custom-prefix="iconfont" type="icon-shouji" size="30"></uni-icons>

        <view class="grade">一年级三班</view>
      </view>
      <!-- 手环 -->
      <view class="watch">
        <!-- 手环连接 -->
        <view class="line"
          ><image
            src="@/static/images/watch.png"
            style="height: 60rpx; width: 60rpx"
            mode="scaleToFill"
          />
          <text>手环连接:</text>
          <text> 42</text>
          <text>/54</text>
        </view>
        <view class="watchControl">
          <!-- 计时时间 -->
          <view clsss="watchTime" style="margin-top: 20rpx">
            <view style="font-size: 30rpx">计时时间</view>
            <view style="font-size: 48rpx">00:00:00</view>
          </view>
          <!-- 按钮 -->
          <view class="switch_btn">
            <image
              v-show="control"
              src="http://38.55.232.204:8087/images/start.png"
              mode="scaleToFill"
              @click="start"
            />
            <image
              v-show="!control"
              src="http://38.55.232.204:8087/images/stop.png"
              mode="scaleToFill"
              @click="end"
            />
          </view>
        </view>
      </view>
      <!-- 学生实时运动信息 -->
      <view class="online_text">学生实时运动信息</view>
      <scroll-view scroll-y style="height: 950rpx">
        <view class="card_group">
          <view
            v-for="item in 6"
            :key="item"
            class="card_item"
            :style="{ background: getStyleByType('heartRateBackground', 72) }"
          >
            <view
              class="status"
              :style="{ color: 72 > 150 ? '#4abc7a' : getStyleByType('heartRateColor', 70) }"
              >{{ getStyleByType('statusColor', 72) }}</view
            >
            <view class="top">
              <view>李莉莉</view>
              <view class="battery-container">
                <view class="shell" :style="{ width: 90 + '%' }">
                  <view
                    class="block"
                    :style="{ background: getStyleByType('batteryColor', 90) }"
                  ></view>
                </view>
                <view style="color: #959aa0">90%</view>
              </view>
            </view>
            <view class="heart">
              <text class="heart_rate" :style="{ color: getStyleByType('heartRateColor', 72) }"
                >72
              </text>
              <text style="color: #959aa0; font-size: 25rpx">bpm</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
    <tabBar :selected="0" />
  </view>
</template>

<style lang="scss" scoped>
.main {
  padding: 20rpx 30rpx;
  // font-family: iconfont;

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .user_img {
      width: 80rpx;
      height: 80rpx;
      border-radius: 40rpx;
    }
    .grade {
      color: #b5b8bc;
    }
  }
  .watch {
    margin-top: 20rpx;
    // background: linear-gradient(180deg, #f7f8fa 0%, #f4f5f5 100%);
    box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(0, 0, 0, 0.1);
    border-radius: 16rpx;
    height: 254rpx;
    color: #f7f8fa;
    padding: 32rpx;
    background-image: url('http://38.55.232.204:8087/images/man.png');
    background-position: -20rpx center;
    background-size: cover; /* 图片缩放至覆盖整个背景区域，可能会裁剪图片 */

    .watchControl {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .switch_btn {
        margin-right: -10rpx;
        margin-bottom: -30rpx;
        image {
          height: 80rpx;
          width: 80rpx;
        }
      }
    }
  }
  .online_text {
    margin: 30rpx 0;
  }

  .card_group {
    display: flex;
    flex-wrap: wrap; // 允许换行
    gap: 20rpx; // 控制卡片之间的间距
    .card_item {
      width: 48%; // 每行两个卡片，减去间距的一半
      margin-bottom: 20rpx; // 控制行之间的间距
      background-color: #f7f8fa;
      border-radius: 16rpx;
      padding: 20rpx;
      height: 164rpx;
      position: relative;
      box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);

      .status {
        top: 5rpx;
        left: 5rpx;
        font-size: 12px;
        color: #4abc7a;
        position: absolute;
        width: 50rpx;
      }
      .top {
        display: flex;
        align-items: center;
        margin-top: 10rpx;
        justify-content: space-between;
        padding: 0rpx 20rpx;
        .battery-container {
          width: 68rpx;
          height: 34rpx;
          border: 4rpx solid #3bc968;
          border-radius: 4rpx;
          position: relative;
          transform: scale(0.7);
          transform-origin: left top;
          &:after {
            content: '';
            display: block;
            height: 12rpx;
            width: 4rpx;
            position: absolute;
            background: #3bc968;
            right: -8rpx;
            top: 0;
            bottom: 0;
            margin: auto 0;
          }

          .shell {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 2rpx;
            background: #f8fafc;
            .block {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .heart {
        padding: 10rpx 20rpx;
        .heart_rate {
          font-size: 45rpx;
        }
      }
    }
  }
}
</style>
