<template>
  <div id="basic-event">
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>

  <!-- 阻止单击事件继续传播 -->
  <a @click.stop="doThis"></a>

  <!-- 提交事件不再重载页面 -->
  <form action="" @submit.prevent="onSubmit"></form>

  <!-- 修饰符可以串联 -->
  <a href="" @click.stop.prevent="doThat"></a>

  <!-- 只有修饰符 -->
  <form action="" @submit.prevent></form>

  <div @click.capture="doThis">...</div>
  <div @click.self="doThat">...</div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      counter: 0
    }
  }
}
</script>