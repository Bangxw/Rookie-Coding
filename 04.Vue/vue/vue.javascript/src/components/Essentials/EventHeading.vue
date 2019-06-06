<template>
  <div id="root-eventheading">
    <h2>Event Theading</h2>

    <h3>监听事件</h3>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{counter}} times.</p>
    </div>

    <h3>事件处理方法</h3>
    <div id="example-2">
      <button v-on:click="greet">Greet</button>
    </div>

    <h3>内联处理器中的方法</h3>
    <div id="example-3">
      <button v-on:click="say('hi')">Say Hi</button>
      <button v-on:click="say('what')">Say What</button>
      <button v-on:click="warn('Form cannot be submitted yet.', $event)">Submit</button>
    </div>

    <h3>事件修饰符</h3>
    <div class="super-div" v-on:click="msgAlert('super', $event)">
      <!--阻止单击事件继续传播-->
      <div class="main-div" v-on:click.stop="doThis">
        <div class="test-div" v-on:click="msgAlert('son', $event)">
        </div>
      </div>
    </div>
    <form v-on:submit.prevent="onSubmit"></form>

    <h3>按键修饰符</h3>
    <input v-on:keyup.13="submit13" value="submit" type="button">
    <div class="wrap-operate-div">
      <input class="move-block" type="text" @keydown.up="moveup('up', $event)" @keydown.down="moveup('down', $event)" :style="{left: leftDistance + 'px', top: topDistance + 'px'}">
    </div>
    <div @click.ctrl="doSomething">Do Something</div>

    <h4 class="title-h4">.exact修饰符</h4>
    <p>.exact修饰符允许你控制由精准的系统修饰符组合触发的事件</p>
    <button @click.ctrl="onclick">A</button>
    <button @cilck.ctrl.exact="onCtrlClick">A</button>
    <button @click.exact="onclick">A</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      name: 'Vue.js',
      leftDistance: 60,
      topDistance: 60
    }
  },
  methods: {
    greet (event) {
      console.log('Hello ' + this.name + '!')
      if (event) {
        console.log(event.target.tagName)
      }
    },
    say (message, event) {
      console.log(message)
      alert(message)
    },
    warn (msg, event) {
      alert(msg)
      if (event) console.log(event)
    },
    doThis (e) {
      console.log(e)
    },
    msgAlert (msg, event) {
      console.log(msg)
    },
    onSubmit () {
      console.log(123)
    },
    submit13 (e) {
      console.log(e)
    },
    moveup (op, e) {
      console.log(e)
      switch (op) {
        case 'up':
          this.topDistance -= 5
          break
        case 'down':
          this.topDistance += 5
          break
        case 'left':
          this.leftDistance -= 5
          break
        case 'right':
          this.leftDistance += 5
          break
      }
    },
    doSomething () {
      console.log('do something & ctrl keyboard')
    },
    onclick () {
      console.log('ctrl + click')
    },
    onCtrlClick () {
      console.log('ctrl + click')
    }
  }
}
</script>

<style>
.super-div {
  width: 150px;
  height: 150px;
  border: 1px solid #f00;
}

.main-div {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  margin: 25px auto;
}

.test-div {
  width: 50px;
  height: 50px;
  background: #f00;
  margin: 25px auto;
}

.wrap-operate-div {
  position: relative;
  width: 150px;
  height: 150px;
  border: 1px solid #d0d0d0;
}

.move-block {
  width: 10px;
  height: 10px;
  background: #ffffff;
  position: absolute;
}
</style>
