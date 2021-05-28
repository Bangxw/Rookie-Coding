<template>
  <div>
    <custom-comp @my-event="handleEvent"></custom-comp>
    <vModel v-model:first-name="firstName" v-model:last-name="lastName"></vModel>
  </div>
</template>

<script>
import customComp from "./custom.vue";
import vModel from './vModel.vue'

export default {
  name: "EventComp1",
  components: { customComp, vModel },
  data() {
    return {
      firstName: 'John',
      lastName: 'King'
    }
  },
  methods: {
    handleEvent(e) {
      console.log("Hello!!!" + e);
    },
  },
};
</script>
