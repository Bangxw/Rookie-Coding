# React

1. `npm install --global create-react-app`

React组件的数据分为两种，prop和state
prop是组件的对外接口，state是组件的内部状态，对外用prop，内部用state

1. View发起Action->
2. Action传递到Dispatcher->
3. Dispatcher将通知Store->
4. Store的状态改变通知View进行改变

React和Redux构建前端网页: React视图层面 / Redux担当应用状态的管理工作
UI = render(state)

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
