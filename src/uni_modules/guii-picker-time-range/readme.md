# guii-picker-time-range

### `props`

| 属性名					        | 类型				    | 默认值											      | 描述																		                 |
|-----------------|-----------|---------------------|--------------------------------------|
| `modelValue`		  | `Array`		 | 	  `[]`									    | `v-model`, 返回格式 `['00:00', '00:01']` |
| `placeholder`		 | `Array`		 | `['开始时间', '结束时间']`	 | 																				                 |
| `separator`			  | `String`	 | `-`												     | 分隔符																	                 |
| `disabled`			  | `Boolean`	 | `false`												     | 禁用																	                 |

### 食用方式

```vue
<template>
  <guii-picker-time-range v-model="timeRange"/>
</template>
<script setup>
  // 返回格式['00:00', '00:01']
  const timeRange = ref([])
</script>
```

