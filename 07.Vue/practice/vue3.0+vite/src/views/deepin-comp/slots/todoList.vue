<template>
  <ul>
    <li v-for="item,index in items" :key="index">
      <slot :item="item" test-data="Hello HaHa~!">{{ item }}</slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: ["Item 01", "Item 02", "Item 03"],
    };
  },
};
</script>
