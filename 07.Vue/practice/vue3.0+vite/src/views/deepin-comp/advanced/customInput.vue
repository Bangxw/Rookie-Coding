<template>
  <input v-model="value" />
</template>

<script>
export default {
  name: "custom-input",
  props: {
    modelValue: [String, Number],
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:model-value", value);
      },
    },
  },
};
</script>