<script setup lang="ts">
import { login } from '@/api/login'
import { useMemberStore } from '@/stores'
import { ref } from 'vue'

const user = useMemberStore()
const formLogin = ref({
  username: '',
  password: '',
})
const form = ref()
const rules = ref({
  username: [{ required: true, message: '用户名不为空', trigger: ['blur'] }],
  password: [
    { required: true, message: '密码不为空', trigger: ['blur'] },
    {
      min: 5,
      max: 10,
      message: '用户密码长度必须在5到20个字符之间',
      trigger: ['change'],
    },
  ],
})
const loading = ref(false)
const toLogin = async () => {
  form.value.validate().then(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      const res = await login(formLogin.value)
      if (res.code === 200) {
        user.setProfile({ access_token: res.data.access_token, client_id: res.data.client_id })
        loading.value = false
        uni.reLaunch({
          url: '/pages/index/index',
        })
      } else {
        uni.showToast({
          title: res.msg,
          duration: 2000,
        })
        loading.value = false
      }
    }
  })
  // form.value.validate().then(async (valid: boolean) => {
  //   console.log(valid)
  //   // loading.value = true
  //   // const res = await login(formData.value)
  //   // if (res.code === 200) {
  //   //   user.setProfile({ access_token: res.data.access_token, client_id: res.data.client_id })
  //   //   loading.value = false
  //   //   uni.switchTab({
  //   //     url: '/pages/index/index',
  //   //   })
  //   // } else {
  //   //   uni.showToast({
  //   //     title: res.msg,
  //   //     duration: 2000,
  //   //   })
  //   //   loading.value = false
  //   // }
  // })
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
      <!-- <uni-forms ref="form" :modelValue="formData" :rules="rules" validate-trigger="change">
        <uni-forms-item required label="账号" name="username"> -->
      <up-form labelPosition="left" :model="formLogin" :rules="rules" ref="form">
        <up-form-item label="账号" prop="username" borderBottom>
          <up-input v-model="formLogin.username" placeholder="请输入手机号" class="input_border" />
        </up-form-item>
        <up-form-item label="密码" prop="password" borderBottom>
          <up-input v-model="formLogin.password" placeholder="请输入手机号" class="input_border" />
        </up-form-item>
      </up-form>
      <!-- </uni-forms-item>
        <uni-forms-item required label="密码" name="password">
          <input v-model="formData.password" placeholder="请输入密码" class="input_border" />
        </uni-forms-item>
      </uni-forms> -->
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
