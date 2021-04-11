<template>
  <div>
    <h3>指令集</h3>
    <h4>①. v-text、v-html、mustache</h4><hr>
    <p v-text="msg"></p>
    <p v-html="msg"></p>
    <p>{{ msg }}</p>

    <h4>②. v-show</h4> <hr>
    <p v-show="isShow">Show some content...</p>
    <el-button @click="toggleShow">Toggle</el-button>

    <h4>③. v-if、v-else-if、v-else</h4>
    <p v-if="point > 3">开大</p>
    <p v-else-if="point === 3">中</p>
    <p v-else-if="point < 3 && point > 0">开小</p>
    <p v-else>买定离手</p>
    <el-button @click="shakeDice">Start</el-button>

    <h4>④. v-on</h4>
    <div @click.capture="handleClick('wrapper')" style="border: 1px solid #fcc; padding: 20px; width: 200px;">
      <div @click.self="handleClick('middle')" style="border: 1px solid #0bb; padding: 20px">
        <div  @click.stop="handleClick('inner')" style="background: #f80; padding: 20px"></div>
      </div>
    </div>

    <h4>⑤. v-once</h4>
    <div v-once>{{ onceValue }}</div>
    <input type="text" v-model="onceValue">

    <h4>⑥. directive</h4>
    <input type="text" v-focus>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.directive('focus', {
  bind(el, binding) {
    el.style.border = '1px solid #999'
    console.log(binding)
  }
})

export default{
  data() {
    return {
      msg: 'Hello <b>Vue!</b>',
      isShow: true,
      point: -1,
      onceValue: 'test value'
    }
  },
  methods: {
    toggleShow() {
      this.isShow = !this.isShow
    },
    shakeDice () {
      this.point = Math.ceil(Math.random() * 6)
    },
    handleClick (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>
h4 {
  margin-top: 4rem;
}
</style>
