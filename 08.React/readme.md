# React

## Getting Start

### Quick Start

```js
npx create-react-app react.app // npx 临时使用create-react-app 用完后会删除
cd react.app
npm start

npm eject // 自定义配置  源文件不能有任何改动之前就操作这个命令
```

1. `npm install --global create-react-app`

React组件的数据分为两种，prop和state
prop是组件的对外接口，state是组件的内部状态，对外用prop，内部用state

1. View发起Action->
2. Action传递到Dispatcher->
3. Dispatcher将通知Store->
4. Store的状态改变通知View进行改变

React和Redux构建前端网页: React视图层面 / Redux担当应用状态的管理工作
UI = render(state)

## React中核心概念

### 虚拟Dom

1. DOM的本质: 浏览器的概念，用JS对象来表示页面上的元素，并提供DOM对象可操作的API
2. 什么是虚拟DOM: 框架中的概念，用JS对象模拟页面上的DOM和DOM嵌套

### Diff算法

* __tree diff__: 新旧两棵DOM树，逐层对比，就是Tree Diff。当整颗DOM逐层对比完毕，则所有需要被按需更新的元素，必然能够找到
* __component diff__: 在Tree Diff的时候，每一层中，组建级别的对比，叫做Component Diff
  * 如果对比前后，组件的类型相同，则暂时认为此组建不需要被更新
  * 如果对比前后，组件类型不同，则需要移除旧组件，创建新组件，并追加到页面上
* __element diff__: 在进行组件对比的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做Element Diff；

### 创建Webpack项目

1. 运行`npm init -y`快速初始化项目
2. 在项目根目录创建`src`源代码目录和`dist`产品目录
3. 在src目录下创建`index.html`
4. 使用cnpm安装webpack, 运行`cnpm i webpack webpack-cli -D`
   * 全局运行 `npm i cnpm -g`安装cnpm
5. 注意：在webpack 4.x中，有一个很大的特性，就是约定大于配置，目的是为了尽量减少配置文件的体积，默认约定：
   * 默认的打包入口路径是: `src/index.js`
   * 默认的打包路径是: `dist`
   * 4.x中新增了`mode`为必选项，可选的值为： `development、production`

## 模块化的应用要点

架构：

1. 代码文件的组织结构（按功能组织)
2. 确定模块的边界 （高内聚，低耦合）
3. Store的状态树设计

### 代码文件的组织结构

MVC的代码组织方式，(按角色组织)
文件目录：

```js
  |- controllers/
   - todoController.js
   - filterController.js
  |- models/
   - todoModels.js
   - filterModel.js
  |-views/
   - todo.js
   - todoItem.js
   - filter.js
```

Redux应用组织方式,(按功能组织)

```js
  |- todoList/
   - actions.js         // action的构造函数，决定模块可以接受的动作
   - actionsTypes.js    // 定义action类型
   - index.js
   - reducer.js         // 定义动作
    |- views/
     - component.js
     - container.js
  |-filter/
   - action.js
   - actionTypes.js
   - index.js
   - reducer.js
   |- views/
     - component.js
     - container.js
```

### Store的状态树设计

1. 一个模块控制一个状态节点
2. 避免冗余数据
3. 树形结构扁平

Todo状态设计

```js
{
  id: // 唯一标识
  text: // 待办事项内容
  completed: // 布尔值：标识代办事项是否已完成
}

{
  todos: [{
    text: 'First todo',
    completed: false,
    id: 0
  }, {
    text: 'Second todo',
    completed: false,
    id: 1
  }],
  filter: all
}
```

[react实战github源码](https://github.com/mocheng/react-and-redux/tree/master/)
