<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <meta http-equiv='X-UA-Compatible' content='ie=edge'>
  <title>Document</title>
</head>

<body>
  <div id='app'>
    <mylogin></mylogin>

    <register></register>

    <test></test>
  </div>

  <template id="test">
    <div>
      HaHSHSHSSHHSH<br>
      test<br>
      1111<br>
    </div>
  </template>

  <script src='../../lib/vue.js'></script>
  <script>
    //定义全局组件， Vue.component('组件的名称',Vue.extend())
    Vue.component('mylogin', {
      template: '<h1>注册组件</h1>'
    })

    var register = {
      template: '<div>注册组件</div>'
    }
    new Vue({
      el: '#app',
      data: {},
      methods: {},
      components: {
        register,
        test: {
          template: '#test'
        }
      }
    })
  </script>
</body>

</html>