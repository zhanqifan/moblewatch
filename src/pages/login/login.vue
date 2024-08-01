<script setup lang="ts">
import { ref } from 'vue'
const form = ref({
  username: '',
  password: '',
})
const toLogin = () => {}
</script>

<template>
  <view class="login">
    <view>注册</view>
    <view class="row_logo">
      <image src="@/static/images/logo.png" class="logo" mode="scaleToFill" />
    </view>
    <view class="login_form">
      <view class="login_text">登录</view>
      <view>您好,欢迎来到遇聊!</view>
      <input v-model="form.username" placeholder="用户名/邮箱" class="input_border" />
      <input v-model="form.password" placeholder="密码" class="input_border" />
    </view>
    <button class="login_btn" @click="toLogin">登录</button>
  </view>
</template>

<style lang="scss" scoped>
.row_logo {
  margin-top: 25%;
  display: flex;
  justify-content: center;
  .logo {
    width: 200rpx;
    height: 200rpx;
  }
}
.login_form {
  padding: 50rpx 70rpx;
  .login_text {
    font-weight: 900;
    font-size: 60rpx;
  }
  .input_border {
    margin-top: 50rpx;
    border-bottom: 1px solid gray;
  }
}
.login_btn {
  background-color: #38d36a;
  width: 400rpx;
  font-weight: 900;
  color: white;
  border-radius: 50rpx;
}
</style>
