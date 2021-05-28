<template>
  <div>
    <h5>我是第三层组件</h5>
    <p>{{ user }} - {{ modelValue.value }}</p>
  </div>
</template>

<script>
export default {
  name: "third-comp",
  inject: ['user', 'modelValue'],
}
</script>

