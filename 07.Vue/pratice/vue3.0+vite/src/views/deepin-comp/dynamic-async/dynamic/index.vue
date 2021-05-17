<template>
  <div>
    <div>
      <button @click="handleClick(0)">Home</button>
      <button @click="handleClick(1)">Posts</button>
      <button @click="handleClick(2)">Archive</button>
    </div>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './home.vue'
import Posts from './posts.vue'
import Archive from './archive.vue'

export default {
  name: 'Dynamic',
  components: { Archive, Home, Posts },
  data () {
    return {
      currentComponent: Archive
    }
  },
  methods: {
    handleClick(param) {
      switch(param) {
      case 0:
        this.currentComponent = Home
        break;
      case 1:
        this.currentComponent = Posts
        break;
      case 2:
        this.currentComponent = Archive
        break;
      default:
        break;
      }
    }
  }
}
</script>