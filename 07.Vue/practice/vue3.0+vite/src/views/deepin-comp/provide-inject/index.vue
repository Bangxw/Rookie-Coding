<template>
  <div>
    <first-comp></first-comp>
    <input v-model="modelValue" />
  </div>
</template>

<script>
import firstComp from "./first-comp/index.vue";
import { computed } from 'vue'

export default {
  name: "provide-inject",
  components: { firstComp },
  data() {
    return {
      modelValue: "Hello Vue",
    };
  },
  provide() {
    return {
      user: "John Doe",
      modelValue: computed(() => this.modelValue),
    };
  },
};
</script>

