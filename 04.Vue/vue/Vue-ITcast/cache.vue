<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <meta http-equiv='X-UA-Compatible' content='ie=edge'>
  <title>Document</title>
  <style>
    li {
      border: 1px dashed #999;
      margin: 5px;
      padding: 5px;
      font-size: 12px;
      width: 50%;
    }
    
    li:hover {
      background: hotpink;
      transition: all .8s ease
    }
    
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateY(150px)
    }
    
    .v-enter-active,
    .v-leave-active {
      transition: all .6s ease
    }
    
    .v-move {
      transition: all .4s ease
    }
    
    .v-leave-active {
      position: absolute
    }
  </style>
</head>

<body>
  <div id='app'>
    <div class="panel">
      <label for="">
            ID: <input type="text" v-model="id"> 
          </label>

      <label for="">
            Name: <input type="text" v-model="name">
          </label>
      <button @click="add">Add</button>
    </div>


    <!-- <ul> -->
    <!--appear属性实现入场效果-->
    <!--tag属性把标签渲染指定标签-->
    <transition-group appear tag="ul">
      <li v-for="(item, index) in list" :key="item.id" @click="del(index)">{{item.id}} --- {{item.name}}</li>
    </transition-group>
    <!-- </ul> -->
  </div>

  <script src='../../lib/vue.js'></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        msg: '别浪~~ !猥琐发育',
        id: '',
        name: '',
        list: [{
          id: 1,
          name: '赵高'
        }, {
          id: 2,
          name: '秦桧'
        }, {
          id: 3,
          name: '严嵩',
        }, {
          id: 4,
          name: '魏忠贤'
        }]
      },
      methods: {
        add() {
          this.list.push({
            id: this.id,
            name: this.name
          })
          this.id = this.name = ""
        },
        del(i) {
          this.list.splice(i, 1)
        }
      }
    })
  </script>
</body>

</html>