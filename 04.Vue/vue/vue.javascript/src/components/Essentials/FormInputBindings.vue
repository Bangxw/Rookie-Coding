<template>
    <div id="root-interface">
        <h2>Form Input Bindings</h2>

        <h3>I. Basic Usage</h3>
        <h4 class="title-h4">文本</h4>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p><br>

        <h4 class="title-h4">多行文本</h4>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line; color: #f09f00">{{ mulMessage }}</p>
        <br>
        <textarea v-model="mulMessage" placeholder="add multiple lines"></textarea><br>

        <h4 class="title-h4">复选框</h4>
        <p>单个复选框，绑定到布尔值</p>
        <input type="checkbox" id="checkbox" v-model="checked">
    </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello vue!',
      mulMessage: ''
    }
  }
}
</script>
