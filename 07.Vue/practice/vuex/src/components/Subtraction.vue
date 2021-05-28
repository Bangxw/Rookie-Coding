<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="handleSub">-1</button>&nbsp;
    <button @click="handleSubN">-3</button>
    <button @click="subAsyncN(3)">Async -3</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsyncN']),
    handleSub () {
      this.sub()
    },
    handleSubN () {
      this.subN(3)
    },
    handleAsyncSubN () {
      this.subAsyncN(3)
    }
  }
}
</script>
