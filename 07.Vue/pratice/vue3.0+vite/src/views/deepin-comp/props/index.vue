<template>
  <div>
    <blog-post :title="post.title + ' by ' + post.author.name"></blog-post>
    <blog-post :likes="42" />
    <blog-post :likes="post.likes" />
  </div>
</template>

<script>
import BlogPost from "./blogPost.vue";

export default {
  name: "Props",
  components: { BlogPost },
  data() {
    return {
      post: {
        title: "My journey with vue",
        author: {
          name: 'Mike'
        },
        likes: 42
      },
    };
  },
};
</script>