<template>
  <div>
    <input
      type="text"
      v-model="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p>{{ modelValue }}</p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
  },
};
</script>