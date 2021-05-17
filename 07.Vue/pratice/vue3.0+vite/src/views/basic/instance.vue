<template>
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <p>{{ number + 1}}</p>
  <p>{{ ok ? 'yes' : 'no' }}</p>
  <p>{{ message.split('').reverse().join('') }}</p>
</template>

<script>
export default {
  name: "Instance",
  data() {
    return {
      rawHtml: `<span style="color: red">This should be red.</span>`,
      message: 'Hello Vue!',
      number: 22,
      ok: true
    }
  }
}
</script>