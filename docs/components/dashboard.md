# Dashboard

## Description

This is Dashboard Grid.

## Connection

```vue
<template>
  <Dashboard
    api="String(required)"
    id="String(required)"
    widgets="Array(required)"
  />
</template>
```

## API

### Props
| **Name** | **Type** | **Description** | **Default** |
| :------- | :------- | :-------------- | ----------: |
| **api** | String | API URL | (required) |
| **id** | String | Dashboard unique id | (required) |
| **widgets** | Array | Widgets config | (required) |

## Source code

<code class="code--path">@/src/components/Dashboard/Dashboard.vue</code>

<<< @/src/components/Dashboard/Dashboard.vue
