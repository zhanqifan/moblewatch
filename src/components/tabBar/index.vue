<script setup lang="ts">
const selected = ref(0)
</script>
<template>
  <up-tabbar
    :value="selected"
    :placeholder="true"
    @change="(e:number) => (selected = e)"
    :fixed="true"
    :safeAreaInsetBottom="true"
    activeColor="#1989fa"
  >
    <up-tabbar-item text="首页" icon="home"></up-tabbar-item>
    <up-tabbar-item text="手环" icon="play-right"></up-tabbar-item>
    <up-tabbar-item text="我的" icon="account"></up-tabbar-item>
  </up-tabbar>
</template>

<style lang="scss" scoped></style>
