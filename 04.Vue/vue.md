# Vue总结

> vue全家桶： **Axios + Vue + Vue-cli + Vue-Router + Vuex**

## 目录

- **[VUE](#VUE)**
  - [一、插值表达式mustache语法](#一插值表达式mustache语法)
  - [二、指令学习](#二指令学习)
    - [自定义指令](#自定义指令)
  - [三、按键修饰符](#三按键修饰符)
  - [四、过滤器的使用](#四过滤器的使用)
  - [五、Vue实例的生命周期](#五Vue实例的生命周期)
  - [六、动画](#六动画)
  - [七、组件](#七组件)
    - [7.1 创建](#71创建)
    - [7.2 组件切换(动画)](#72组件切换(动画))
    - [7.3 组件传值](#73组件传值)
  - [八、ref获取DOM](#八ref获取DOM)
  - [九、路由](#九路由)
    - [9.1 基本使用](#91基本使用)
    - [9.2 路由传参](#92路由传参)
    - [9.3 路由嵌套](#93路由嵌套)
    - [9.4 路由-命名视图](#94路由-命名视图)
  - [十、watch、computed、methods的对比](#十watchcomputedmethods的对比)
- **[AXIOS](#AXIOS)**

## VUE

### 一、插值表达式mustache语法

```html
<p>{{ message }}</p>
```

### 二、指令学习

1. **v-text**：相当于innerText，与mustache的区别是它会覆盖标签下的全部内容，`<p v-text="msg"></p>`
2. **v-html**：相当于innerHTML，`<p v-html="msg"></p>`
3. **v-show**：元素的显示隐藏，与v-if的区别是每次不会重新创建元素，只是切换了元素的display样式，`<p v-show="tips"></p>`
4. **v-if**：每次都会重新删除或创建元素，性能消耗更高，`<p v-if="tips>5">大于5</p>`
5. **v-else-if**：前一兄弟必须有v-if或v-else-if，`<p v-if="tips>5">大于5</p><p v-else-if="tips<5">小于5</p>`
6. **v-else**：前一兄弟必须有v-if或v-else-if，`<p v-if="tips>5">大于5</p><p v-else-if="tips<5">小于5</p><p v-else>等于5</p>`
7. **v-cloak**：解决因网络问题，插值表达式源码闪烁的问题
   - _css_： `[v-cloak]{ display: none }`
   - _html_：`<div v-cloak></div>`
8. **v-on**：事件绑定机制(view上的方法名可以省略括号，括号用于传参)，缩写为 `'@'`
    - `.stop`：阻止冒泡
    - `.prevent`：阻止默认行为
    - `.capture`：添加事件侦听器时使用捕获机制
    - `.self`：只有当元素本身触发时执行函数
    - `.once`：只执行一次 (@click.prevent.stop也只阻止一次)
9. **v-model**：实现双向数据绑定，只能用与表单元素(input、textarea、select)
10. **v-bind**： 属性绑定，缩写为 `':'`
    - 普通使用：`<input type="button" v-bind:value="btnVal" />`
    - 使用class样式
      1. 数组：`<h1 :class="['thin','red']"></h1>`
      2. 在数组中使用三元表达式：`<h1 :class="['thin','red',flag ? 'active' : '']">...</h1>`
      3. 在数组中使用对象:
          - `<h1 :class="['thin','red',{'active': flag}]"></h1>`
          - `<h1 :class="{thin:true, red: true, active:true}"></h1>`
          - `<h1 :class="styleObj"></h1>`
    - 使用内联样式
      1. 直接使用样式对象：`<p :style="{'font-style':'bold', 'color':'red'}"></p>`
      2. 对象样式定义到data中：`<p :style="styleObj"></p>`
      3. 利用数组，引用多个对象：`<p :style="[styleObj0, styleObj1]"></p>`
11. **v-for**：版本2.2.0+, `:key`是必须的
    - 迭代数组：`<p v-for="(item,index) in arr" :key="index">{{item}}</p>`
    - 循环对象数组：`<li v-for="item in list" :key="item.id">姓名:{{item.name}} - 年龄:{{item.age}}</li>`
    - 迭代对象的属性：`<li v-for="(val, key, i) in items">{{val}} - {{key}} - {{i}}</li>`
    - 迭代数字(i是从1开始)：`<li v-for="i in 9">这是第{{i}}个标签</li>`
12. **v-once**：只渲染一次，之后的data的更新也不会重新渲染
13. **v-pre**：跳过元素的编译，比如直接显示Mustache标签

#### 自定义指令

```js
//global
Vue.directive('focus', {
  /*
    * 钩子函数的参数：
    * 1. 被操作的dom元素
    * 2. binding对象 {name, value, oldValue, expression, arg, modifiers}
    * 3. vnode
    * 4. oldVnode
    */
  bind(el, binding) { //每当指令绑定到元素上时，立即执行一次bind函数   和属性有关的操作在此添加
    el.style.border = "1px solid #999"
  },
  inserted(el) { //插入到DOM时，会执行inserted函数  和行为有关的操作在此添加
    el.focus()
  },
  updated(el) { } //当vnode执行多次时，会触发多次
})

//private
new Vue({
  el: '#app',
  directives: {
    fontweight: (el, binding) => { //简写，等同于在update和bind种各写一份
      el.style.fontWeight = binding.value
      console.log(binding)
    },
    fontitalic: {
      bind: (el, binding) => {
        el.style.fontStyle = "italic"
      }
    }
  }
})

<input type="text" v-focus v-fontweight="300" v-fontItalic>
```

### 三、按键修饰符

[链接: JS键盘码值](https://blog.csdn.net/gao_xu_520/article/details/80538334)

```js
Vue.config.keyCodes.f2 = 113
```

### 四、过滤器的使用

```js
//public
Vue.filter('timeformat', (data, arg = 'yy-MM-dd hh:mm') => {
  var date = new Date(data)
  return arg
    .replace('yyyy', date.getFullYear().toString().padStart(4, '0'))
    .replace('yy', date.getFullYear().toString().padStart(4, '0').substr(-2))
    .replace('MM', (date.getMonth() + 1).toString().padStart(2, '0'))
    .replace('dd', date.getDate().toString().padStart(2, '0'))
    .replace('hh', date.getHours().toString().padStart(2, '0'))
    .replace('mm', date.getMinutes().toString().padStart(2, '0'))
})

//private
new Vue({
  el: '#app',
  data: {},
  filters: {
    macfilter: (data, arg = 'lower') => {
      if(arg === "lower") return data.toLowerCase()
      else return data.toUpperCase()
    }
  }
})

//use in view
{{ '90acdd789000' | macfilter }}
{{ '97/12/9 18:38' | timeformat('yyyy-MM-dd hh:mm') }}
```

### 五、Vue实例的生命周期

> Vue实例的创建、运行、销毁，总是伴随着各种各样的事件，这些事件总称为生命周期

```js
new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
  },
  methods: {
    show() {
      console.log(this.message)
    },
    updateMsg() {
      this.message = 'update msg!'
    }
  },
  beforeCreate() { //第一个钩子函数，表示实例完全被创建出来之前会执行它
    console.log(this.message) //undefined
      //this.show() //"TypeError: this.show is not a function"
      /* 注意：在beforeCreate生命周期函数执行时，data和methods的数据还没初始化好 */
  },
  created() {
    console.log(this.message) //undefined
    this.show() //"TypeError: this.show is not a function"
      /* 注意：在beforeCreate生命周期函数执行时，data和methods的数据还没初始化好, 此时还没创建el */
  },
  beforeMount() { //模板已经在内存中成功编译，尚未在页面挂载
    console.log(document.getElementsByTagName('h1')[0].innerText) //{{ message }}
  },
  mounted() { //内存中的模板已经挂载到页面中，用户可以看到渲染好的页面了
    console.log(document.getElementsByTagName('h1')[0].innerText) //Hello World!
      /* mounted是实例创建期间最后一个生命周期函数，接下来就进行到运行阶段 */
      /* 如果要通过插件操作页面上的dom节点，最早只能在此进行 */
  },
  beforeUpdate() { //当数据更新时会触发该事件，此时的界面还没有更新
    console.log('interface h3 content: ' + document.getElementsByTagName('h1')[0].innerText) //interface h3 content: Hello World!
    console.log('data中的数据: ' + this.message) //data中的数据: update msg!
  },
  updated() { //完成了从model层重新渲染到view层，页面和data数据保持同步了

  },
  beforeDestroy() { //此时实例的data和methods都处于可用状态，还没有真正销毁
    /* 当执行beforeDestroyed钩子函数时，vue实例从运行阶段进入到销毁阶段 */
  },
  destroyed() { //执行到destroyed函数的时候，组建已经被完全销毁，data和methods都不可用了

  }
})
```

![img](lib/lifecycle.png)

### 六、动画

```css
/* 使用过度类名 */
.v-enter,.v-leave-to { opacity:0; transform:translate(150px,0) }
.v-enter-active,.v-leave-active { transition:all .5s linear }

/* 修改v前缀，配合transition的name使用 */
.tran-enter, .tran-leave-to { opacity:0; transform:translate(0,150px)}
.tran-enter-active, .tran-leave-active {transition:all .5s liear}

/* 列表动画 */
.v-enter, .v-leave-to { transform: translate(0, 150px); opacity: 0 }
.v-enter-active, .v-leave-active { transition: all .8s ease }
.v-move { transition: all .8s ease }
.v-leave-active { position: absolute }
```

```html
<!-- 使用过度类名 -->
<transition><h1>Hello World</h1></transition>

<!-- 使用过度类名 -->
<transition name="tran"><h1>Hello World</h1></transition>

<!-- 1.相同class可以直接提取到子元素上 -->
<!-- 2.可以分别设置入场和离场的动画时间，也可以统一设置 -->
<transition enter-active-class="jackInTheBox" leave-active-class="hinge" :duration="{enter: 500, leave: 800}"><div class="animated">Hello World!</div></transition>

<!-- 使用钩子函数实现动画 -->
<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"><div class="ball" v-if="flag"></div></transition>

<!-- <ul> -->
<!-- appear实现入场效果 -->
<!-- tag属性把标签渲染为指定标签 -->
<transition-group appear tag="ul">
  <li v-for="(item,index) in list" :key="item.ID" @click="delItem(item.ID)">{{index}} --- {{item.name}}</li>
</transition-group>
<!-- </ul> -->
```

```js
// 使用钩子函数实现动画
methods: {
  beforeEnter(el) {
    el.style.transform = 'translate(0,0)'
  },
  enter(el, done) {
    el.offsetWidth //强行执行
    el.style.transform = 'translate(300px,180px)'
    el.style.transition = 'all 5.5s linear'
    done() //立即执行afterEnter中的函数
  },
  afterEnter(el) {
    this.flag = false
  }
}
```

### 七、组件

#### 7.1.创建

> 注意：组件中的`data`对象必须以函数返回对象的方式创建，因为组件会被多处调用，每个组件需要操作自己独立的`data`对象

```js
/*  1. 利用Vue.extend创建 */
Vue.component('myCom1', Vue.extend({
  template: '<h1>my component</h1>'
}))

/* 2.直接在component对象中创建 */
Vue.component('myCom2', {
  template: '<h1>my component</h1>'
})

/* 3.在页面中用template标签预定义好template的内容 */
Vue.component('myCom3', {
  template: '#com3'
})

<template id="com3">
  <div><h1>my component</h1><div>
</template>
```

#### 7.2.组件切换(动画)

```html
<a @click.prevent="com='login'">Login</a>
<a @click.prevent="com='register'">Register</a>

<!-- 通过mode映射组件切换的模式 -->
<!-- component是占位符，:is用来指定需要展示的组件 -->
<transition mode="out-in">
  <component :is="com"></component>
</transition>
```

#### 7.3.组件传值

##### 父组件向子组件传值

> 通过 Prop 向子组件传递数据，只读属性

```html
<div id="app">
  <blog-post :title="msg"></blog-post>
</div>
```

```js
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

new Vue({
  el: '#app',
  data: {
    msg: 'parent message'
  }
})

```

> 监听子组件事件, 通过事件子组件向父组件传值

```html
  <div id="app">
    <blog-post @func='show'></blog-post>
  </div>

  <template id="tmp">
    <div>
      <button @click="btnHandle">点击</button>
    </div>
  </template>
```

```js
Vue.component('blog-post', {
  template: '#tmp',
  data() {
    return {
      psn: {
        name: '张三', age: '18'
      }
    }
  },
  methods: {
    btnHandle() {
      this.$emit('func', this.psn)
    }
  }
})

new Vue({
  el: '#app',
  methods: {
    show(res) {
      console.log('这是父组件的方法')
      console.log(res)
    }
  }
})
```

### 八、ref获取DOM

```html
<h3 id="ele-h3" ref="myh3">Hello world</h3>

this.$refs.myh3.innerHTML
```

### 九、路由

> - **后端路由**: 对于普通网站，所有的超链接都是URL地址，所有的URL地址都对应服务器上的资源
> - **前端路由**: 对于单页面应用程序来说，主要通过URL的hash(#/)来实现不同页面之间的切换， 同时，hash有一个特点： HTTP请求中不包含hash的相关内容，所有，单页面程序中的页面跳转主要用hash实现

#### 9.1.基本使用

1. 引入vue-router.js： `<script src="../../lib/vue-router.js"></script>`
2. 定义路由对象：`let obj = new VueRouter({})`
3. 关联路由对象到实例上：`router: obj`
4. 页面用**router-view**展示组件内容：`<router-view></router-view>`, **to**属性展示指定组件
5. 用**router-link**切换指定组件的展示：`<router-link></router-link>`
6. 默认类`router-link-acitve`指定`router-link`激活时的样式
7. 路由对象的`routerActiveClass`修改默认类名用于修改激活时的样式


**代码**:

```html
<div id="app">
  <!-- router-link默认会渲染为一个a标签  可以用tag属性渲染为指定标签 -->
  <router-link to='/login' tag="span">login</router-link>
  <router-link to='/register'>register</router-link>

  <transition mode="out-in">
    <router-view></router-view>
  </transition>
</div>
```

```css
/* 通过默认的class修改激活样式 */
.router-link-active,
.active-item {
  font-weight: 800;
  color: red;
  background: green;
  font-size: 20px;
  text-decoration: underline
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.v-enter-active,
.v-leave-active {
  transition: all .8s linear
}
```

```js
let login = {
  template: '<div>登陆组件</div>'
}

let register = {
  template: '<div>注册组件</div>'
}

let routerObj = new VueRouter({
  routes: [ // 匹配路由规则
    {
      path: '/', // 指定根路径 重定向到login组件
      redirect: '/login'
    }, {
      path: '/login', // 监听指定的链接
      component: login // 值必须为一个组件的模板对象，不能是组建的引用名称
    }, {
      path: '/register',
      component: register
    }
  ],
  linkActiveClass: 'active-item' // 修改默认的激活类名
})

new Vue({
  el: '#app',
  data: {},
  methods: {},
  router: routerObj //关联路由对象到实例上
})
```

#### 9.2.路由传参

1. 通过query string传递：`<router-link to="/login?id=10&name='toney'">登陆</router-link>`，通过`$route.query`取数据
2. 在routes中定义属性: `path: '/login/:id/:name'`, 页面链接：`<router-link to="/login/10/‘wbx’">登陆</router-link>`, 通过`this.$route.params`取数据

#### 9.3.路由嵌套

```js
routes: [{
  path: '/account',
  component: account,
  children: [{
    path: 'login',
    component: login
  }, {
    path: 'register',
    component: register
  }]
}]
```

#### 9.4.路由-命名视图

```html
<router-view></router-view>
<div class="container">
  <router-view name='left'></router-view>
  <router-view name='main'></router-view>
</div>
```

```js
routes: [{
  path: '/',
  components: {
    default: header,
    left,
    main
  }
}]
```

### 十、watch、computed、methods的对比

- `methods`: 表示一个具体的操作，主要用于书写业务逻辑
- `watch`: 键是需要观察的表达式，值是对应的回调函数。主要用来舰艇某些特定数据的变化，从而进行某些具体的业务逻辑操作，可以看作是computed和methods的结合体
- `computed`: 结果会被缓存，除非依赖的响应式属性变化才会被重新计算。主要挡住属性来使用
  1. 计算属性在引用的时候，一定不要加上()去调用，直接把它当作普通属性去使用就好
  2. 只要计算属性内部，任何一个data中的数据发生了变化，就会立即重新计算这个计算属性的值
  3. 计算属性的求值结果，会被缓存起来，方便下次使用。知道下次数据发生变化，进行冲I想你计算

## AXIOS

[Axios中文文档](http://www.axios-js.com/zh-cn/docs/index.html)