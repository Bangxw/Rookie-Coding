<template>
  <div id="root-template-syntax">
      <h2>Template Syntax</h2>

      <h3>插值</h3>
      <h4 class="title-h4">文本</h4>
      <span>Message: {{ msg }}</span><br>
      <span v-once>一次性插值，再次改变数据显示将不会改变：{{ msg }}</span>

      <h4 class="title-h4">原始HTML</h4>
      <p>Using mustaches: {{ rawHtml }}</p>
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>

      <h4 class="title-h4">特性</h4>
      <div v-bind:id="dynamicId">v-bind:id</div>
      <button v-bind:disabled="isButtonDisabled">Button</button>

      <h4 class="title-h4">使用Javascript表达式</h4>
      <p>Number值计算：{{ number+1 }}</p>
      <p>Boolean值: {{ ok?'Yes':'NO'}}</p>
      <p>字符串处理,反转: {{ message.split('').reverse().join('') }}</p>
      <div v-bind:id="'list-'+dynamicId">为元素添加id</div>

      <h3>指令</h3>

      <h4 class="title-h4">参数</h4>
      <p v-if="seen">现在你可以看到我了</p>
      <a v-bind:href="url">v-bind:href</a><br><br>
      <a v-on:click="doSomething" href="javascript:void(0)">do something</a>

      <h4 class="title-h4">修饰符</h4>
      <form v-on:submit.prevent="onSubmit">修饰符prevent</form>

      <h3>缩写</h3>
      <h4 class="title-h4">v-bind缩写</h4>
      <a v-bind:href="url">v-bind:href="url"</a><br><br>
      <a :href="url">:href="url"</a>

      <h4 class="title-h4">v-on缩写</h4>
      <a v-on:click="doSomething" href="javascript:void(0)">v-on:click="doSomething"</a><br><br>
      <a @click="doSomething" href="javascript:void(0)">@click="doSomething"</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '用Mustache语法插文本值',
      rawHtml: `<span style="color: red">This should be red.</span>`,
      dynamicId: 'dynamic-div',
      isButtonDisabled: true,
      number: 8,
      ok: false,
      message: 'Hello Vue !!!',
      seen: true,
      url: 'www.google.com'
    }
  },
  methods: {
    doSomething () {
      console.log('do-something!')
    }
  }
}
</script>
