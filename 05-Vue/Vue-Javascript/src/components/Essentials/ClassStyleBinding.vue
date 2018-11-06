<template>
  <div class="root-classstyle">
      <h2>Class and Style Bindings</h2>

      <h3>绑定HTML Class</h3>
      <h4 class="title-h4">对象语法</h4>
      <div v-bind:class="{ active: isActive }">class: active</div>
      <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">class: isActive text-dander</div>
      <div v-bind:class="classObject">classObject</div>
      <div v-bind:class="classObject0">classObject0</div>

      <h4 class="title-h4">数组语法</h4>
      <div v-bind:class="[activeClass, errorClass]">activeClass, errorClass</div>
      <div v-bind:class="isActive ? activeClass: '', errorClass ">三元表达式，根据条件切换列表中的class</div>
      <div v-bind:class='[{active: isActive}, errorClass]'></div>

      <h4 class="title-h4">用在组件上</h4>
      <my-componet class="baz boo" v-bind:class="{active: isActive}"></my-componet>

      <h3>绑定内联样式</h3>
      <h4 class="title-h4">对象语法</h4>
      <div v-bind:style="{color: activeColor, fontSize: fontSize + 'px'}">v-bind:style 的对象语法</div>
      <div v-bind:style="styleObject">直接绑定样式对象</div>

      <h4>数组语法</h4>
      <div v-bind:style="[baseStyles, overridingStyles]">[baseStyle, overridingStyles]</div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('my-componet', {
  template: '<p class="foo bar">Hi</p>'
})

export default {
  data () {
    return {
      isActive: true,
      hasError: false,
      error: null,
      classObject: {
        active: true,
        'text-danger': false
      },
      activeClass: 'active',
      errorClass: 'text-dangder',
      activeColor: '#f00',
      fontSize: 30,
      styleObject: {
        color: 'red',
        fontSize: '13px'
      },
      baseStyles: {
        color: '#f0f'
      },
      overridingStyles: {
        background: '#0f0'
      }
    }
  },
  computed: {
    classObject0 () {
      return {
        active: this.isActive && !this.error,
        'text-dander': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>
