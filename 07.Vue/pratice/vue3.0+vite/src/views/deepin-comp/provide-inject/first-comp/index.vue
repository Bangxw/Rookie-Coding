<template>
  <div>
    <h5>我是第一层组件</h5>
    <second-comp></second-comp>
  </div>
</template>

<script>
import secondComp from './second-comp/index.vue'

export default {
  name: "first-comp",
  components: { secondComp }
}
</script>
