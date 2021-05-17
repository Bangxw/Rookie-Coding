<template>
  <div>
    <h4>Props</h4>
    <introduction />
    <hr />
  </div>
</template>

<script>
import Introduction from './introduction/index.vue'

export default {
  name: 'Component',
  components: {
    Introduction
  }
}
</script>