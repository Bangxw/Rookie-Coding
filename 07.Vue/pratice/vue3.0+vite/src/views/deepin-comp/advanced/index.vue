<template>
  <div>
    <custom-input
      :modelValue="searchText"
      @update:model-value="searchText = $event"
    />
    <br />
    <datapicker data-status="activated" @change="submitChange"></datapicker>
  </div>
</template>
  
<script>
import CustomInput from "./customInput.vue";
import DataPicker from "./dataPicker.vue"

export default {
  name: "AdvancedComponent",
  components: { CustomInput, DataPicker },
  data() {
    return {
      searchText: "Hello Vue!",
    };
  },
  methods: {
    submitChange(event) {
      console.log(event.target.value);
    },
  },
};
</script>