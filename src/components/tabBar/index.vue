<script setup lang="ts">
import { useMemberStore } from '@/stores'
import type { routerType } from '@/utils/tabBarList'
const { profile } = useMemberStore()

type Prop = {
  selected: number
}
const props = withDefaults(defineProps<Prop>(), {
  selected: 0,
})
let { selected } = toRefs(props)
const switchTabs = (item: routerType) => {
  uni.switchTab({
    url: item.pagePath,
  })
}
</script>
<template>
  <up-tabbar
    :value="selected"
    :placeholder="true"
    :fixed="true"
    :safeAreaInsetBottom="true"
    activeColor="#1989fa"
  >
    <up-tabbar-item
      :text="item.text"
      :icon="item.iconPath"
      v-for="item in profile?.routerList"
      :key="item.iconPath"
      @click="switchTabs(item)"
    ></up-tabbar-item>
  </up-tabbar>
</template>

<style lang="scss" scoped></style>
