<template>
  <div id="root-introduction">
      <h2># Introduction</h2>

      <h4>一、声明式渲染</h4>
      <p>{{ msg }}</p>
      <span v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息!</span>

      <h4>二、条件与循环</h4>
      <p v-if="seen">现在你看到我了</p>
      <ol>
        <li v-for="todo in todos" v-bind:key="todo.text">{{ todo.text }}</li>
      </ol>

      <h4>三、处理用户输入</h4>
      <p>{{ userMessage }}</p>
      <button v-on:click="reverseMessage">逆转消息</button>
      <p>{{ txtMessage }}</p>
      <input type="text" v-model="txtMessage">
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data () {
    return {
      test: 'Hello Vue',
      msg: 'Hello Vue',
      message: '页面加载于 ' + new Date().toLocaleString(),
      seen: true,
      todos: [{
        text: '学习Javascript'
      }, {
        text: '学习Vue'
      }, {
        text: '整个牛项目'
      }],
      userMessage: 'Hello Vue.js!',
      txtMessage: 'Hello Vue!'
    }
  },
  methods: {
    reverseMessage: function () {
      this.userMessage = this.userMessage.split('').reverse().join('')
    }
  }
}
</script>
