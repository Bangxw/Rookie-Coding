<template>
  <div id="components-demo">
    <button-counter />
    <button-counter />
    <button-counter />
    <br /><br />

    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
        v-for="item in posts"
        :key="item.id"
        :title="item.title"
        @enlarge-text="onEnlargeText"
      />
    </div>
    <br /><br />

    <custom-input
      :model-value="searchText"
      @update:model-value="searchText = $event"
    />
    <br /><br />

    <alert-box>Something bad happened.</alert-box>
  </div>
</template>

<script>
import ButtonCounter from "./buttonCounter.vue";
import BlogPost from "./blogPost.vue";
import CustomInput from "./customInput.vue";
import AlertBox from './alertBox.vue'

export default {
  name: "ComponentBasic",
  components: { ButtonCounter, BlogPost, CustomInput, AlertBox },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "My journey with vue",
        },
        {
          id: 2,
          title: "Bloggin with vue",
        },
        {
          id: 3,
          title: "Why vue is so fun",
        },
      ],
      postFontSize: 1,
    };
  },
  methods: {
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    },
  },
};
</script>