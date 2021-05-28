<template>
  <base-input ref="usernameInput"></base-input>
</template>

<script>
import baseInput from './baseInput.vue'

export default {
  components: { baseInput },
  mounted() {
    this.$refs.usernameInput.focusInput()
  }
}
</script>