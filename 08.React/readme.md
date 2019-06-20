# React

1. `npm install --global create-react-app`

React组件的数据分为两种，prop和state
prop是组件的对外接口，state是组件的内部状态，对外用prop，内部用state

1. View发起Action->
2. Action传递到Dispatcher->
3. Dispatcher将通知Store->
4. Store的状态改变通知View进行改变
