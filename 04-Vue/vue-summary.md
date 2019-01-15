# Vue总结

> vue全家桶： **vue-router, vuex, vue-resource, vue-cli**

## 目录

1. 插值表达式
2. 指令学习
   - 自定义指令
3. 按键修饰符

## 笔记

### 一、插值表达式 `{{ mustache }}`

### 二、指令学习

- `v-text`：innerText，与mustache的区别是会更新标签下的全部内容
- `v-html`：innerHTML
- `v-show`：元素显示状态，每次不会重新创建元素，只是切换了元素的display: none样式
- `v-if`：每次都会重新删除或创建元素，性能消耗更高
- `v-else-if`：前一兄弟必须有v-if或v-else-if
- `v-else`：前一兄弟必须有v-if或v-else-if
- `v-cloak`：解决因网络问题，插值表达式源码闪烁的问题
- `v-bind`：属性绑定，缩写为"**：**"
  - 使用class样式
    1. 数组：`<h1 :class="['thin','red']">...</h1>`
    2. 在数组中使用三元表达式：`<h1 :class="['thin','red',flag ? 'active' : '']">...</h1>`
    3. 在数组中使用对象：
    ```js
    <h1 :class="['thin','red',{'active': flag}]"></h1>
    <h1 :class="{thin:true, red: true, active:true}"></h1>
    <h1 :class="obj"></h1>
    ```
  - 使用内联样式
    1. 直接使用样式对象：`<p :style="{'font-style':'bold', 'color':'red'}"></p>`
    2. 对象样式定义到data中：`<p :style="styleObj"></p>`
    3. 利用数组，引用多个对象：`<p :style="[styleObj0, styleObj1]"></p>`
- `v-on`：事件绑定机制(view上的方法名可以省略括号，括号用于传参)，缩写为"**@**"
  - `.stop`：阻止冒泡
  - `.prevent`：阻止默认行为
  - `.capture`：添加事件侦听器时使用捕获机制
  - `.self`：只有当元素本身触发时执行函数
  - `.once`：只执行一次
- `v-model`：实现双向数据绑定，只能用与表单元素(input、textarea、select)
- `v-pre`：跳过元素的编译，比如直接显示Mustache标签
- `v-once`：只渲染一次，之后的data的更新也不会重新渲染
- `v-for`：2.2.0+的版本里，当在组件中使用v-for时，key现在是必须的
  - `迭代数组`：`<li v-for="(item,i) in list" :key="item.id">索引:{{i}} --- 姓名:{{item.name}} --- 年龄:{{item.age}}</li>`
  - `迭代对象的属性`：`<li v-for="(val, key, i) in items">{{val}} --- {{key}} --- {{i}}</li>`
  - `迭代数字`：（i是从1开始的）`<li v-for="i in 9">这是第{{i}}个标签</li>`

#### 自定义指令

```js
//public
Vue.directive('colorAndFocus', {
  //1. 钩子函数第一个参数el,被操作的元素，原生js对象
  //2. 钩子函数第二个参数是binding对象，包含属性：name, value, oldValue, expresstion, arg, modifiers
  bind: function (el, binding) { //每当指令绑定到元素上时，立即执行bind函数，只执行一次
    //和属性相关的操作在此执行
    el.style.color = binding.value
  },
  inserted: function (el, binding) { //inserted表示元素 插入到DOM中时，会执行inserted函数
    //和行为相关的在此进行，因为bind中的页面还在内存中，未被渲染
    el.focus()
  }，
  updated () { //当vnode更新的时候，会执行updated,可能会触发多次
    ...
  }
})

//private
new Vue({
  el: '#app',
  data: {},
  methods: {},
  directives: {
    'fontWeight': {
      bind (el) {
        el.style.fontStyle = 'bold'
      }
    },
    'fontItalic': (el, binding) => { //简写，等同于在update和bind中各写一份
      el.style.fontStyle = 'italic'
    }
  }
})
```

### 三、按键修饰符

[链接: JS键盘码值](https://blog.csdn.net/gao_xu_520/article/details/80538334)

```js
Vue.config.keycodes.f2 = 113
```

### 四、过滤器的使用

```js
//public
Vue.filter('macfilter', (data) => {
  return data.toString().replace(/([A-Fa-f0-9]{2})/g, "$1-")
}))

//private
new Vue({
  el: '#app',
  data: {},
  methods: {},
  filters: {
    uppercase: (data) => {
      return data.toString().upperCase()
    }
  }
})

//use in view
{{ '90acdd789000' | macfilter | uppercase }}
```

### 五、Vue实例的生命周期

![img](lib/lifecycle.png)

> Vue实例的创建、运行、销毁，总是伴随着各种各样的事件，这些事件总称为生命周期

```js
new Vue({
  el: '#app',
  data: {
    msg: 'Hello Vue.'
  },
  methods: {
    show () {
      console.log('执行了show方法')
    },
    updateMsg () {
      this.msg = 'update msg'
    }
  },
  beforeCreate () { //第一个钩子函数，实例完全被创建出来之前，会执行它
    console.log(this.msg) // => undefined
    this.show() // => TypeError: this.show is not a function
    // 注意： 在beforeCreate生命周期函数执行的时候，data和methods的数据还没有初始化
  },
  created () {
    console.log(this.msg)
    this.show()
    //在created中data和methods都已经初始化好了！调用methods的方法和操作data的数据，最早只能在这里进行
  },
  beforeMount () { //模板已经在内存中创建成功，尚未在页面挂载
    console.log(document.getElementById('ele-h3').innerText) // => {{ msg }}
    //在beforeMount执行的时候，页面中的元素还没有被替换，只是之前写的一些模板字符串
  },
  mounted () { //内存中的模板已经挂载到页面中，用户可以看到渲染好的页面
    console.log(document.getElementById('ele-h3').innerText) // => Hello Vue.
    //mounted是实例创建期间最后一个生命周期函数，接下来就进行到运行阶段
    //如果要通过插件操作页面上的dom节点，最早要在mounted中进行
  },
  beforeUpdate () { //当数据更新是才会触发该事件，此时界面还没有被更新
    console.log('界面上元素的内容：' + document.getElementById('ele-h3').innerText) //=> Hello Vue.
    console.log('data中的msg数据是：' + this.msg) // => data中msg数据是： update msg
  },
  updated () { //完成了从model层到view层的重新渲染，界面和data数据保持一致了
    ...
  },
  beforeDestroy () {
    //当执行beforeDestroy钩子函数时，Vue实例就已经从运行阶段，进入到销毁阶段
    //此时实例的data和methods都处于可用状态，还没有真正销毁
  },
  destroyed () {
    //执行到destroyed函数的时候，组件已经被完全销毁，data和methods都不可用了
  }
})
```