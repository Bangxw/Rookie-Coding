<template>
  <div id="root-computed">
      <h2>Computed Properties and Watchers</h2>

      <h3>计算属性</h3>
      <h4 class="title-h4">基础例子</h4>
      <div id="example">
          <p>Original message: "{{ message }}"</p>
          <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>

      <h4 class="title-h4">计算属性缓存 vs 方法</h4>
      <p>计算属性是基于它们的依赖进行缓存的:</p>
      <p>Reversed message: "{{ reversedMessage1()}}"</p>

      <h4 class="title-h4">计算属性 vs 侦听属性</h4>
      firstName: <input type="text" v-model="firstName"><br>
      lastName: <input type="text" v-model="lastName">
      <div>fullName: {{ fullName }}</div>
      <div>fullName0: {{ fullName0 }}</div>

      <h4 class="title-h4">计算属性的setter</h4>

      <h3>侦听器</h3>
      <p>
          Ask a yes/no question:
          <input v-model="question">
      </p>
      <p>{{ answer }}</p>
      <img v-bind:src="imageSrc">
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      message: 'Hello',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      imageSrc: ''
    }
  },
  computed: {
    reversedMessage () {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    compFullName () {
      return this.firstName + ' ' + this.lastName
    },
    fullName0: {
      get () {
        return this.firstName + ' ' + this.lastName
      },
      set (newVal) {
        var names = newVal.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  methods: {
    reversedMessage1 () {
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Question usually  contain a question mark. ;-'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
            vm.imageSrc = _.capitalize(response.data.image)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API.' + error
          })
      }, 500
    )
  },
  watch: {
    firstName (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName (val) {
      this.fullName = this.firstName + ' ' + val
    },
    question (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  }
}
</script>
