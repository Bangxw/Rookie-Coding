<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <meta http-equiv='X-UA-Compatible' content='ie=edge'>
  <title>Document</title>
  <style>
    html,
    body {
      margin: 0;
      padding: 0;
    }

    h1 {
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      height: 500px;
    }

    .header-box {
      background: lightgreen;
      height: 70px;
    }

    .left-box {
      flex: 2;
      background: lightcyan
    }

    .main-box {
      flex: 8;
      background: lightblue
    }
  </style>
</head>

<body>
  <div id='app'>
    <router-view></router-view>
    <div class="container">
      <router-view name="left"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>

  <script src='../../lib/vue.js'></script>
  <script src="../../lib/vue-router.js"></script>
  <script>
    let header = {
      template: '<h1 class="header-box">Header</h1>'
    }

    let left = {
      template: '<h1 class="left-box">left</h1>'
    }

    let main = {
      template: '<h1 class="main-box">main</h1>'
    }

    let router = new VueRouter({
      routes: [{
          path: '/',
          components: {
            default: 　header,
            left,
            main
          }
        }
        // {
        //   path: '/',
        //   component: header
        // }, {
        //   path: '/left',
        //   component: left
        // }, {
        //   path: '/main',
        //   component: main
        // }
      ]
    })

    new Vue({
      el: '#app',
      data: {},
      methods: {},
      router
    })
  </script>
</body>

</html>