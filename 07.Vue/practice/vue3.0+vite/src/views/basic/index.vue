<template>
  <div>
    <h2>模板语法</h2>
    <Instance />
    <hr />

    <h2>Data Property和方法</h2>
    <DataMethod />
    <hr />

    <h2>计算属性和侦听器</h2>
    <Computed />
    <hr />

    <h2>列表渲染</h2>
    <List />
    <hr />

    <h2>监听事件</h2>
    <Events />
    <hr />

    <h2>表单输入绑定</h2>
    <Forms />
    <hr />

    <h2>组件基础</h2>
    <ComponentBasic />
  </div>
</template>

<script>
import Instance from "./instance.vue";
import DataMethod from "./data-method.vue";
import Computed from "./computed.vue";
import List from "./list.vue";
import Events from "./events.vue";
import Forms from "./forms.vue";
import ComponentBasic from "./component/index.vue"

export default {
  components: { Instance, DataMethod, Computed, List, Events, Forms, ComponentBasic },
};
</script>