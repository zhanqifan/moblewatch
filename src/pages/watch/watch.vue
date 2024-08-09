<script setup lang="ts">
const control = ref(true)
const start = () => {
  control.value = false
}
const end = () => {
  control.value = true
}
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
          /><text style="font-weight: 900"> 林荣嘟老师</text></view
        >
        <view class="grade">一年级三班</view>
      </view>
      <!-- 手环 -->
      <view class="watch">
        <!-- 手环连接 -->
        <view class="line"
          ><image
            src="/src/static/images/watch.png"
            style="height: 60rpx; width: 60rpx"
            mode="scaleToFill"
          />
          <text>手环连接:</text>
          <text style="color: red"> 42/</text>
          <text>54</text>
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
              src="/src/static/images/start.png"
              mode="scaleToFill"
              @click="start"
            />
            <image
              v-show="!control"
              src="/src/static/images/stop.png"
              mode="scaleToFill"
              @click="end"
            />
          </view>
        </view>
      </view>
      <!-- 学生实时运动信息 -->
      <view class="online_text">学生实时运动信息</view>
      <scroll-view scroll-y style="height: 950rpx">
        <view class="Card" v-for="item in 10">
          <view class="line"></view>
          <view class="card_box">
            <view class="name"
              ><image
                src="/src/static/images/stu.png"
                style="width: 56rpx; height: 56rpx; border-radius: 30rpx"
                mode="scaleToFill"
              />
              <text style="margin-left: 10rpx; font-weight: 900">李莉莉</text>
            </view>
            <view class="heart_date">
              <!-- 上 -->
              <view>
                <image
                  src="/src/static/images/heart.png"
                  style="height: 50rpx; width: 50rpx"
                  mode="scaleToFill"
                />
                <text>Heart Rate</text>
              </view>
              <!-- 下 -->
              <view>
                <text style="font-size: 50rpx">72</text>
                <text style="margin-left: 30rpx; color: #b5b8bc; font-weight: 900">bpm</text>
              </view>
            </view>
            <view class="battery-container">
              <view class="shell" :style="{ width: '90%' }">
                <view class="block" :style="{ background: '#3bc968' }"></view>
              </view>
              <view class="battery-text">90%</view>
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
      font-weight: 900;
      color: #b5b8bc;
    }
  }
  .watch {
    margin-top: 20rpx;
    background: linear-gradient(180deg, #f7f8fa 0%, #f4f5f5 100%);
    box-shadow: 0rpx 0rpx 16rpx 0rpx rgba(0, 0, 0, 0.1);
    border-radius: 16rpx;
    height: 254rpx;
    padding: 32rpx;
    .line {
      font-weight: 900;
    }
    .watchControl {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .switch_btn {
        image {
          height: 80rpx;
          width: 80rpx;
        }
      }
    }
  }
  .online_text {
    margin: 30rpx 0;
    font-weight: 900;
  }
  .Card {
    display: flex;
    background: #f7f8fa;
    border-radius: 16rpx;
    height: 180rpx;
    margin-bottom: 20rpx;
    .line {
      width: 16rpx;
      background: #58cca5;
      opacity: 0.2;
      border-radius: 8rpx 0rpx 0rpx 8rpx;
    }
    .card_box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40rpx;

      .heart_date {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .battery-container {
        width: 68rpx;
        height: 34rpx;
        border: 4rpx solid #3bc968;
        border-radius: 4rpx;
        top: -20rpx;
        position: relative;
        transform: scale(0.7);
        transform-origin: left top;
        margin-right: 10rpx;
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
        .battery-text {
          margin-top: 40rpx;
        }
      }
    }
  }
}
</style>
