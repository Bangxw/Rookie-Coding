# Vue总结

> vue全家桶： **Axios + Vue + Vue-cli + Vue-Router + Vuex**

## 目录

- **[VUE](#VUE学习笔记)**
  - [一、插值表达式mustache语法](#一、插值表达式mustache语法)
  - [二、指令学习](#二、指令学习)
    - [自定义指令](#自定义指令)
  - [三、按键修饰符](#三、按键修饰符)
  - [四、过滤器的使用](#四、过滤器的使用)
  - [五、Vue实例的生命周期](#五、Vue实例的生命周期)
- **[AXIOS](#AXIOS学习笔记)**

## VUE学习笔记

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
Vue.filter('macfilter', data => {
  return data.toString().replace(/([A-Fa-f0-9]{2})/g, "$1-")
}))

//private
new Vue({
  el: '#app',
  data: {},
  filters: {
    conversioncase: (data, arg = 'lower') => {
      if(arg === "lower") return data.toLowerCase()
      else return data.toUpperCase()
    }
  }
})

//use in view
{{ '90acdd789000' | macfilter | conversioncase('upper') }}
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

![img](./vue/vue-ITcast/assets/lifecycle.png)

## AXIOS学习笔记

[axios中文文档](http://www.axios-js.com/zh-cn/docs/index.html)