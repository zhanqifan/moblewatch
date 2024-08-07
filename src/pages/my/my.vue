<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()
</script>

<template>
  <view class="my">
    <view class="my_img">
      <up-image
        src="https://cdn.uviewui.com/uview/album/1.jpg"
        :radius="100"
        width="100"
        height="100"
        shape="circle"
      ></up-image>
    </view>
    <view class="base">基础信息</view>
    <view class="msg">
      <text>昵称</text>
      <text style="color: #c4c1c1">{{ memberStore.profile.nickName }}</text>
    </view>
    <up-divider text=""></up-divider>
    <view class="msg">
      <text>性别</text>
      <text style="color: #c4c1c1">保密</text>
    </view>
    <up-divider text=""></up-divider>
    <button @tap="memberStore.clearProfile()" style="float: right" size="mini" plain type="warn">
      退出登录
    </button>
  </view>
</template>

<style lang="scss">
.my {
  padding: 0 40rpx;
  .base {
    margin-top: 20rpx;
  }
  .msg {
    margin-top: 30rpx;
    display: flex;
    justify-content: space-between;
  }
}
.my_img {
  margin-top: 30rpx;
  display: flex;
  justify-content: center;
}
</style>
