<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h4>{{ message }}</h4><br><br>

    <h3>Navigation</h3>
    <nav>
      <ul>
        <li v-for="(item, index) in navs" :key="index">
          <a :href="item.href">{{item.link}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '页面加载于 ' + new Date().toLocaleString(),
      navs: [{
        href: '#/Introduction',
        link: 'Introduction'
      }, {
        href: '#/VueInstance',
        link: 'The Vue Instance'
      }, {
        href: '#/TempSyntax',
        link: 'Template Syntax'
      }, {
        href: '#/ComputedWatchers',
        link: 'Computed Properties and Watchers'
      }, {
        href: '#/ClassStyleBinding',
        link: 'Class and Styles Bindings'
      }, {
        href: '#/ConditionalRendering',
        link: 'Conditional Rendering'
      }, {
        href: '#/ListRendering',
        link: 'List Rendering'
      }, {
        href: '#/EventHeading',
        link: 'Event Heading'
      }, {
        href: '#/FormInputBindings',
        link: 'Form Input Bindings'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.hello{
  text-align: center;
  font-family: 'consola', 'Microsoft Yahei'
}

ul,li{
  list-style-position: outside;
  list-style: none;
  -webkit-margin-before: 0;
  -webkit-padding-start: 0;
}
</style>
