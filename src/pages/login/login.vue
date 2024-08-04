<script setup lang="ts">
import { login } from '@/api/login'
import { useMemberStore } from '@/stores'
import { ref } from 'vue'

const user = useMemberStore()
const formData = ref({
  username: '',
  password: '',
})
const form = ref()
const rules = ref({
  username: {
    rules: [{ required: true, errorMessage: '用户名不为空' }],
  },
  password: {
    rules: [
      { required: true, errorMessage: '密码不为空' },
      {
        minLength: 5,
        maxLength: 10,
        errorMessage: '用户密码长度必须在5到20个字符之间',
      },
    ],
  },
})
const loading = ref(false)
const toLogin = async () => {
  form.value
    .validate()
    .then(async () => {
      loading.value = true
      const res = await login(formData.value)
      if (res.code === 200) {
        user.setProfile(res.data)
        loading.value = false
        uni.switchTab({
          url: '/pages/index/index',
        })
      } else {
        uni.showToast({
          title: res.msg,
          duration: 2000,
        })
        loading.value = false
      }
    })
    .catch((err) => {
      loading.value = false
      console.log(err)
      // 表单校验验失败，err 为具体错误信息
      // 其他逻辑处理
      // ...
    })
}
</script>

<template>
  <view class="login">
    <view class="row_logo">
      <image src="@/static/images/logo.png" class="logo" mode="scaleToFill" />
    </view>
    <view class="login_form">
      <view class="login_text">登录</view>
      <view style="margin-bottom: 30rpx">您好,欢迎来到智慧体育系统!</view>
      <uni-forms ref="form" :modelValue="formData" :rules="rules" validate-trigger="change">
        <uni-forms-item required label="账号" name="username">
          <input v-model="formData.username" placeholder="请输入手机号" class="input_border" />
        </uni-forms-item>
        <uni-forms-item required label="密码" name="password">
          <input v-model="formData.password" placeholder="请输入密码" class="input_border" />
        </uni-forms-item>
      </uni-forms>
    </view>
    <button class="login_btn" @click="toLogin" :disabled="loading" :loading="loading">登录</button>
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
    margin-top: 10rpx;
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
