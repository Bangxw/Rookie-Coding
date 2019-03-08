<template>
  <div id="root-listrendering">
      <h2>List Rendering</h2>

      <h3>用v-for把一个数组对应为一组元素</h3>
      <ul id="exmple-1">
        <li v-for="item in items" :key="item.message">{{ item.message }}</li>
      </ul>

      <ul id="example-2">
        <li v-for="(item, index) in items" :key="item.message + '-' + index">{{ parentMessage }} + {{ index }} - {{ item.message }} </li>
      </ul>

      <h3>数组更新检测</h3>
      <h4 id="title-h4">编译方法</h4>
      <pre>Array: {{this.items}}</pre>
      <button v-on:click="funPush">push</button>
      <button v-on:click="funPop">pop</button>
      <button v-on:click="funShift">shift</button>
      <button v-on:click="funUnshift">unshift</button>
      <button v-on:click="funSplice">splice</button>
      <button v-on:click="funSort">sort</button>
      <button v-on:click="funReverse">reverse</button>

      <h4 class="title-h4">替换数组</h4>
      <pre>Array: {{this.items}}</pre>
      <button v-on:click="funFilter">filter</button>
      <button v-on:click="funConcat">concat</button>
      <button v-on:click="funMap">map</button>

      <h3>显示过滤/排序结果</h3>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>

      <h3>一段取值范围的v-for</h3>
      <div><span v-for="(n, index) in 10" :key="index">{{ n }}</span></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          message: 'Foo'
        },
        {
          message: 'Bar'
        }
      ],
      parentMessage: 'parent',
      itemIndex: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  methods: {
    funPush () {
      this.items.push({ message: 'item-' + this.itemIndex++ })
    },
    funPop () {
      this.items.pop()
    },
    funShift () {
      this.items.shift()
    },
    funUnshift () {
      this.items.unshift({ message: 'item-' + this.itemIndex++ })
    },
    funSplice () {
      this.items.splice(3, 0, { message: 'item-' + this.itemIndex++ })
    },
    funSort () {
      this.items.sort()
    },
    funReverse () {
      this.items.reverse()
    },
    funFilter () {
      this.items = this.items.filter(function (item) {
        return item.message.match(/item-/)
      })
    },
    funConcat () {
      this.items = this.items.concat({
        message: 'concat-item' + this.itemIndex++
      })
    },
    funMap () {
      this.items = this.items.map(function (item) {
        return {
          message: item.message + ' ' + new Date().toLocaleString()
        }
      })
    }
  },
  computed: {
    evenNumbers () {
      return this.numbers.filter(item => {
        return item % 2 === 0
      })
    }
  }
}
</script>
