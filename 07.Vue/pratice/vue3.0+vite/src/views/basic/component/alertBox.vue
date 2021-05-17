<template>
  <div>
    <div class="demo-alert-box">
      <strong>Error! </strong>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlertBox'
}
</script>