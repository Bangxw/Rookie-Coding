<template>
  <div>
    <input type="text" :value="firstName" @input="$emit('update:first-name', $event.target.value)" /> <br>
    <input type="text" :value="lastName" @input="$emit('update:last-name', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'vModel',
  props: {
    firstName: String,
    lastName: String
  },
  emits: ['update:first-name', 'update:last-name']
}
</script>