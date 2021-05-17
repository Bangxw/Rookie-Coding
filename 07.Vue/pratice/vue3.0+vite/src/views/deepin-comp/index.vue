<template>
  <div>
    <h4>Props</h4>
    <comp-props></comp-props>
    <hr />

    <h4>非Prop的Attribute</h4>
    <advanced-comp></advanced-comp>
    <hr />

    <h4>子组件调用父组件方法</h4>
    <event-comp></event-comp>
    <hr />

    <h4>插槽</h4>
    <slots-comp></slots-comp>
    <hr />

    <h4>Provide/Inject</h4>
    <provide-inject></provide-inject>
    <hr />

    <h4>动态组件/异步组件</h4>
    <dynamic-async></dynamic-async>
    <hr />

    <h4>模板引用</h4>
    <template-refs></template-refs>
  </div>
</template>

<script>
import CompProps from './props/index.vue'
import AdvancedComp from './advanced/index.vue'
import EventComp from './event/index.vue'
import SlotsComp from './slots/index.vue'
import ProvideInject from './provide-inject/index.vue'
import DynamicAsync from './dynamic-async/index.vue'
import TemplateRefs from './template-refs/index.vue'

export default {
  name: 'Component',
  components: {
    CompProps, AdvancedComp, EventComp, SlotsComp, ProvideInject, DynamicAsync, TemplateRefs
  }
}
</script>