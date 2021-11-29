# Widget

## Description

This is universal Widget.

## Connection

```vue
<template>
  <Widget api="String(required)" config="Object(required)" />
</template>
```

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **api** | String | API url | (required) |
| **config** | Object | Widget configuration | (required) |

### Events
| **Name** | **Description** |
| :------- | :-------------- |
| **setCollection** | Emit for build widgets collection |

## Source code

<code class="code--path">@/src/components/Dashboard/Widget.vue</code>

<<< @/src/components/Dashboard/Widget.vue
