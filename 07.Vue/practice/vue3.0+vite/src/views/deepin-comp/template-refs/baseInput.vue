<template>
  <input ref="input">
</template>

<script>
export default {
  methods: {
    focusInput() {
      this.$refs['input'].focus()
    }
  }
}
</script>
