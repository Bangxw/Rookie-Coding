<template>
  <div>
    <h5>我是第二层组件</h5>
    <third-comp></third-comp>
  </div>
</template>

<script>
import thirdComp from './third-comp/index.vue'

export default {
  name: "second-comp",
  components: { thirdComp }
}
</script>
