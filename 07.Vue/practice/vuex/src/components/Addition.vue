<template>
  <div>
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="handleAdd">+1</button>&nbsp;
    <button @click="handleAddN">+3</button>&nbsp;
    <button @click="handleSyncAdd">+1 Async</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    handleAdd () {
      this.$store.commit('add')
    },
    handleAddN () {
      this.$store.commit('addN', 3)
    },
    handleSyncAdd () {
      this.$store.dispatch('addAsync', 3)
    }
  }
}
</script>
