<template>
  <div>
    <h4>{{ title }}</h4>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "Props",
  props: {
    title: {
      type: String,
    },
    propA: Number,
    propB: [String, Number],
    // propC: {
    //   type: String,
    //   required: true,
    // },
    propD: {
      type: Number,
      default: 100,
    },
    propE: {
      type: Object,
      default: function () {
        return { message: "hello" };
      },
    },
    propF: {
      validator: function (value) {
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      },
    },
    propG: {
      type: Function,
      default: function () {
        return "Default function";
      },
    },
  },
};
</script>