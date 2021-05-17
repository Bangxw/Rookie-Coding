<template>
  <div>
    <h4>{{ title }}</h4>
    <button @click="$emit('enlargeText', 0.1)">Enlarge Text</button>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    title: {
      type: Object,
    },
  },
};
</script>