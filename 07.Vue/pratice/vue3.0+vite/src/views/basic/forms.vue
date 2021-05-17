<template>
  <div>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>
  </div>

  <div id="v-model-multiple-checkboxes">
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <input type="checkbox" id="basir" value="Basir" v-model="checkedNames" />
    <label for="basir">Basir</label>
  </div>

  <div id="v-modal-radiobutton">
    <input type="radio" id="one" value="one" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="two" v-model="picked" />
    <label for="two">Two</label>
  </div>
  <br />

  <div id="v-model-select" class="demo">
    <select v-model="selected">
      <option disabled>Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <br />

  <input v-model.trim.lazy="msg" />
  <input v-model.number="number" />
</template>

<script>
export default {
  name: "Forms",
  data() {
    return {
      checked: true,
      checkedNames: ["Basir"],
      picked: "one",
      selected: "A",
      msg: "lazy v-model",
      number: '1111'
    };
  },
  methods: {},
};
</script>