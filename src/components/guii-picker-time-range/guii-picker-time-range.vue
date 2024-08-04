<template>
  <picker
    :class="{ 'is-disabled': disabled }"
    mode="multiSelector"
    :value="value"
    :range="range"
    :disabled="disabled"
    range-key="label"
    @change="onChange"
    @columnchange="onColumnchange"
  >
    <view :class="['picker_content__container', { active_placeholder: !modelValue.length }]">
      <view class="picker_content__label">{{ label }}</view>
      <view class="picker_content__icon"></view>
    </view>
  </picker>
</template>

<script setup>
import { reactive, watch, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: Array,
    default: () => ['开始时间', '结束时间'],
  },
  separator: {
    type: String,
    default: '-',
  },
  disabled: {
    type: Boolean,
  },
})
const emit = defineEmits(['update:modelValue'])
// defineOptions({
//   options: {
//     virtualHost: true,
//   },
// })

const label = computed(() => {
  const { modelValue, placeholder, separator } = props

  return (modelValue.length ? modelValue : placeholder).join(separator)
})

const formatNum = (n, p = 1) => (n < 10 ** p ? '0'.repeat(p) : '') + n
const getDataArr = (length) =>
  Array.from({
    length,
  }).map((o, i) => ({
    value: i,
    label: formatNum(i),
  }))

// 开始时间
const start = reactive({
  h: getDataArr(24),
  m: getDataArr(60),
})
// 结束时间
const end = reactive({
  h: [...start.h],
  m: [...start.m],
})
const setEndH = (val) => {
  end.h = [...start.h].slice(val > 0 ? val : 0)
}
// eq - h 是否相同
const setEndM = (val, eq) => {
  if (eq) {
    if (val < start.m.length - 1) {
      end.m = [...start.m].slice(val + 1)
    } else {
      // 第一个小时小于 23
      if (value[0] < start.h.length - 1) {
        // 第一个分钟拉到 59
        end.m = [...start.m]
        // 第二个小时自动 +1
        value[3] += 1
      } else {
        end.m = [...start.m].slice(-1)
      }
      // 第二个分钟重置 0
      value[4] = 0
      return true
    }
  } else {
    end.m = [...start.m]
  }
}
const findIndex = (s, v) => {
  const ti = s.findIndex((o) => o.label === v)
  return ti > 0 ? ti : 0
}

const value = reactive([0, 0, 0, 0, 0])
const setValue = (i, val) => {
  value[i] = val > 0 ? val : 0
}
watch(
  () => props.modelValue,
  (val) => {
    if (!val.length) return
    const _val = val.join(':').split(':')
    const i_sh = findIndex(start.h, _val[0])
    const i_sm = findIndex(start.m, _val[1])

    setEndH(i_sh)
    setEndM(i_sm, _val[0] === _val[2])

    const i_eh = findIndex(end.h, _val[2])
    const i_em = findIndex(end.m, _val[3])

    setValue(0, i_sh)
    setValue(1, i_sm)
    setValue(3, i_eh)
    setValue(4, i_em)
  },
  {
    immediate: true,
  },
)

const range = computed(() => [
  start.h,
  start.m,
  [
    {
      label: props.separator,
    },
  ],
  end.h,
  end.m,
])

function onChange(e) {
  const { value } = e.detail
  const result = value
    .map((o, i) => range.value[i][o].label + (i === 0 || i === 3 ? ':' : ''))
    .join('')
    .split(props.separator)

  emit('update:modelValue', result)
}

function onColumnchange(e) {
  const { column, value: val } = e.detail

  value[column] = val

  const _range = range.value
  const setTargetIndex = (index, current = _range[column][val]) => {
    // 当前值
    const _cur = current
    // 靶向值
    const _tar = _range[index][value[index]]

    // 当前与靶向值的差值
    const _less = _cur.value - _tar.value

    // 旧数据长度
    const _len_old = _range[index].length
    // 新数据长度
    const _len_new = range.value[index].length

    // 变动差值
    const _diff = _len_old - _len_new

    if (_diff > 0 && _less >= 0) {
      value[index] = 0
    } else {
      value[index] -= _diff
    }
  }

  if (column === 0) {
    // 更新数据
    setEndH(val)
    setTargetIndex(3)
  }

  // 小时是否相同
  const _eq = range.value[0][value[0]] === range.value[3][value[3]]
  if (column === 1) {
    // 更新数据
    if (setEndM(val, _eq)) return
    setTargetIndex(4)
  }

  if (column === 0 || column === 3) {
    // 更新数据
    setEndM(value[1], _eq)
    setTargetIndex(4, _range[1][value[1]])
  }
}
</script>

<style scoped lang="scss">
picker {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  height: 37px;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding-left: 10px;
  padding-right: 10px;

  &.is-disabled {
    background-color: #f7f6f6;
    color: #d5d5d5;

    .picker_content__container.active_placeholder {
      color: inherit;
    }
  }

  .picker_content__container {
    display: flex;
    align-items: center;
    gap: 8px;

    &.active_placeholder {
      font-size: 12px;
      color: #999;
    }
  }

  .picker_content__label {
    flex: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .picker_content__icon {
    flex: none;
    --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'/%3E%3C/svg%3E");
    -webkit-mask: var(--un-icon) no-repeat;
    mask: var(--un-icon) no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    background-color: currentColor;
    color: inherit;
    width: 1em;
    height: 1em;
  }
}
</style>
