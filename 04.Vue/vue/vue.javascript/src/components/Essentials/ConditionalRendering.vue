<template>
  <div id="root-conditionalrendering">
      <h2>Conditional Rendering</h2>

      <h3>v-if</h3>
      <span v-if="ok">Yes</span><br>
      <span v-if="yes">Yes</span>
      <span v-else>No</span>

      <h4 class="title-h4">在&lt;template&gt;元素上使用v-if条件渲染分组</h4>
      <template v-if="ok">
          <h1>Title</h1>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
      </template>

      <h4 class="title-h4">v-else</h4>
      <div v-if="Math.random() > 0.5">Now you see me.</div>
      <div v-else>Now you don't</div>

      <h4 class="title-h4">v-else-if</h4>
      <div v-if="type === 'A'">A</div>
      <div v-else-if="type === 'B'">B</div>
      <div v-else-if="type === 'C'">C</div>
      <div v-else>Not A/B/C</div>

      <h4 class="title-h4">用key管理可复用的元素</h4>
      <template v-if="loginType === 'username'">
          <label for="">username: </label>
          <input type="text" placeholder="Enter your username" key="username-input">
      </template>
      <template v-else>
        <label for="">Email: </label>
        <input type="text" placeholder="Enter your email address" key="email-input">
      </template>
      <button v-on:click="ToggleLogin">Toggle login type</button>

      <h3>v-show</h3>
      <div v-show='ok'>Hello!</div>
      <h3>v-if vs v-show</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ok: true,
      yes: true,
      type: 'B',
      loginType: 'username'
    }
  },
  methods: {
    ToggleLogin () {
      this.loginType = this.loginType === 'username' ? 'email' : 'username'
    }
  }
}
</script>
