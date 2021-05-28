<template>
  <!-- <router-link to="/basic">Basic</router-link> -->
  <!-- <router-view></router-view> -->
  <div>
    <basic v-if="false" />
    <deepin-comp v-if="false" />
    <composition />
  </div>
</template>

<script>
import Basic from './views/basic/index.vue'
import DeepinComp from './views/deepin-comp/index.vue'
import Composition from './views/composition/index.vue'

export default {
  name: 'app',
  components: { Basic, DeepinComp, Composition }
}
</script>
