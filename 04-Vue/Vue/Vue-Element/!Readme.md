# Vue-Element Demo

## 一、使用vue-cli安装

``` bash
npm i -g vue-cli
vue init webpack
npm i && npm i element-ui -S
```

## 二、引入 Element

``` 完整引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
```

``` 按需引入
[Element官网](http://element-cn.eleme.io/#/zh-CN/component/switch)
```

## 三、使用Vue-Element

### 3.1 国际化

### 3.2 自定义动画

### 3.3 内置过渡动画

### 3.4 组件

#### 3.4.1 Layout布局

> 核心: 24分栏任意组合，标签:el-row、el-col

* el-row属性:
  * ":gutter" --- 栅格间隔
  * "type" --- 布局模式，可选flex，现代浏览器下有效
  * "justify" --- flex布局下的水平排列方式,值：start/end/center/space-around/space-between
  * "align" --- flex布局下的垂直排列方式,值: top/middle/bottom
* el-col属性:
  * ":span" --- 栅格占据的列数
  * ":offset" ---- 栅格左侧的间隔格数
  * ":push" ---- 栅格向右移动格数
  * ":pull" ---- 栅格向左移动格数
  * ":xs" --- <768px 响应式栅格数
  * ":sm" --- ≥768px 响应式栅格数
  * ":md" --- ≥992px 响应式栅格数
  * ":lg" --- ≥1200px 响应式栅格数
  * ":xl" --- ≥1920px 响应式栅格数

#### 3.4.2 Container布局容器

> 标签: el-container、el-header、el-aside、el-main、el-footer

* "direction" --- 子元素的排列方向horizontal/vertical,默认子元素中有el-header或el-footer时为vertical,否则为horizontal

#### 3.4.3 Button按钮

> 标签：el-button

* size: meduim、small、mini
* type: primary、success、warning、danger、info、text
* plain: 是否为朴素按钮
* round: 是否为圆形按钮
* loading: 是否为加载中状态
* disabled: 是否为禁用状态
* icon: 图标类名
* autofocus: 是否为默认聚焦
* native-type: 原生type属性 --- button、submit、reset